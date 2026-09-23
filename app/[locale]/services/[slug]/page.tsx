import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getServiceBySlug, services } from "@/lib/services";
import { towingIntents } from "@/lib/towingIntents";
import { zoneNames } from "@/lib/areas";
import { business, ogBase } from "@/lib/business";
import { CallButton } from "@/components/CallButton";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { serviceIcons, CheckIcon, ArrowIcon } from "@/components/Icons";
import { SplitHero } from "@/components/sections/SplitHero";
import { FAQ } from "@/components/sections/FAQ";
import { AreaServed } from "@/components/sections/AreaServed";
import { ContactSection } from "@/components/sections/ContactSection";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const s of services) params.push({ locale, slug: s[locale].slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const service = getServiceBySlug(slug, l);
  if (!service) return {};
  const c = service[l];
  // This page and /remorquage shipped the same title and a
  // byte-identical description, both indexable, both chasing "remorquage
  // gatineau". /remorquage is the pillar — it holds the hub links
  // and the Ads spend — so the towing entry consolidates into it and drops
  // out of the sitemap. It stays crawlable and linked for users and paid
  // traffic; no noindex, which would contradict the canonical. The hreflang
  // cluster belongs to the pillar too, so this page declares none.
  const canonicalizedToPillar = service.category === "towing";

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: canonicalizedToPillar
      ? { canonical: `/${l}/remorquage` }
      : {
          canonical: `/${l}/services/${c.slug}`,
          languages: {
            "fr-CA": `/fr/services/${service.fr.slug}`,
            "en-CA": `/en/services/${service.en.slug}`,
            "x-default": `/fr/services/${service.fr.slug}`,
          },
        },
    openGraph: {
      ...ogBase(l),
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/services/${c.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const service = getServiceBySlug(slug, l);
  if (!service) notFound();

  const dict = getDictionary(l);
  const c = service[l];
  const others = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        name={c.name}
        description={c.metaDescription}
        url={`${business.domain}/${l}/services/${c.slug}`}
        areaServed={zoneNames(l)}
        available247={service.category === "towing"}
      />
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.services, url: `/${l}/services` },
              { name: c.name, url: `/${l}/services/${c.slug}` },
            ]}
          />
        }
        tag={c.tagline}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.intro}
        imageAlt={c.tagline}
        image={
          service.category === "towing"
            ? { kind: "static", src: "/remorquage.webp" }
            : { kind: "photo", name: "mecanique.webp" }
        }
        // Repair services are walk-in shop work, so the shop's trust points
        // apply. Towing has its own 24/7 badge and none of these fit it.
        trustBar={
          service.category === "towing"
            ? undefined
            : [dict.badges.walkIn, dict.badges.openSat, dict.badges.local]
        }
        alwaysOpen={service.category === "towing"}
      />

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-bold">{dict.serviceDetail.included}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-steel-200 bg-white p-4">
                  <CheckIcon width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-steel-200 bg-paper p-6">
              <h2 className="font-display text-xl font-bold">{dict.serviceDetail.ctaTitle}</h2>
              <p className="mt-2 text-sm text-steel-500">{dict.serviceDetail.ctaText}</p>
              <div className="mt-5 space-y-2.5">
                <CallButton label={dict.cta.callNow} showNumber size="lg" className="w-full" />
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[var(--radius)] border border-steel-300 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {dict.cta.directions} →
                </a>
              </div>
              <ul className="mt-6 space-y-2 border-t border-steel-200 pt-5 text-sm text-steel-500">
                <li className="flex items-center gap-2"><CheckIcon width={16} height={16} className="text-accent" />{dict.badges.walkIn}</li>
                <li className="flex items-center gap-2"><CheckIcon width={16} height={16} className="text-accent" />{dict.badges.openSat}</li>
                <li className="flex items-center gap-2"><CheckIcon width={16} height={16} className="text-accent" />{business.address.street}, {business.address.sector}</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Towing hub — surfaces the ad-landing pages under /remorquage/* that
            otherwise have no link from normal site navigation, grouped by
            zone / specialty / situation instead of one flat undifferentiated
            list (a flat list of 9 near-identical "Remorquage ..." labels read
            as noise, not as options). */}
        {service.id === "remorquage" && (
          <div className="mt-16 space-y-10 border-t border-steel-200 pt-10">
            <div>
              <h2 className="font-display text-xl font-bold">
                {l === "fr" ? "Remorquage par secteur" : "Towing by area"}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href={`/${l}/remorquage`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-steel-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l === "fr" ? "Remorquage à Gatineau" : "Towing in Gatineau"}
                  <ArrowIcon width={16} height={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
                {towingIntents
                  .filter((intent) => intent.group === "zone")
                  .map((intent) => (
                    <Link
                      key={intent.slug}
                      href={`/${l}/remorquage/${intent.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-steel-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {intent[l].serviceName}
                      <ArrowIcon width={16} height={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold">
                {l === "fr" ? "Remorquage spécialisé" : "Specialized towing"}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {towingIntents
                  .filter((intent) => intent.group === "specialty")
                  .map((intent) => (
                    <Link
                      key={intent.slug}
                      href={`/${l}/remorquage/${intent.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-steel-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {intent[l].serviceName}
                      <ArrowIcon width={16} height={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold">
                {l === "fr" ? "Selon votre situation" : "Based on your situation"}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {towingIntents
                  .filter((intent) => intent.group === "situation")
                  .map((intent) => (
                    <Link
                      key={intent.slug}
                      href={`/${l}/remorquage/${intent.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-steel-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {intent[l].serviceName}
                      <ArrowIcon width={16} height={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Related services */}
        <div className="mt-16 border-t border-steel-200 pt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">{dict.nav.services}</h2>
            <Link href={`/${l}/services`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              {dict.serviceDetail.back}<ArrowIcon width={16} height={16} />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => {
              const OtherIcon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.id}
                  href={`/${l}/services/${s[l].slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-steel-200 bg-white p-4 transition-colors hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    {OtherIcon ? <OtherIcon width={20} height={20} /> : null}
                  </span>
                  <span className="font-display text-sm font-bold">{s[l].name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* The return half of the mesh: every zone page links out to every
          service, so every service page links back to every zone. Gatineau
          leads and stays unlinked — the two hub pages own that term, it has
          no zone page of its own. */}
      <AreaServed dict={dict} locale={l} branch="repair" areas={zoneNames(l)} />

      <FAQ title={c.faqTitle} items={c.faq} />

      {/* NAP + map. These pages are Ads landing pages too, and the intent
          pages that score better on Landing Page Experience all carry this
          block — transparency is one of Google's stated LPE criteria. */}
      <ContactSection locale={l} dict={dict} alwaysOpen={service.category === "towing"} />
    </>
  );
}

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
    for (const s of services) {
      // Towing left this route for /remorquage; only the shop's own work is here.
      if (s.category !== "repair") continue;
      params.push({ locale, slug: s[locale].slug });
    }
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
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${l}/garage/${c.slug}`,
      languages: {
        "fr-CA": `/fr/garage/${service.fr.slug}`,
        "en-CA": `/en/garage/${service.en.slug}`,
        "x-default": `/fr/garage/${service.fr.slug}`,
      },
    },
    openGraph: {
      ...ogBase(l),
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/garage/${c.slug}`,
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
  const others = services.filter((s) => s.category === "repair" && s.id !== service.id);

  return (
    <>
      <ServiceJsonLd
        name={c.name}
        description={c.metaDescription}
        url={`${business.domain}/${l}/garage/${c.slug}`}
        areaServed={zoneNames(l)}
      />
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.mechanicCategory, url: `/${l}/garage` },
              { name: c.name, url: `/${l}/garage/${c.slug}` },
            ]}
          />
        }
        tag={c.tagline}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.intro}
        imageAlt={c.tagline}
        image={{ kind: "photo", name: "mecanique.webp" }}
        trustBar={[dict.badges.walkIn, dict.badges.openSat, dict.badges.local]}
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


        {/* Related services */}
        <div className="mt-16 border-t border-steel-200 pt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">{dict.nav.services}</h2>
            <Link href={`/${l}/garage`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              {dict.serviceDetail.back}<ArrowIcon width={16} height={16} />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => {
              const OtherIcon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.id}
                  href={`/${l}/garage/${s[l].slug}`}
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
      <ContactSection locale={l} dict={dict} />
    </>
  );
}

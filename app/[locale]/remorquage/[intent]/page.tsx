import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase, towingStartingPrice } from "@/lib/business";
import { towingIntents, getTowingIntentContent } from "@/lib/towingIntents";
import { zoneNames } from "@/lib/areas";
import { CallButton } from "@/components/CallButton";
import { CheckIcon } from "@/components/Icons";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { BrandBurst } from "@/components/BrandBurst";
import { Reveal } from "@/components/Reveal";
import { SplitHero } from "@/components/sections/SplitHero";
import { FAQ } from "@/components/sections/FAQ";
import { AreaServed } from "@/components/sections/AreaServed";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export function generateStaticParams() {
  const params: { locale: string; intent: string }[] = [];
  for (const locale of locales) {
    for (const intent of towingIntents) params.push({ locale, intent: intent.slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; intent: string }>;
}): Promise<Metadata> {
  const { locale, intent } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const result = getTowingIntentContent(intent, l);
  if (!result) return {};
  const { content } = result;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    // Ads-only near-duplicates stay crawlable (follow) so they pass link
    // equity on, but out of the index so they can't compete with the page
    // that actually owns the intent. See TowingIntent.indexable.
    ...(result.intent.indexable === false
      ? { robots: { index: false, follow: true } }
      : {}),
    alternates: {
      canonical: `/${l}/remorquage/${intent}`,
      languages: {
        "fr-CA": `/fr/remorquage/${intent}`,
        "en-CA": `/en/remorquage/${intent}`,
        "x-default": `/fr/remorquage/${intent}`,
      },
    },
    openGraph: {
      ...ogBase(l),
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${business.domain}/${l}/remorquage/${intent}`,
    },
  };
}

export default async function TowingIntentPage({
  params,
}: {
  params: Promise<{ locale: string; intent: string }>;
}) {
  const { locale, intent: slug } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const result = getTowingIntentContent(slug, l);
  if (!result) notFound();

  const { intent, content: c } = result;
  const dict = getDictionary(l);

  return (
    <div className="pb-24 md:pb-0">
      <ServiceJsonLd
        name={c.serviceName}
        description={c.metaDescription}
        url={`${business.domain}/${l}/remorquage/${slug}`}
        serviceType={c.serviceName}
        areaServed={c.areas ?? zoneNames(l)}
        available247
        startingPrice={
          // Only the price intent states a figure on the page, and the schema
          // must not claim more than the page does.
          c.priceQuote
            ? { amount: towingStartingPrice.amount, currency: towingStartingPrice.currency }
            : undefined
        }
      />
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.towingCategory, url: `/${l}/remorquage-gatineau` },
              { name: c.serviceName, url: `/${l}/remorquage/${slug}` },
            ]}
          />
        }
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={intent.heroImage}
        imageAlt={`${c.serviceName} — Mécano Express, Aylmer (Gatineau)`}
        trustBar={c.trustBar}
        alwaysOpen
      />

      {/* Price/quote panel — answers "how much" head-on with the
          free-quote-by-phone message, placed right under the hero so the
          price intent is satisfied immediately. Only rendered when the
          intent provides priceQuote (currently the "prix" page). */}
      {c.priceQuote && (
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
                {c.priceQuote.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-steel-500">{c.priceQuote.text}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.priceQuote.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-medium">
                    <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CallButton label={dict.cta.callNow} showNumber size="lg" pulse />
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Cost drivers — the price intent asks "how much", and the quote panel
          above answers "call us". This gives the visitor something concrete to
          take away without inventing a figure. See TowingIntentContent.priceFactors. */}
      {c.priceFactors && (
        <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              {c.priceFactors.title}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-steel-500">{c.priceFactors.intro}</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {c.priceFactors.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-steel-200 bg-white p-6 shadow-sm"
                >
                  <dt className="font-display text-lg font-bold">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-steel-500">{item.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm font-semibold text-ink">{c.priceFactors.footnote}</p>
          </Reveal>
        </section>
      )}

      <Testimonials locale={l} />

      {/* Reason section — the "why us" argument specific to this intent */}
      <section className="bg-steel-100/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {c.reasonsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {c.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-steel-200/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 hover:ring-accent/30">
                  <span className="font-display text-sm font-bold text-steel-300">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-bold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {c.areas && <AreaServed dict={dict} locale={l} branch="towing" areas={c.areas} />}

      <FAQ title={c.faqTitle} items={c.faq} />

      <RelatedLinks
        title={l === "fr" ? "Autres services de remorquage" : "Other towing services"}
        links={towingIntents
          .filter((other) => other.slug !== slug)
          .map((other) => ({
            href: `/${l}/remorquage/${other.slug}`,
            label: other[l].serviceName,
          }))}
      />

      {/* Secondary CTA before contact */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-graphite-950 p-8 text-center text-white sm:p-10">
            <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <BrandBurst className="absolute inset-0 h-full w-full" />
            <h2 className="font-display relative text-2xl font-extrabold">{c.ctaCardTitle}</h2>
            <p className="relative mx-auto mt-2 max-w-md text-steel-300">{c.ctaCardText}</p>
            <div className="relative mt-6 flex justify-center">
              <CallButton label={dict.cta.callNow} showNumber size="lg" pulse />
            </div>
          </div>
        </Reveal>
      </section>

      <ContactSection locale={l} dict={dict} alwaysOpen />
    </div>
  );
}

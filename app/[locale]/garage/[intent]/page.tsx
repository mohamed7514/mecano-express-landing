import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { zoneNames } from "@/lib/areas";
import { mechanicIntents, getMechanicIntentContent } from "@/lib/mechanicIntents";
import { CallButton } from "@/components/CallButton";
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
    for (const intent of mechanicIntents) params.push({ locale, intent: intent.slug });
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
  const result = getMechanicIntentContent(intent, l);
  if (!result) return {};
  const { content } = result;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    // Ads-only near-duplicates stay crawlable (follow) so they pass link
    // equity on, but out of the index so they can't compete with the page
    // that actually owns the intent. See MechanicIntent.indexable.
    ...(result.intent.indexable === false
      ? { robots: { index: false, follow: true } }
      : {}),
    alternates: {
      canonical: `/${l}/garage/${intent}`,
      languages: {
        "fr-CA": `/fr/garage/${intent}`,
        "en-CA": `/en/garage/${intent}`,
        "x-default": `/fr/garage/${intent}`,
      },
    },
    openGraph: {
      ...ogBase(l),
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${business.domain}/${l}/garage/${intent}`,
    },
  };
}

export default async function MechanicIntentPage({
  params,
}: {
  params: Promise<{ locale: string; intent: string }>;
}) {
  const { locale, intent: slug } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const result = getMechanicIntentContent(slug, l);
  if (!result) notFound();

  const { intent, content: c } = result;
  const dict = getDictionary(l);

  return (
    <div className="pb-24 md:pb-0">
      <ServiceJsonLd
        name={c.serviceName}
        description={c.metaDescription}
        url={`${business.domain}/${l}/garage/${slug}`}
        serviceType={c.serviceName}
        areaServed={c.areas ?? zoneNames(l)}
      />
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.mechanicCategory, url: `/${l}/garage-gatineau` },
              { name: c.serviceName, url: `/${l}/garage/${slug}` },
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
      />

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

      {c.areas && <AreaServed dict={dict} locale={l} branch="repair" areas={c.areas} />}

      <FAQ title={c.faqTitle} items={c.faq} />

      <RelatedLinks
        title={l === "fr" ? "Autres services du garage" : "Other garage services"}
        links={mechanicIntents
          .filter((other) => other.slug !== slug)
          .map((other) => ({
            href: `/${l}/garage/${other.slug}`,
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

      <ContactSection locale={l} dict={dict} />
    </div>
  );
}

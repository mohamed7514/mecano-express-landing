import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { zoneNames } from "@/lib/areas";
import { getMechanicIntentContent } from "@/lib/mechanicIntents";
import { services } from "@/lib/services";
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

/**
 * The campaign landing pages under /garage/<slug>.
 *
 * They live at fixed paths rather than behind a dynamic segment, because
 * their URLs are frozen — they are ad destinations, and Next resolves a
 * static segment before a dynamic one, which lets /garage/[slug] carry the
 * service slugs without touching them.
 *
 * They ship `noindex, follow`: the search intent each one serves is already
 * owned by a stronger page, so indexing them would split the signal between
 * near-duplicates. Crawlable so they pass equity on, out of the index so they
 * cannot compete.
 */
export function campaignMetadata(l: Locale, slug: string): Metadata {
  const result = getMechanicIntentContent(slug, l);
  if (!result) return { robots: { index: false, follow: false }, alternates: { canonical: null } };
  const { content } = result;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${l}/garage/${slug}`,
      languages: {
        "fr-CA": `/fr/garage/${slug}`,
        "en-CA": `/en/garage/${slug}`,
        "x-default": `/fr/garage/${slug}`,
      },
    },
    openGraph: {
      ...ogBase(l),
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${business.domain}/${l}/garage/${slug}`,
    },
  };
}

export function CampaignLanding({ locale: l, slug }: { locale: Locale; slug: string }) {
  const result = getMechanicIntentContent(slug, l);
  if (!result) notFound();

  const { intent, content: c } = result;
  const dict = getDictionary(l);
  const repair = services.filter((s) => s.category === "repair");

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
              { name: dict.nav.mechanicCategory, url: `/${l}/garage` },
              { name: c.serviceName, url: `/${l}/garage/${slug}` },
            ]}
          />
        }
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={intent.heroImage}
        imageAlt={`${c.serviceName} — Mécano Express, ${business.address.street}, ${business.address.sector}`}
        trustBar={c.trustBar}
      />

      <Testimonials locale={l} />

      <section className="bg-steel-100/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {c.reasonsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {c.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-steel-200/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 hover:ring-accent/30">
                  <span className="font-display text-sm font-bold text-steel-300">0{i + 1}</span>
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

      {/* Links out to the real service pages. These used to point at the
          other intents, which were area pages that have since moved — and a
          noindex page's best job is passing what it receives on to pages that
          can actually rank. */}
      <RelatedLinks
        title={l === "fr" ? "Nos services de mécanique" : "Our mechanical services"}
        links={repair.map((s) => ({
          href: `/${l}/garage/${s[l].slug}`,
          label: s[l].name,
        }))}
      />

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

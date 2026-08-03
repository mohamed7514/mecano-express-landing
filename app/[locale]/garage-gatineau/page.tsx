import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
import { mechanicIntents } from "@/lib/mechanicIntents";
import { CallButton } from "@/components/CallButton";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { SplitHero } from "@/components/sections/SplitHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Dedicated Ads landing page for the "Garage Mecanique Outaouais" campaign.
 * H1/trust copy is pulled directly from Keywords/mecanicien/3_garage_annonces.csv
 * so the page message-matches the ad text (Quality Score).
 * Slug is deliberately identical in both locales (garage-gatineau) — this
 * is the exact Final URL already set in that campaign's ad groups; proxy.ts
 * redirects the bare, unprefixed path to /fr or /en by browser language.
 */
const copy: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    heroTitle: string;
    heroHighlight: string;
    subtitle: string;
    trustBar: string[];
    ctaCardTitle: string;
    ctaCardText: string;
  }
> = {
  fr: {
    metaTitle: "Garage à Aylmer, Gatineau — Diagnostic honnête, prix confirmé | Mécano Express",
    metaDescription:
      "Garage mécanique à Aylmer et Gatineau. Diagnostic honnête, prix confirmé avant travaux, technicien certifié, estimé gratuit. Sans rendez-vous. Appelez le (819) 921-7869.",
    eyebrow: "Garage & mécanique · Aylmer, Gatineau",
    h1: "Garage à Aylmer et Gatineau",
    heroTitle: "Garage à",
    heroHighlight: "Aylmer & Gatineau",
    subtitle:
      "Votre garagiste de quartier à Gatineau. Diagnostic honnête, prix confirmé avant tout travail, sans frais cachés.",
    trustBar: ["Estimé gratuit", "Technicien certifié", "Aucun frais caché", "Rendez-vous rapide"],
    ctaCardTitle: "Besoin d'une réparation ?",
    ctaCardText:
      "Passez nous voir sans rendez-vous ou appelez pour une estimation honnête, prix confirmé avant tout travail.",
  },
  en: {
    metaTitle: "Garage in Aylmer, Gatineau — Honest Diagnostic, Upfront Pricing | Mécano Express",
    metaDescription:
      "Auto repair garage in Aylmer and Gatineau. Honest diagnostic, price confirmed before work, certified technician, free estimate. Walk-in welcome. Call (819) 921-7869.",
    eyebrow: "Garage & mechanic · Aylmer, Gatineau",
    h1: "Garage in Aylmer & Gatineau",
    heroTitle: "Garage in",
    heroHighlight: "Aylmer & Gatineau",
    subtitle:
      "Honest diagnostic, price confirmed before any work. Your neighborhood garage, no hidden fees.",
    trustBar: ["Free estimate", "Certified technician", "No hidden fees", "Fast appointment"],
    ctaCardTitle: "Need a repair?",
    ctaCardText:
      "Drop in without an appointment or call for an honest estimate, price confirmed before any work.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const c = copy[l];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${l}/garage-gatineau`,
      languages: { fr: "/fr/garage-gatineau", en: "/en/garage-gatineau", "x-default": "/fr/garage-gatineau" },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/garage-gatineau`,
    },
  };
}

export default async function GarageGatineauPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(l);
  const c = copy[l];

  return (
    <div className="pb-24 md:pb-0">
      <ServiceJsonLd
        name={l === "fr" ? "Réparation et entretien automobile" : "Auto repair & maintenance"}
        description={c.metaDescription}
        url={`${business.domain}/${l}/garage-gatineau`}
        serviceType={l === "fr" ? "Réparation automobile" : "Auto repair"}
      />

      <SplitHero
        dict={dict}
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={{ kind: "photo", name: "mecanique.webp" }}
        trustBar={c.trustBar}
      />

      <Testimonials locale={l} />

      <ServicesGrid locale={l} dict={dict} filter="repair" />

      <WhyUs dict={dict} />

      {/* Garage hub — surfaces the ad-landing pages under /garage/* that
          otherwise have no link from normal site navigation, grouped by
          zone / specialty / situation instead of one flat list. */}
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6">
        <div>
          <h2 className="font-display text-xl font-bold">
            {l === "fr" ? "Garage par secteur" : "Garage by area"}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mechanicIntents
              .filter((intent) => intent.group === "zone")
              .map((intent) => (
                <Link
                  key={intent.slug}
                  href={`/${l}/garage/${intent.slug}`}
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
            {l === "fr" ? "Réparation de freins" : "Brake repair"}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mechanicIntents
              .filter((intent) => intent.group === "specialty")
              .map((intent) => (
                <Link
                  key={intent.slug}
                  href={`/${l}/garage/${intent.slug}`}
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
            {mechanicIntents
              .filter((intent) => intent.group === "situation")
              .map((intent) => (
                <Link
                  key={intent.slug}
                  href={`/${l}/garage/${intent.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-steel-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {intent[l].serviceName}
                  <ArrowIcon width={16} height={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA before contact */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-steel-200 bg-white p-8 text-center sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-accent-hover to-accent" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold">{c.ctaCardTitle}</h2>
            <p className="mx-auto mt-2 max-w-md text-steel-500">{c.ctaCardText}</p>
            <div className="mt-6 flex justify-center">
              <CallButton label={dict.cta.callNow} showNumber size="lg" />
            </div>
          </div>
        </Reveal>
      </section>

      <ContactSection locale={l} dict={dict} />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
import type { FAQItem } from "@/lib/faq";
import { mechanicIntents } from "@/lib/mechanicIntents";
import { CallButton } from "@/components/CallButton";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/sections/FAQ";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SplitHero } from "@/components/sections/SplitHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { AreaServed } from "@/components/sections/AreaServed";
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
    heroTitle: string;
    heroHighlight: string;
    subtitle: string;
    trustBar: string[];
    ctaCardTitle: string;
    ctaCardText: string;
    faqTitle: string;
    faq: FAQItem[];
  }
> = {
  fr: {
    metaTitle: "Garage à Gatineau — Diagnostic honnête, prix confirmé",
    metaDescription:
      "Garage mécanique à Gatineau (secteur Aylmer). Diagnostic honnête, prix confirmé avant travaux, garantie 1 an. Sans rendez-vous : (819) 921-7869.",
    eyebrow: "Garage & mécanique · Gatineau",
    heroTitle: "Garage",
    heroHighlight: "à Gatineau",
    subtitle:
      "Votre garagiste de quartier à Gatineau, secteur Aylmer. Diagnostic honnête, prix confirmé avant tout travail, garantie 1 an sur pièces.",
    trustBar: ["Garantie 1 an sur pièces", "Technicien certifié", "Prix confirmé avant travaux", "Sans rendez-vous"],
    ctaCardTitle: "Besoin d'une réparation ?",
    ctaCardText:
      "Passez nous voir sans rendez-vous ou appelez pour une estimation honnête, prix confirmé avant tout travail.",
    faqTitle: "Questions fréquentes — Garage à Gatineau",
    faq: [
      {
        question: "Faut-il prendre rendez-vous ?",
        answer:
          "Non, on accepte les visites sans rendez-vous du lundi au samedi. Pour une réparation plus longue, un appel avant nous permet de vous réserver du temps.",
      },
      {
        question: "Où êtes-vous situés à Gatineau ?",
        answer:
          "Au 879 chemin Vanier, secteur Aylmer à Gatineau — accès facile depuis Hull, Aylmer et tout l'ouest de Gatineau.",
      },
      {
        question: "Donnez-vous le prix avant de commencer les travaux ?",
        answer:
          "Oui. On inspecte, on vous explique ce qui doit vraiment être fait, et on vous confirme le prix avant de commencer. Aucun frais caché sur la facture.",
      },
      {
        question: "Offrez-vous une garantie sur les réparations ?",
        answer:
          "Oui, une garantie d'un an sur les pièces et la main-d'œuvre, sur l'ensemble de nos réparations.",
      },
      {
        question: "Quels services faites-vous au garage ?",
        answer:
          "Freins, pneus, changement d'huile, diagnostic électronique, suspension et alignement, climatisation, échappement, transmission et carrosserie.",
      },
    ],
  },
  en: {
    metaTitle: "Garage in Gatineau — Honest Diagnostic, Upfront Price",
    metaDescription:
      "Auto repair garage in Gatineau (Aylmer area). Honest diagnostic, price confirmed before work, 1-year warranty. Walk-in: (819) 921-7869.",
    eyebrow: "Garage & mechanic · Gatineau",
    heroTitle: "Garage",
    heroHighlight: "in Gatineau",
    subtitle:
      "Your neighborhood garage in Gatineau, Aylmer area. Honest diagnostic, price confirmed before any work, 1-year warranty on parts.",
    trustBar: ["1-year warranty on parts", "Certified technician", "Price confirmed before work", "Walk-in welcome"],
    ctaCardTitle: "Need a repair?",
    ctaCardText:
      "Drop in without an appointment or call for an honest estimate, price confirmed before any work.",
    faqTitle: "Frequently Asked Questions — Garage in Gatineau",
    faq: [
      {
        question: "Do I need an appointment?",
        answer:
          "No, we take walk-ins Monday through Saturday. For a longer repair, a quick call ahead lets us set aside time for you.",
      },
      {
        question: "Where are you located in Gatineau?",
        answer:
          "At 879 chemin Vanier, Aylmer area in Gatineau — easy access from Hull, Aylmer and all of western Gatineau.",
      },
      {
        question: "Do you give the price before starting work?",
        answer:
          "Yes. We inspect, explain what actually needs doing, and confirm the price before we start. No hidden fees on the bill.",
      },
      {
        question: "Do you offer a warranty on repairs?",
        answer:
          "Yes, a one-year warranty on parts and labor, across all our repairs.",
      },
      {
        question: "What services do you offer at the garage?",
        answer:
          "Brakes, tires, oil changes, electronic diagnostics, suspension and alignment, air conditioning, exhaust, transmission and body work.",
      },
    ],
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
      languages: { "fr-CA": "/fr/garage-gatineau", "en-CA": "/en/garage-gatineau", "x-default": "/fr/garage-gatineau" },
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
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.mechanicCategory, url: `/${l}/garage-gatineau` },
            ]}
          />
        }
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={{ kind: "photo", name: "mecanique.webp" }}
        imageAlt={l === "fr"
          ? "Mécanicien au travail au garage Mécano Express, Aylmer (Gatineau)"
          : "Mechanic at work in the Mécano Express garage, Aylmer (Gatineau)"}
        trustBar={c.trustBar}
      />

      <Testimonials locale={l} />

      <ServicesGrid locale={l} dict={dict} filter="repair" />

      <WhyUs dict={dict} />

      {/* Gatineau-first area coverage — real, original content answering
          the "garage à Gatineau" intent directly, placed before the /garage/*
          hub links so the page reads as a destination, not just a directory. */}
      <AreaServed dict={dict} areas={["Gatineau", "Hull", "Aylmer", "Buckingham"]} />

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

      <FAQ title={c.faqTitle} items={c.faq} />

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

import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
import { CallButton } from "@/components/CallButton";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/PhotoPlaceholder";
import { BrandBurst } from "@/components/BrandBurst";
import { Reveal } from "@/components/Reveal";
import { SplitHero } from "@/components/sections/SplitHero";
import { AreaServed } from "@/components/sections/AreaServed";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Dedicated Ads landing page for the "Remorquage Outaouais" campaign. No
 * ad copy CSV exists yet for this campaign (unlike garage-gatineau), so
 * copy is built from the keyword groups in Keywords/towing/1_mots_cles.csv
 * (remorquage/remorqueuse gatineau, towing near me, secteurs Aylmer/Hull/
 * Buckingham) — adjust once real ad copy is finalized.
 * Slug is identical in both locales, mirroring garage-gatineau's pattern
 * so proxy.ts's bare-path locale redirect keeps working.
 * Ottawa/Ontario are excluded from the area list here (unlike the general
 * site) because both campaigns' negative keyword lists explicitly exclude
 * Ontario cities — this page targets Outaouais/Quebec-side traffic only.
 */
const AREAS = ["Gatineau", "Aylmer", "Hull", "Buckingham"];

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
    steps: { title: string; text: string }[];
    stepsTitle: string;
    galleryTitle: string;
    ctaCardTitle: string;
    ctaCardText: string;
  }
> = {
  fr: {
    metaTitle: "Remorquage à Gatineau, Aylmer, Hull | Mécano Express",
    metaDescription:
      "Service de remorquage et dépanneuse à Gatineau, Aylmer, Hull et Buckingham. Intervention rapide, prix confirmé avant le départ. Appelez le (819) 921-7869.",
    eyebrow: "Remorquage & dépannage · Outaouais",
    h1: "En panne à Gatineau, Aylmer ou Hull ? Remorquage rapide",
    heroTitle: "Remorquage",
    heroHighlight: "à Gatineau",
    subtitle:
      "On vous localise et on envoie une remorqueuse rapidement. Prix confirmé avant le départ, aucune surprise.",
    trustBar: ["Prix confirmé avant le départ", "Disponible jour et nuit", "Camion près de vous"],
    stepsTitle: "Comment ça marche",
    steps: [
      { title: "1. Appelez", text: "Un seul appel, pas de formulaire. On prend votre position et votre situation." },
      { title: "2. On vous localise", text: "Notre remorqueuse la plus proche est envoyée directement vers vous." },
      { title: "3. On vous remorque", text: "Véhicule et conducteur en sécurité, prix confirmé avant le départ." },
    ],
    galleryTitle: "Notre flotte, sur la route",
    ctaCardTitle: "Toujours en panne ?",
    ctaCardText: "N'attendez pas sur le bord de la route — appelez, on s'occupe du reste.",
  },
  en: {
    metaTitle: "Towing in Gatineau, Aylmer, Hull | Mécano Express",
    metaDescription:
      "Towing and tow truck service in Gatineau, Aylmer, Hull and Buckingham. Fast dispatch, price confirmed before departure. Call (819) 921-7869.",
    eyebrow: "Towing & roadside assistance · Outaouais",
    h1: "Broken down in Gatineau, Aylmer or Hull? Fast towing",
    heroTitle: "Towing",
    heroHighlight: "in Gatineau",
    subtitle:
      "We locate you and dispatch a tow truck fast. Price confirmed before departure, no surprises.",
    trustBar: ["Price confirmed before departure", "Available day and night", "Truck near you"],
    stepsTitle: "How it works",
    steps: [
      { title: "1. Call", text: "One call, no form. We get your location and situation." },
      { title: "2. We locate you", text: "Our nearest tow truck is dispatched straight to you." },
      { title: "3. We tow you", text: "You and your vehicle safe, price confirmed before departure." },
    ],
    galleryTitle: "Our fleet, on the road",
    ctaCardTitle: "Still stuck?",
    ctaCardText: "Don't wait on the side of the road — call, we'll handle the rest.",
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
      canonical: `/${l}/remorquage-gatineau`,
      languages: {
        fr: "/fr/remorquage-gatineau",
        en: "/en/remorquage-gatineau",
        "x-default": "/fr/remorquage-gatineau",
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/remorquage-gatineau`,
    },
  };
}

export default async function RemorquageGatineauPage({
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
        name={l === "fr" ? "Remorquage" : "Towing"}
        description={c.metaDescription}
        url={`${business.domain}/${l}/remorquage-gatineau`}
        serviceType={l === "fr" ? "Remorquage" : "Towing service"}
      />

      <SplitHero
        dict={dict}
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={{ kind: "static", src: "/remorquage.webp" }}
        trustBar={c.trustBar}
      />

      <Testimonials locale={l} />

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-center text-2xl font-extrabold sm:text-3xl">{c.stepsTitle}</h2>
        <div className="relative mt-12 grid gap-8 sm:grid-cols-3">
          <div
            className="absolute top-6 right-[16.5%] left-[16.5%] hidden h-0.5 bg-gradient-to-r from-accent/60 via-accent/30 to-accent/60 sm:block"
            aria-hidden="true"
          />
          {c.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="font-display relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-lg font-extrabold text-white shadow-lg shadow-accent/40">
                  {i + 1}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold">{step.title.replace(/^\d+\.\s*/, "")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fleet gallery */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-center text-2xl font-extrabold sm:text-3xl">{c.galleryTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <Photo
              name="gallery-1.webp"
              alt=""
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl border border-steel-200 object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <Photo
              name="gallery-2.webp"
              alt=""
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl border border-steel-200 object-cover"
            />
          </Reveal>
        </div>
      </section>

      <AreaServed dict={dict} areas={AREAS} />

      {/* Secondary CTA before contact */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
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

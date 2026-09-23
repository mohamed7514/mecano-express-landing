import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { CallButton } from "@/components/CallButton";
import type { FAQItem } from "@/lib/faq";
import { towingIntents } from "@/lib/towingIntents";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { Photo } from "@/components/PhotoPlaceholder";
import { BrandBurst } from "@/components/BrandBurst";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SplitHero } from "@/components/sections/SplitHero";
import { AreaServed } from "@/components/sections/AreaServed";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Dedicated Ads landing page for the "Remorquage Outaouais" campaign. No
 * ad copy CSV exists yet for this campaign (unlike garage), so
 * copy is built from the keyword groups in Keywords/towing/1_mots_cles.csv
 * (remorquage/remorqueuse gatineau, towing near me, secteurs Aylmer/Hull/
 * Buckingham) — adjust once real ad copy is finalized.
 * Slug is identical in both locales, mirroring garage's pattern
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
    heroTitle: string;
    heroHighlight: string;
    subtitle: string;
    trustBar: string[];
    steps: { title: string; text: string }[];
    stepsTitle: string;
    galleryTitle: string;
    ctaCardTitle: string;
    ctaCardText: string;
    faqTitle: string;
    faq: FAQItem[];
  }
> = {
  fr: {
    metaTitle: "Remorquage à Gatineau, Aylmer, Hull | Mécano Express",
    metaDescription:
      "Service de remorquage et dépanneuse à Gatineau, Aylmer, Hull et Buckingham. Intervention rapide, prix confirmé avant le départ. Appelez le (819) 921-7869.",
    eyebrow: "Remorquage & dépannage · Outaouais",
    heroTitle: "Remorquage",
    heroHighlight: "à Gatineau, Aylmer & Hull",
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
    faqTitle: "Questions fréquentes — Remorquage à Gatineau",
    // Written for answer engines as much as for readers: each answer opens
    // with the answer itself (never "ça dépend"), carries at least one hard
    // number and one place name, and stands alone when quoted out of context.
    // Every figure here is already published elsewhere on the site — the
    // 79,99 $ floor, the 15-minute average, the posted garage hours — so the
    // FAQ states them instead of hedging around them.
    faq: [
      {
        question: "Combien coûte un remorquage à Gatineau ?",
        answer:
          "Un remorquage commence à 79,99 $. Le montant final dépend de votre position et de la distance jusqu'à la destination : on le calcule et on vous le confirme au téléphone en deux minutes, gratuitement et sans engagement. Le prix annoncé est le prix final — aucun frais ajouté à l'arrivée, même la nuit ou la fin de semaine. La carte de débit et de crédit sont acceptées directement avec le chauffeur.",
      },
      {
        question: "En combien de temps la dépanneuse arrive-t-elle ?",
        answer:
          "Comptez environ 15 minutes en moyenne dans le secteur d'Aylmer, Hull et Gatineau. On envoie le camion disponible le plus proche de vous. Le délai réel dépend de votre position et de la circulation, alors on vous donne une estimation honnête au téléphone plutôt qu'une promesse qu'on ne peut pas tenir.",
      },
      {
        question: "Êtes-vous disponibles la nuit et la fin de semaine ?",
        answer:
          "Oui, le remorquage et le dépannage roulent 24 heures sur 24, 7 jours sur 7, y compris la nuit, la fin de semaine et les jours fériés. Le tarif ne change pas en dehors des heures normales. Le garage mécanique, lui, a des heures fixes : du lundi au samedi de 9h à 18h, au 879 chemin Vanier à Aylmer.",
      },
      {
        question: "Que faire en attendant la dépanneuse ?",
        answer:
          "Allumez vos feux de détresse, puis sortez du véhicule par la portière opposée à la circulation si vous pouvez le faire en sécurité et attendez derrière la glissière ou sur l'accotement. Sur l'autoroute, ne restez pas dans l'habitacle. Gardez votre téléphone sur vous : on vous rappelle quand le chauffeur approche. Le remorquage se fait ensuite sans passager à bord, pour votre sécurité.",
      },
      {
        question: "Quels secteurs desservez-vous autour de Gatineau ?",
        answer:
          "On couvre Gatineau, Aylmer, Hull et Buckingham, ainsi que les environs en Outaouais — Chelsea, Cantley et Val-des-Monts inclus. Notre point d'attache est le 879 chemin Vanier à Aylmer. Appelez avec votre position au (819) 921-7869 : on vous dit tout de suite si on peut vous rejoindre et en combien de temps.",
      },
      {
        question: "Le remorquage est-il couvert par mon assurance ?",
        answer:
          "Plusieurs polices d'assurance automobile au Québec incluent une clause d'assistance routière qui couvre tout ou partie du remorquage. Vérifiez auprès de votre assureur, avant ou après l'intervention. On fournit une facture détaillée avec la date, le point de départ, la destination et le montant — c'est ce qu'il faut pour une réclamation.",
      },
      {
        question: "Remorquez-vous autre chose que des voitures ?",
        answer:
          "Oui : poids lourds, camions, autobus, machinerie, conteneurs, motos, VR, roulottes et bateaux. Si votre véhicule n'a pas besoin d'être remorqué, on fait aussi le survoltage de batterie et le déverrouillage de portière sur place. Précisez le type de véhicule au téléphone pour qu'on envoie le bon équipement du premier coup.",
      },
      {
        question: "Où mon véhicule sera-t-il remorqué ?",
        answer:
          "Là où vous voulez : chez vous, chez votre garagiste habituel, chez le concessionnaire, ou à notre garage au 879 chemin Vanier à Aylmer si vous voulez qu'on diagnostique le problème directement. La destination est fixée avec vous au téléphone avant le départ, parce qu'elle entre dans le calcul du prix.",
      },
    ],
  },
  en: {
    metaTitle: "Towing in Gatineau, Aylmer, Hull | Mécano Express",
    metaDescription:
      "Towing and tow truck service in Gatineau, Aylmer, Hull and Buckingham. Fast dispatch, price confirmed before departure. Call (819) 921-7869.",
    eyebrow: "Towing & roadside assistance · Outaouais",
    heroTitle: "Towing",
    heroHighlight: "in Gatineau, Aylmer & Hull",
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
    faqTitle: "Frequently Asked Questions — Towing in Gatineau",
    faq: [
      {
        question: "How much does a tow cost in Gatineau?",
        answer:
          "A tow starts at $79.99. The final amount depends on where you are and how far you're going: we work it out and confirm it by phone in two minutes, free and with no obligation. The quoted price is the final price — nothing is added on arrival, not at night and not on weekends. Debit and credit cards are accepted directly with the driver.",
      },
      {
        question: "How fast does the tow truck arrive?",
        answer:
          "Expect roughly 15 minutes on average across Aylmer, Hull and Gatineau. We dispatch the closest available truck. The real time depends on your location and traffic, so we give you an honest estimate on the phone rather than a promise we can't keep.",
      },
      {
        question: "Are you available at night and on weekends?",
        answer:
          "Yes, towing and roadside assistance run 24 hours a day, 7 days a week, including nights, weekends and holidays, and the rate does not change outside normal hours. The mechanical garage keeps set hours: Monday to Saturday, 9 AM to 6 PM, at 879 chemin Vanier in Aylmer.",
      },
      {
        question: "What should I do while waiting for the tow truck?",
        answer:
          "Turn on your hazard lights, then get out through the door away from traffic if you can do it safely and wait behind the guardrail or on the shoulder. On the highway, do not stay inside the vehicle. Keep your phone on you — we call back when the driver is close. The tow itself is done without a passenger on board, for your safety.",
      },
      {
        question: "Which areas around Gatineau do you cover?",
        answer:
          "We cover Gatineau, Aylmer, Hull and Buckingham, plus the surrounding Outaouais area including Chelsea, Cantley and Val-des-Monts. Our base is 879 chemin Vanier in Aylmer. Call with your location at (819) 921-7869 and we'll tell you right away whether we can reach you and how long it will take.",
      },
      {
        question: "Is towing covered by my insurance?",
        answer:
          "Many Quebec auto insurance policies include roadside assistance coverage that pays all or part of a tow. Check with your insurer, before or after the call-out. We provide a detailed invoice with the date, the pickup point, the destination and the amount — which is what a claim requires.",
      },
      {
        question: "Do you tow anything other than cars?",
        answer:
          "Yes: heavy trucks, buses, machinery, containers, motorcycles, RVs, trailers and boats. If your vehicle doesn't actually need towing, we also do battery boosts and car lockouts on the spot. Tell us the vehicle type on the phone so we send the right equipment the first time.",
      },
      {
        question: "Where will my vehicle be towed?",
        answer:
          "Wherever you want: your home, your own mechanic, the dealership, or our garage at 879 chemin Vanier in Aylmer if you'd like us to diagnose the problem directly. The destination is agreed with you by phone before we leave, because it factors into the price.",
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
      canonical: `/${l}/remorquage`,
      languages: {
        "fr-CA": "/fr/remorquage",
        "en-CA": "/en/remorquage",
        "x-default": "/fr/remorquage",
      },
    },
    openGraph: {
      ...ogBase(l),
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/remorquage`,
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
      <FAQJsonLd items={c.faq} />
      <ServiceJsonLd
        name={l === "fr" ? "Remorquage" : "Towing"}
        description={c.metaDescription}
        url={`${business.domain}/${l}/remorquage`}
        serviceType={l === "fr" ? "Remorquage" : "Towing service"}
        areaServed={AREAS}
        available247
      />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.towingCategory, url: `/${l}/remorquage` },
            ]}
          />
        }
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={{ kind: "static", src: "/remorquage.webp" }}
        imageAlt={l === "fr"
          ? "Remorqueuse Mécano Express prête à intervenir à Gatineau"
          : "Mécano Express tow truck ready to dispatch in Gatineau"}
        trustBar={c.trustBar}
        alwaysOpen
      />

      {/* The services, straight under the hero — this is the hub's job. Only
          services: `zone` entries belong to the areas axis and noindex landing
          pages belong nowhere a visitor or a crawler follows. */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          {l === "fr" ? "Nos services de remorquage" : "Our towing services"}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {towingIntents
            .filter((i) => i.indexable !== false && (i.group === "specialty" || i.group === "situation"))
            .map((intent, i) => (
              <Reveal key={intent.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/${l}/remorquage/${intent.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-steel-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
                >
                  <h3 className="font-display text-lg font-bold group-hover:text-accent">
                    {intent[l].serviceName}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-500">
                    {intent[l].eyebrow}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {dict.services.learnMore}
                    <ArrowIcon
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

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
              alt={l === "fr"
                ? "Remorqueuse Mécano Express en intervention à Gatineau"
                : "Mécano Express tow truck on a call in Gatineau"}
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl border border-steel-200 object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <Photo
              name="gallery-2.webp"
              alt={l === "fr"
                ? "Camion de remorquage Mécano Express chargeant un véhicule"
                : "Mécano Express tow truck loading a vehicle"}
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl border border-steel-200 object-cover"
            />
          </Reveal>
        </div>
      </section>

      <AreaServed dict={dict} locale={l} branch="towing" areas={AREAS} />

      <FAQ title={c.faqTitle} items={c.faq} />

      {/* The areas axis, kept separate from the services above. Zone pages
          only — mixing them into one flat list is what made this hub read as
          an undifferentiated pile of links. */}
      <RelatedLinks
        title={l === "fr" ? "Secteurs desservis" : "Areas we serve"}
        links={towingIntents
          .filter((intent) => intent.indexable !== false && intent.group === "zone")
          .map((intent) => ({
            href: `/${l}/remorquage/${intent.slug}`,
            label: intent[l].serviceName,
          }))}
      />

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

      <ContactSection locale={l} dict={dict} alwaysOpen />
    </div>
  );
}

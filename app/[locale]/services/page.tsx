import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { ArrowIcon } from "@/components/Icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const title =
    l === "fr"
      ? "Nos services de garage à Aylmer | Mécano Express"
      : "Our Garage Services in Aylmer | Mécano Express";
  const description =
    l === "fr"
      ? "Freins, pneus, changement d'huile, diagnostic, suspension, climatisation, échappement et transmission à Aylmer, Gatineau. Sans rendez-vous."
      : "Brakes, tires, oil change, diagnostics, suspension, A/C, exhaust and transmission in Aylmer, Gatineau. Walk-in welcome.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${l}/services`,
      languages: { "fr-CA": "/fr/services", "en-CA": "/en/services", "x-default": "/fr/services" },
    },
    openGraph: { ...ogBase(l), title, description, url: `${business.domain}/${l}/services` },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(l);

  return (
    <>
      <SplitHero
        dict={dict}
        tag={dict.services.eyebrow}
        title={dict.services.heroTitle}
        highlight={dict.services.heroHighlight}
        description={dict.services.subtitle}
        image={{ kind: "photo", name: "mecanique.webp" }}
        imageAlt={l === "fr"
          ? "Atelier du garage Mécano Express au 879 chemin Vanier, Aylmer"
          : "The Mécano Express workshop at 879 chemin Vanier, Aylmer"}
      />
      {/* Repair only. The towing entry in lib/services.ts canonicalizes to
          /remorquage, so listing it here advertised a card that points
          somewhere else — and towing is the other branch's catalogue anyway.
          The link below is the one deliberate crossing: a hub may point at
          the other hub, the way the home page does. */}
      <ServicesGrid locale={l} dict={dict} heading={false} filter="repair" />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Link
          href={`/${l}/remorquage`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-steel-200 bg-white p-6 transition-colors hover:border-accent/40"
        >
          <span>
            <span className="font-display block text-lg font-bold group-hover:text-accent">
              {l === "fr" ? "Besoin d'un remorquage ?" : "Need a tow?"}
            </span>
            <span className="mt-1 block text-sm text-steel-500">
              {l === "fr"
                ? "Le remorquage et le dépannage routier roulent 24 h sur 24, séparément du garage."
                : "Towing and roadside assistance run 24/7, separately from the garage."}
            </span>
          </span>
          <ArrowIcon
            width={20}
            height={20}
            className="shrink-0 text-steel-300 transition-transform group-hover:translate-x-1 group-hover:text-accent"
          />
        </Link>
      </section>

      <ContactSection locale={l} dict={dict} />
    </>
  );
}

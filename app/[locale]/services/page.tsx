import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { SplitHero } from "@/components/sections/SplitHero";

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
      languages: { fr: "/fr/services", en: "/en/services", "x-default": "/fr/services" },
    },
    openGraph: { title, description, url: `${business.domain}/${l}/services` },
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
      />
      <ServicesGrid locale={l} dict={dict} heading={false} />
      <ContactSection locale={l} dict={dict} />
    </>
  );
}

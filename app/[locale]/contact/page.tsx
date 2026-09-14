import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, hoursLabel, ogBase } from "@/lib/business";
import { ContactSection } from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const title =
    l === "fr"
      ? "Nous joindre — Garage à Aylmer | Mécano Express"
      : "Contact — Garage in Aylmer | Mécano Express";
  // Was 94 characters (87 in EN), the shortest on the site. The posted hours
  // come from hoursLabel so they can't drift from business.hours.
  const description =
    l === "fr"
      ? `Garage Mécano Express au ${business.address.street}, ${business.address.sector} (Gatineau). ${hoursLabel[l]}, sans rendez-vous. Appelez le ${business.phoneDisplay}.`
      : `Mécano Express garage at ${business.address.street}, ${business.address.sector} (Gatineau). ${hoursLabel[l]}, walk-in welcome. Call ${business.phoneDisplay}.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/${l}/contact`,
      languages: { "fr-CA": "/fr/contact", "en-CA": "/en/contact", "x-default": "/fr/contact" },
    },
    openGraph: { ...ogBase(l), title, description, url: `${business.domain}/${l}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(l);
  return (
    <ContactSection
      locale={l}
      dict={dict}
      as="h1"
      title={
        l === "fr"
          ? "Nous joindre — garage à Aylmer, Gatineau"
          : "Contact us — garage in Aylmer, Gatineau"
      }
    />
  );
}

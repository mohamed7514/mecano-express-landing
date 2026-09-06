import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
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
  const description =
    l === "fr"
      ? `Garage Mécano Express, ${business.address.street}, ${business.address.sector}. Sans rendez-vous. Appelez le ${business.phoneDisplay}.`
      : `Mécano Express garage, ${business.address.street}, ${business.address.sector}. Walk-in welcome. Call ${business.phoneDisplay}.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/${l}/contact`,
      languages: { "fr-CA": "/fr/contact", "en-CA": "/en/contact", "x-default": "/fr/contact" },
    },
    openGraph: { title, description, url: `${business.domain}/${l}/contact` },
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

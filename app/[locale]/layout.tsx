import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Inter } from "next/font/google";
import "../globals.css";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { GoogleTagManagerScript, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";

export const viewport: Viewport = {
  themeColor: "#000000",
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const title =
    l === "fr"
      ? "Garage à Aylmer, Gatineau — Mécanique sans rendez-vous | Mécano Express"
      : "Garage in Aylmer, Gatineau — Walk-in Mechanic | Mécano Express";
  const description =
    l === "fr"
      ? "Garage et mécanique automobile à Aylmer (Gatineau). Freins, pneus, huile, diagnostic. Sans rendez-vous, ouvert le samedi. Appelez le (819) 921-7869."
      : "Auto garage & mechanic in Aylmer (Gatineau). Brakes, tires, oil, diagnostics. Walk-in, open Saturdays. Call (819) 921-7869.";

  return {
    metadataBase: new URL(business.domain),
    title: { default: title, template: `%s` },
    description,
    alternates: {
      canonical: `/${l}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      locale: l === "fr" ? "fr_CA" : "en_CA",
      siteName: business.name,
      title,
      description,
      url: `${business.domain}/${l}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${archivo.variable} ${inter.variable}`}>
      <head>
        <GoogleTagManagerScript />
      </head>
      <body>
        <GoogleTagManagerNoscript />
        <Analytics />
        <LocalBusinessJsonLd locale={locale} />
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <FloatingCallButton label={dict.cta.callNow} />
      </body>
    </html>
  );
}

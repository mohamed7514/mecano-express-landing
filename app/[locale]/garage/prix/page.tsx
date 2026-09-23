import type { Metadata } from "next";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { CampaignLanding, campaignMetadata } from "@/components/sections/CampaignLanding";

/** Ad destination. Fixed path on purpose — see CampaignLanding. */
const SLUG = "prix";

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
  return campaignMetadata(l, SLUG);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  return <CampaignLanding locale={l} slug={SLUG} />;
}

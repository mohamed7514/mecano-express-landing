import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { Hero } from "@/components/sections/Hero";
import { CampaignSplit } from "@/components/sections/CampaignSplit";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { AreaServed } from "@/components/sections/AreaServed";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(l);

  return (
    <>
      <Hero locale={l} dict={dict} />
      <CampaignSplit locale={l} dict={dict} />
      <ServicesGrid locale={l} dict={dict} />
      <WhyUs dict={dict} />
      <AreaServed dict={dict} locale={l} />
      <ContactSection locale={l} dict={dict} />
    </>
  );
}

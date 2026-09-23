import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { mechanicIntents, getMechanicIntent } from "@/lib/mechanicIntents";
import { services } from "@/lib/services";
import { CallButton } from "@/components/CallButton";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { BrandBurst } from "@/components/BrandBurst";
import { Reveal } from "@/components/Reveal";
import { SplitHero } from "@/components/sections/SplitHero";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { serviceIcons, ArrowIcon } from "@/components/Icons";
import Link from "next/link";

/**
 * Garage area pages, at /garage/secteurs/<town>-qc.
 *
 * They moved out of /garage/<town> so that segment can carry service slugs
 * instead — a URL should say what kind of page it is, and "garage" followed
 * by a town name said the opposite of "garage" followed by "freins".
 *
 * The -qc suffix is not decoration: Québec has two L'Ange-Gardien, and a
 * slug that names the province is unambiguous in a way a bare town name is
 * not.
 *
 * Content still comes from the `group: "zone"` entries of mechanicIntents.
 */
const SUFFIX = "-qc";

const zones = () => mechanicIntents.filter((i) => i.group === "zone" && i.indexable !== false);

/** "aylmer-qc" -> the intent whose slug is "aylmer". */
function zoneFromCity(city: string) {
  if (!city.endsWith(SUFFIX)) return undefined;
  const slug = city.slice(0, -SUFFIX.length);
  const intent = getMechanicIntent(slug);
  return intent && intent.group === "zone" ? intent : undefined;
}

export function generateStaticParams() {
  const params: { locale: string; city: string }[] = [];
  for (const locale of locales) {
    for (const z of zones()) params.push({ locale, city: z.slug + SUFFIX });
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const zone = zoneFromCity(city);
  if (!zone) return { robots: { index: false, follow: false }, alternates: { canonical: null } };
  const c = zone[l];

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${l}/garage/secteurs/${city}`,
      languages: {
        "fr-CA": `/fr/garage/secteurs/${city}`,
        "en-CA": `/en/garage/secteurs/${city}`,
        "x-default": `/fr/garage/secteurs/${city}`,
      },
    },
    openGraph: {
      ...ogBase(l),
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/garage/secteurs/${city}`,
    },
  };
}

export default async function GarageAreaPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const zone = zoneFromCity(city);
  if (!zone) notFound();

  const c = zone[l];
  const dict = getDictionary(l);
  const repair = services.filter((s) => s.category === "repair");

  return (
    <div className="pb-24 md:pb-0">
      <ServiceJsonLd
        name={c.serviceName}
        description={c.metaDescription}
        url={`${business.domain}/${l}/garage/secteurs/${city}`}
        serviceType={l === "fr" ? "Réparation automobile" : "Auto repair"}
        areaServed={c.areas ?? [c.serviceName]}
      />
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: dict.nav.mechanicCategory, url: `/${l}/garage` },
              { name: c.serviceName, url: `/${l}/garage/secteurs/${city}` },
            ]}
          />
        }
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={zone.heroImage}
        imageAlt={`${c.serviceName} — Mécano Express, ${business.address.street}, ${business.address.sector}`}
        trustBar={c.trustBar}
      />

      {/* Every mechanical service, linked, from every town. The area page
          proves we work there; the service page explains the job. It never
          re-explains one. */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          {l === "fr" ? "Nos services de mécanique" : "Our mechanical services"}
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {repair.map((s) => {
            const sc = s[l];
            const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
            return (
              <Link
                key={s.id}
                href={`/${l}/services/${sc.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-steel-200 bg-white p-4 transition-colors hover:border-accent/40"
              >
                {Icon && (
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    <Icon width={18} height={18} />
                  </span>
                )}
                <span className="flex-1 text-sm font-semibold text-ink group-hover:text-accent">
                  {sc.name}
                </span>
                <ArrowIcon
                  width={16}
                  height={16}
                  className="shrink-0 text-steel-300 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                />
              </Link>
            );
          })}
        </div>
      </section>

      <Testimonials locale={l} />

      <section className="bg-steel-100/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {c.reasonsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {c.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-steel-200/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 hover:ring-accent/30">
                  <span className="font-display text-sm font-bold text-steel-300">0{i + 1}</span>
                  <h3 className="font-display mt-3 text-lg font-bold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ title={c.faqTitle} items={c.faq} />

      <RelatedLinks
        title={l === "fr" ? "Autres secteurs desservis" : "Other areas we serve"}
        links={zones()
          .filter((other) => other.slug !== zone.slug)
          .map((other) => ({
            href: `/${l}/garage/secteurs/${other.slug}${SUFFIX}`,
            label: other[l].serviceName,
          }))}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
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

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { areas, getAreaContent } from "@/lib/areas";
import { services } from "@/lib/services";
import { CallButton } from "@/components/CallButton";
import { ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { SplitHero } from "@/components/sections/SplitHero";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { serviceIcons, ArrowIcon, CheckIcon } from "@/components/Icons";

export function generateStaticParams() {
  const params: { locale: string; zone: string }[] = [];
  for (const locale of locales) {
    for (const area of areas) params.push({ locale, zone: area[locale].slug });
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; zone: string }>;
}): Promise<Metadata> {
  const { locale, zone } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const result = getAreaContent(zone, l);
  if (!result) return { robots: { index: false, follow: false }, alternates: { canonical: null } };

  const { area, content: c } = result;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${l}/zones/${c.slug}`,
      languages: {
        "fr-CA": `/fr/zones/${area.fr.slug}`,
        "en-CA": `/en/zones/${area.en.slug}`,
        "x-default": `/fr/zones/${area.fr.slug}`,
      },
    },
    openGraph: {
      ...ogBase(l),
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${business.domain}/${l}/zones/${c.slug}`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string; zone: string }>;
}) {
  const { locale, zone } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const result = getAreaContent(zone, l);
  if (!result) notFound();

  const { area, content: c } = result;
  const dict = getDictionary(l);

  // The outbound links that make this an area page rather than a duplicate of
  // the service pages: every service is named and linked from every town. The
  // town page summarises, the service page explains.
  const towing = services.filter((s) => s.category === "towing");
  const repair = services.filter((s) => s.category === "repair");

  return (
    <div className="pb-24 md:pb-0">
      <ServiceJsonLd
        name={`${l === "fr" ? "Remorquage et garage" : "Towing and garage"} — ${c.name}`}
        description={c.metaDescription}
        url={`${business.domain}/${l}/zones/${c.slug}`}
        available247
      />
      <FAQJsonLd items={c.faq} />

      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: l === "fr" ? "Zones desservies" : "Areas served", url: `/${l}/zones` },
              { name: c.name, url: `/${l}/zones/${c.slug}` },
            ]}
          />
        }
        tag={c.eyebrow}
        title={c.heroTitle}
        highlight={c.heroHighlight}
        description={c.subtitle}
        image={
          area.home
            ? { kind: "photo", name: "mecanique.webp" }
            : { kind: "static", src: "/remorquage.webp" }
        }
        imageAlt={
          l === "fr"
            ? `Remorquage et garage Mécano Express desservant ${c.name}`
            : `Mécano Express towing and garage serving ${c.name}`
        }
        trustBar={c.trustBar}
        alwaysOpen
      />

      {/* The two halves of the offer. Towing travels to the customer; the
          garage does not, so each town gets its own honest framing of the
          drive rather than one template pretending both work the same way. */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-steel-200 bg-white p-7">
              <h2 className="font-display text-xl font-extrabold tracking-tight text-balance">
                {c.towingTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-steel-500">{c.towingIntro}</p>
              <div className="mt-6">
                <CallButton label={dict.cta.callNow} showNumber />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-steel-200 bg-paper p-7">
              <h2 className="font-display text-xl font-extrabold tracking-tight text-balance">
                {c.garageTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-steel-500">{c.garageIntro}</p>
              <ul className="mt-5 space-y-2 border-t border-steel-200 pt-5 text-sm text-steel-500">
                <li className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="shrink-0 text-accent" />
                  {business.address.street}, {business.address.sector}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="shrink-0 text-accent" />
                  {dict.badges.walkIn}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Every service, linked, from every town — the spine of the structure. */}
      <section className="bg-steel-100/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {c.servicesTitle}
          </h2>

          {[
            { label: l === "fr" ? "Remorquage et dépannage" : "Towing and roadside", items: towing },
            { label: l === "fr" ? "Mécanique et carrosserie" : "Mechanical and body work", items: repair },
          ].map((family) => (
            <div key={family.label} className="mt-10 first:mt-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-accent">
                {family.label}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {family.items.map((s) => {
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
            </div>
          ))}
        </div>
      </section>

      <Testimonials locale={l} />

      <FAQ title={c.faqTitle} items={c.faq} />

      <RelatedLinks
        title={l === "fr" ? "Autres zones desservies" : "Other areas we serve"}
        links={areas
          .filter((other) => other.id !== area.id)
          .map((other) => ({
            href: `/${l}/zones/${other[l].slug}`,
            label: other[l].name,
          }))}
      />

      <ContactSection locale={l} dict={dict} alwaysOpen />
    </div>
  );
}

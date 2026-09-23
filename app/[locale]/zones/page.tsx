import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { business, ogBase } from "@/lib/business";
import { areas } from "@/lib/areas";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SplitHero } from "@/components/sections/SplitHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowIcon, PinIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

const hub = {
  fr: {
    metaTitle: "Zones desservies — Remorquage et garage | Mécano Express",
    metaDescription:
      "Remorquage 24h/24 et garage à Aylmer, Hull, Chelsea, Buckingham, Cantley et Val-des-Monts. À partir de 79,99 $. Appelez le (819) 921-7869.",
    eyebrow: "Outaouais · Remorquage et mécanique",
    heroTitle: "Nos zones",
    heroHighlight: "desservies",
    subtitle:
      "La dépanneuse se déplace partout dans l'Outaouais, 24 heures sur 24. Le garage, lui, vous attend au 879 chemin Vanier à Aylmer. Choisissez votre secteur.",
    intro:
      "Nos camions couvrent Gatineau et les municipalités autour, de jour comme de nuit et les jours fériés. Chaque secteur a sa page : ce qu'on y fait, en combien de temps on arrive et ce qui change selon que vous ayez besoin d'un remorquage sur place ou d'un rendez-vous à l'atelier.",
    listTitle: "Choisissez votre secteur",
    crumb: "Zones desservies",
  },
  en: {
    metaTitle: "Areas Served — Towing and Garage | Mécano Express",
    metaDescription:
      "24/7 towing and mechanical garage across Aylmer, Hull, Chelsea, Buckingham, Cantley and Val-des-Monts. From $79.99. Call (819) 921-7869.",
    eyebrow: "Outaouais · Towing and mechanical",
    heroTitle: "Areas",
    heroHighlight: "we serve",
    subtitle:
      "Our tow trucks run across the Outaouais around the clock. The garage stays put at 879 chemin Vanier in Aylmer. Pick your area below.",
    intro:
      "Our trucks cover Gatineau and the municipalities around it, day and night, holidays included. Each area has its own page: what we do there, how fast we get to you, and what changes depending on whether you need a tow on the spot or a visit to the shop.",
    listTitle: "Pick your area",
    crumb: "Areas served",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const h = hub[l];
  return {
    title: h.metaTitle,
    description: h.metaDescription,
    alternates: {
      canonical: `/${l}/zones`,
      languages: { "fr-CA": "/fr/zones", "en-CA": "/en/zones", "x-default": "/fr/zones" },
    },
    openGraph: {
      ...ogBase(l),
      title: h.metaTitle,
      description: h.metaDescription,
      url: `${business.domain}/${l}/zones`,
    },
  };
}

export default async function ZonesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(l);
  const h = hub[l];

  return (
    <div className="pb-24 md:pb-0">
      <SplitHero
        dict={dict}
        breadcrumb={
          <Breadcrumb
            items={[
              { name: dict.nav.home, url: `/${l}` },
              { name: h.crumb, url: `/${l}/zones` },
            ]}
          />
        }
        tag={h.eyebrow}
        title={h.heroTitle}
        highlight={h.heroHighlight}
        description={h.subtitle}
        image={{ kind: "static", src: "/remorquage.webp" }}
        imageAlt={
          l === "fr"
            ? "Dépanneuse Mécano Express en service dans l'Outaouais"
            : "A Mécano Express tow truck working across the Outaouais"
        }
        alwaysOpen
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-lg leading-relaxed text-ink">{h.intro}</p>

        <h2 className="font-display mt-12 text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          {h.listTitle}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => {
            const c = area[l];
            return (
              <Reveal key={area.id} delay={(i % 3) * 80}>
                <Link
                  href={`/${l}/zones/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-steel-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <PinIcon width={20} height={20} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold">{c.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-500">{c.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {l === "fr" ? `Remorquage et garage à ${c.name}` : `Towing and garage in ${c.name}`}
                    <ArrowIcon
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ContactSection locale={l} dict={dict} alwaysOpen />
    </div>
  );
}

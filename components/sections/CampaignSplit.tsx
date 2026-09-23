import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { TowIcon, OilIcon, ArrowIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { BrandBurst } from "@/components/BrandBurst";

/**
 * Homepage hub for the two Ads campaigns: gives organic/direct visitors a
 * clear fork and creates a strong internal link into both dedicated
 * landing pages (/remorquage and /garage).
 */
export function CampaignSplit({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.campaignSplit;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* A real <h2>, not a styled <p>: the two cards below are <h3>, so
          without a heading here the homepage jumped straight from h1 to h3. */}
      <h2 className="font-display text-center text-sm font-bold uppercase tracking-wide text-accent">
        {s.eyebrow}
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Reveal>
          <Link
            href={`/${locale}/remorquage`}
            className="group relative block h-full overflow-hidden rounded-3xl bg-graphite-950 p-8 text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20"
          >
            <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <BrandBurst className="absolute inset-0 h-full w-full" />
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-[90px]"
              aria-hidden="true"
            />
            <span className="font-display relative text-6xl font-extrabold text-white/10">01</span>
            <span className="relative -mt-8 grid h-12 w-12 place-items-center rounded-xl bg-accent text-white transition-transform group-hover:scale-110">
              <TowIcon width={24} height={24} />
            </span>
            <h3 className="font-display relative mt-5 text-2xl font-extrabold">{s.towingTitle}</h3>
            <p className="relative mt-2 max-w-sm text-steel-300">{s.towingText}</p>
            <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
              {s.towingCta}
              <ArrowIcon width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <Link
            href={`/${locale}/garage`}
            className="group relative block h-full overflow-hidden rounded-3xl border border-steel-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-steel-200/60"
          >
            <div
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-hover transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
            <span className="font-display text-6xl font-extrabold text-steel-100">02</span>
            <span className="-mt-8 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
              <OilIcon width={24} height={24} />
            </span>
            <h3 className="font-display mt-5 text-2xl font-extrabold">{s.repairTitle}</h3>
            <p className="mt-2 max-w-sm text-steel-500">{s.repairText}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
              {s.repairCta}
              <ArrowIcon width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

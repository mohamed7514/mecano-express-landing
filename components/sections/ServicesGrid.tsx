import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";
import { ArrowIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid({
  locale,
  dict,
  heading = true,
  filter,
}: {
  locale: Locale;
  dict: Dictionary;
  /** Full heading block (eyebrow + h2 + subtitle). /services suppresses it
   * because its SplitHero already carries that title and subtitle — it gets
   * the lone h2 below instead, so the page never runs h1 into the cards'
   * <h3> with nothing in between. */
  heading?: boolean;
  filter?: "repair" | "towing";
}) {
  const items = filter ? services.filter((s) => s.category === filter) : services;
  return (
    <section
      className={`mx-auto max-w-6xl px-4 sm:px-6 ${heading ? "py-20" : "pb-20 pt-12 sm:pt-14"}`}
      id="services"
    >
      {heading && (
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-accent">
            {dict.services.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg text-steel-500">{dict.services.subtitle}</p>
        </div>
      )}

      {!heading && (
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          {dict.services.listHeading}
        </h2>
      )}

      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${heading ? "mt-12" : "mt-8"}`}>
        {items.map((s, i) => {
          const c = s[locale];
          return (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <Link
                href={`/${locale}/services/${c.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-hover transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="font-display absolute right-5 top-5 text-2xl font-extrabold text-steel-100 transition-colors group-hover:text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{c.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-steel-500">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {dict.services.learnMore}
                  <ArrowIcon width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { business } from "@/lib/business";
import { zoneHref, type Branch } from "@/lib/areas";
import { PinIcon } from "@/components/Icons";

/**
 * The served-area chips. Pass `locale` and `branch` and any town that has a
 * zone page on that side of the business becomes a link to it — the return
 * half of the mesh, since every zone page links out to every service.
 *
 * `branch` matters: a towing page's chips link to /remorquage/<town>, a
 * repair page's to /garage/<town>. Crossing that line would hand Google the
 * mixed-category signal the two-branch structure exists to avoid. A town with
 * no page on the current side stays plain text rather than pointing at the
 * other branch or at something weaker.
 */
export function AreaServed({
  dict,
  locale,
  branch,
  areas = business.areasServed,
}: {
  dict: Dictionary;
  locale?: Locale;
  branch?: Branch;
  areas?: readonly string[];
}) {
  const chip =
    "inline-flex items-center gap-2 rounded-full border border-steel-200 bg-paper px-4 py-2 text-sm font-semibold text-ink";

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-steel-200 bg-white p-8 sm:p-12">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-accent">
            {dict.area.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {dict.area.title}
          </h2>
          <p className="mt-4 text-steel-500">{dict.area.subtitle}</p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => {
            const href = locale && branch ? zoneHref(area, locale, branch) : undefined;

            return (
              <li key={area}>
                {href ? (
                  <Link
                    href={href}
                    className={`${chip} transition-colors hover:border-accent/50 hover:text-accent`}
                  >
                    <PinIcon width={16} height={16} className="text-accent" />
                    {area}
                  </Link>
                ) : (
                  <span className={chip}>
                    <PinIcon width={16} height={16} className="text-accent" />
                    {area}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

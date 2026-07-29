import type { Dictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";
import { PinIcon } from "@/components/Icons";

export function AreaServed({
  dict,
  areas = business.areasServed,
}: {
  dict: Dictionary;
  areas?: readonly string[];
}) {
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
          {areas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-paper px-4 py-2 text-sm font-semibold text-ink"
            >
              <PinIcon width={16} height={16} className="text-accent" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

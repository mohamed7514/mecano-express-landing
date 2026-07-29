import type { Locale } from "@/lib/i18n";
import { testimonials } from "@/lib/testimonials";

/**
 * Renders only once real reviews exist in lib/testimonials.ts — named
 * social proof (name + neighborhood) converts far better than a generic
 * trust badge, but we never invent quotes to fill the gap.
 */
export function Testimonials({ locale }: { locale: Locale }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={`${t.name}-${t.neighborhood}`} className="rounded-2xl border border-steel-200 bg-white p-6">
            <div className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink">“{t.quote[locale]}”</p>
            <p className="mt-4 text-sm font-semibold text-steel-500">
              {t.name} — {t.neighborhood}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

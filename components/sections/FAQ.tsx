import type { FAQItem } from "@/lib/faq";

/**
 * Native <details>/<summary> accordion — no client JS needed, content is
 * in the DOM from first paint (good for crawlers/AEO), and it degrades
 * perfectly with JS disabled.
 */
export function FAQ({ title, items }: { title: string; items: FAQItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 divide-y divide-steel-200 rounded-2xl border border-steel-200 bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink marker:content-none">
              {item.question}
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-steel-100 text-steel-500 transition-transform group-open:rotate-45 group-open:bg-accent-soft group-open:text-accent"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-steel-500">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

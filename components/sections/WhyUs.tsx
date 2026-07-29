import type { Dictionary } from "@/lib/dictionary";
import { CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-steel-100/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-accent">
            {dict.why.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {dict.why.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-steel-200/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 hover:ring-accent/30">
                <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-chrome/30" aria-hidden="true" />
                <span className="font-display text-sm font-bold text-steel-300">
                  0{i + 1}
                </span>
                <div className="mt-3 flex items-center gap-2">
                  <CheckIcon width={20} height={20} className="text-accent" />
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

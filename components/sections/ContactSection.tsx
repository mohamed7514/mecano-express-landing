import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { business, hoursLabel } from "@/lib/business";
import { CallButton } from "@/components/CallButton";
import { PhoneIcon, PinIcon, ClockIcon } from "@/components/Icons";

export function ContactSection({
  locale,
  dict,
  alwaysOpen = false,
  as: Heading = "h2",
  title,
}: {
  locale: Locale;
  dict: Dictionary;
  /** Towing pages run 24/7 — show the availability label instead of the
   * garage's posted hours and the walk-in note. */
  alwaysOpen?: boolean;
  /** This section is the whole body of /contact, where its title has to be
   * the page's h1 — everywhere else it's a closing block under an existing
   * h1, so it stays an h2. */
  as?: "h1" | "h2";
  /** Overrides dict.contact.title (used by /contact for a keyword-bearing h1). */
  title?: string;
}) {
  const a = business.address;
  return (
    <section className="relative overflow-hidden bg-graphite-900 text-white" id="contact">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-accent">
            {dict.contact.eyebrow}
          </p>
          <Heading className="font-display mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {title ?? dict.contact.title}
          </Heading>
          <p className="mt-4 max-w-md text-lg text-steel-300">{dict.contact.subtitle}</p>

          <dl className="mt-8 space-y-5">
            <div className="flex items-start gap-3.5">
              <PhoneIcon width={22} height={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium text-steel-400">{dict.contact.phone}</dt>
                <dd>
                  <CallButton
                    label={business.phoneDisplay}
                    showNumber
                    variant="link"
                    size="inline-lg"
                    hideIcon
                    className="text-white"
                  />
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <PinIcon width={22} height={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium text-steel-400">{dict.contact.address}</dt>
                <dd className="font-semibold">{a.street}, {a.sector} ({a.locality}), {a.region}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <ClockIcon width={22} height={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium text-steel-400">{dict.contact.hours}</dt>
                <dd className="font-semibold">{alwaysOpen ? dict.openStatus.available247 : hoursLabel[locale]}</dd>
                {!alwaysOpen && <dd className="text-sm text-steel-400">{dict.contact.hoursNote}</dd>}
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton label={dict.cta.callNow} size="lg" />
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50"
            >
              {dict.cta.directions} →
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title={`${business.name} — ${a.street}`}
            src={`https://maps.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=15&output=embed`}
            className="h-80 w-full lg:h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

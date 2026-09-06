import Image from "next/image";
import type { Dictionary } from "@/lib/dictionary";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";
import { CheckIcon } from "@/components/Icons";
import { Photo } from "@/components/PhotoPlaceholder";

export type HeroImage = { kind: "photo"; name: string } | { kind: "static"; src: string };

/**
 * The split-screen hero from the homepage (image one side, dark text panel
 * the other) reused as a static, single-"slide" version for interior pages —
 * services, service detail and the towing intent pages all share this look
 * instead of the diagonal full-bleed-photo hero pattern.
 */
export function SplitHero({
  dict,
  breadcrumb,
  tag,
  title,
  highlight,
  description,
  image,
  imageAlt,
  trustBar,
  alwaysOpen = false,
}: {
  dict: Dictionary;
  breadcrumb?: React.ReactNode;
  tag: string;
  title: string;
  highlight?: string;
  description: string;
  image: HeroImage;
  /** Descriptive alt text. Falls back to the heading, which on most pages is
   * a one- or two-word fragment ("Garage", "Remorquage") — fine as a heading,
   * useless as an image description. */
  imageAlt?: string;
  trustBar?: string[];
  /** Towing pages run 24/7, independent of the garage's posted hours. */
  alwaysOpen?: boolean;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col bg-graphite-950 pt-20 text-white lg:min-h-[80vh] lg:flex-row lg:pt-24">
      {/* IMAGE SIDE (Mobile Top / Desktop Left) */}
      <div className="relative -mt-20 h-[40vh] w-full shrink-0 overflow-hidden bg-black lg:mt-0 lg:h-auto lg:w-1/2">
        {image.kind === "photo" ? (
          <Photo
            name={image.name}
            alt={imageAlt ?? title}
            fill
            preload
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-center animate-premium-jump"
          />
        ) : (
          <Image
            src={image.src}
            alt={imageAlt ?? title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-center animate-premium-jump"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-graphite-950"
          aria-hidden="true"
        />
      </div>

      {/* TEXT SIDE (Mobile Bottom / Desktop Right) */}
      <div className="relative flex w-full items-center overflow-hidden p-6 sm:p-12 lg:w-1/2 lg:p-16 xl:p-24">
        <div className="absolute inset-0 z-0 bg-graphite-950" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-xl lg:mx-0">
          {breadcrumb && <div className="mb-5">{breadcrumb}</div>}
          <span className="mb-6 inline-block rounded-md border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            {tag}
          </span>
          <h1 className="font-display mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            {title}
            {highlight && (
              <>
                {" "}
                <br />
                <span className="text-accent">{highlight}</span>
              </>
            )}
          </h1>
          <p className="text-lg leading-relaxed text-steel-200">{description}</p>

          <div className="mt-6">
            <OpenStatusBadge dict={dict} alwaysOpen={alwaysOpen} />
          </div>

          {trustBar && trustBar.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/10 pt-6">
              {trustBar.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium text-steel-200">
                  <CheckIcon width={17} height={17} className="text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

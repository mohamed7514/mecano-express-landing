import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export type RelatedLink = { href: string; label: string };

/**
 * Sibling-page links rendered in the page body (server-side, always in the
 * HTML). The header's services dropdown only mounts its links on hover, so
 * before this existed every /garage/* and /remorquage/* page had exactly one
 * inbound internal link — this is what actually spreads crawl equity across
 * the intent pages.
 */
export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between gap-2 rounded-xl border border-steel-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            {link.label}
            <ArrowIcon
              width={16}
              height={16}
              className="shrink-0 transition-transform group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

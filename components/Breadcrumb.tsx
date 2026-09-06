import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export type Crumb = { name: string; url: string };

/**
 * Visible breadcrumb trail + the matching BreadcrumbList structured data,
 * emitted together so the two can never drift apart (Google requires the
 * markup to reflect what's actually on the page). The last crumb is the
 * current page and is rendered as plain text, not a link.
 *
 * Designed to be passed to SplitHero's `breadcrumb` slot, so the colours
 * assume the dark hero panel.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav className="flex flex-wrap items-center gap-2 text-sm text-steel-400" aria-label="Breadcrumb">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.url} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-steel-300">{item.name}</span>
              ) : (
                <>
                  <Link href={item.url} className="hover:text-white">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}

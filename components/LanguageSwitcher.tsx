"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  dark = false,
}: {
  locale: Locale;
  dark?: boolean;
}) {
  const pathname = usePathname();

  function pathFor(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target; // replace the locale segment
    return segments.join("/") || `/${target}`;
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 text-[13px] font-semibold ${
        dark ? "border-white/20" : "border-steel-200"
      }`}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={pathFor(l)}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active
                ? "bg-accent text-white"
                : dark
                  ? "text-steel-300 hover:text-white"
                  : "text-steel-500 hover:text-ink"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}

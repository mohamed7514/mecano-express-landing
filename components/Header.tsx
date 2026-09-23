"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";
import { towingIntents } from "@/lib/towingIntents";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CallButton } from "./CallButton";

/**
 * Two trades, two menus. Towing services hang under Remorquage, mechanical
 * services under Garage, and neither menu carries anything that is not a
 * service — no area pages, no noindex landing pages. The visitor picks a
 * trade in the top bar, which is the same choice Google makes when it decides
 * which of the two Business listings to show.
 */
export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Services only: `specialty` is a kind of tow, and the price page answers a
  // service question. `zone` pages belong to the areas axis and noindex
  // landing pages belong to nobody's menu.
  const towingServices = towingIntents.filter(
    (i) => i.indexable !== false && (i.group === "specialty" || i.group === "situation")
  );
  const repairServices = services.filter((s) => s.category === "repair");

  const menus = [
    {
      href: `/${locale}/remorquage`,
      label: locale === "fr" ? "Remorquage" : "Towing",
      all: locale === "fr" ? "Tout le remorquage" : "All towing",
      items: towingServices.map((i) => ({
        href: `/${locale}/remorquage/${i.slug}`,
        label: i[locale].serviceName,
      })),
    },
    {
      href: `/${locale}/garage`,
      label: locale === "fr" ? "Garage" : "Garage",
      all: locale === "fr" ? "Tout le garage" : "All garage services",
      items: repairServices.map((s) => ({
        href: `/${locale}/garage/${s[locale].slug}`,
        label: s[locale].name,
      })),
    },
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${locale}`} aria-label="Mécano Express — Accueil">
          <Logo dark size="md" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          <Link
            href={`/${locale}`}
            className={`py-2 text-[15px] font-bold transition-colors ${
              isActive(`/${locale}`, true) ? "text-accent" : "text-white hover:text-accent"
            }`}
          >
            {dict.nav.home}
          </Link>

          {menus.map((m) => (
            <div
              key={m.href}
              className="relative"
              onMouseEnter={() => setOpenMenu(m.href)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={m.href}
                className={`py-2 text-[15px] font-bold transition-colors ${
                  isActive(m.href) ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                {m.label}
              </Link>

              {openMenu === m.href && (
                <div className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-2">
                  <div className="overflow-hidden rounded-sm border border-white/20 bg-graphite-950 py-2 shadow-xl">
                    {m.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-[14px] text-white hover:bg-white/10 hover:text-accent"
                        onClick={() => setOpenMenu(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                    <Link
                      href={m.href}
                      className="mt-1 block border-t border-white/10 px-4 pt-2.5 pb-1 text-[13px] font-semibold text-accent hover:text-accent-hover"
                      onClick={() => setOpenMenu(null)}
                    >
                      {m.all} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href={`/${locale}/contact`}
            className={`py-2 text-[15px] font-bold transition-colors ${
              isActive(`/${locale}/contact`) ? "text-accent" : "text-white hover:text-accent"
            }`}
          >
            {dict.nav.contact}
          </Link>

          <LanguageSwitcher locale={locale} dark={true} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} dark={true} />
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/20 text-white"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 bg-graphite-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            <Link
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                isActive(`/${locale}`, true) ? "bg-accent-soft/10 text-accent" : "text-white"
              }`}
            >
              {dict.nav.home}
            </Link>

            {menus.map((m) => (
              <details key={m.href} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium text-white marker:content-none">
                  {m.label}
                  <span className="text-xs text-steel-400 transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="flex flex-col px-3 pb-3">
                  {m.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md py-1.5 text-[14px] text-steel-200 hover:text-accent"
                    >
                      {sub.label}
                    </Link>
                  ))}
                  <Link
                    href={m.href}
                    onClick={() => setOpen(false)}
                    className="mt-1 border-t border-white/10 pt-2 text-[13px] font-bold text-accent"
                  >
                    {m.all} →
                  </Link>
                </div>
              </details>
            ))}

            <Link
              href={`/${locale}/contact`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                isActive(`/${locale}/contact`) ? "bg-accent-soft/10 text-accent" : "text-white"
              }`}
            >
              {dict.nav.contact}
            </Link>

            <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
              <CallButton label={dict.cta.callNow} size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

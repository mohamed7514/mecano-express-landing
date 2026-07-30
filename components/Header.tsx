"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { services } from "@/lib/services";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CallButton } from "./CallButton";

type ServiceCategory = "towing" | "mechanic";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [mobileCategory, setMobileCategory] = useState<ServiceCategory | null>(null);
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: dict.nav.home, exact: true },
    { href: `/${locale}/services`, label: dict.nav.services + " +", hasDropdown: true },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const repairServices = services.filter((s) => s.category === "repair");

  const remorquageService = services.find((s) => s.id === "remorquage");
  const towingHubHref = `/${locale}/services/${remorquageService?.[locale].slug ?? "remorquage"}`;
  const mechanicHubHref = `/${locale}/garage-gatineau`;

  // Curated shortlist for the nav — the full set of zone/specialty pages
  // lives on the towing hub page, not crammed into this dropdown.
  const towingLinks = [
    { href: `/${locale}/remorquage-gatineau`, label: locale === "fr" ? "Remorquage à Gatineau" : "Towing in Gatineau" },
    { href: `/${locale}/remorquage/aylmer`, label: locale === "fr" ? "Remorquage à Aylmer" : "Towing in Aylmer" },
    { href: `/${locale}/remorquage/poids-lourd`, label: locale === "fr" ? "Remorquage poids lourd" : "Heavy truck towing" },
    { href: `/${locale}/remorquage/prix`, label: locale === "fr" ? "Prix d'un remorquage" : "Towing cost" },
  ];

  function isActive(href: string, exact?: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${locale}`} aria-label="Mécano Express — Accueil">
          <Logo dark size="md" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((l) => (
            <div
              key={l.href}
              className="relative group"
              onMouseEnter={() => l.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => {
                if (l.hasDropdown) {
                  setDropdownOpen(false);
                  setCategory(null);
                }
              }}
            >
              <Link
                href={l.href}
                className={`py-2 text-[15px] font-bold transition-colors ${
                  isActive(l.href, l.exact)
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {l.label}
              </Link>

              {l.hasDropdown && dropdownOpen && (
                <div className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-2">
                <div className="overflow-hidden rounded-sm border border-white/20 bg-graphite-950 py-2 shadow-xl">
                  {category === null && (
                    <>
                      <button
                        type="button"
                        onClick={() => setCategory("towing")}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-bold text-white hover:bg-white/10 hover:text-accent"
                      >
                        {dict.nav.towingCategory}
                        <span aria-hidden="true">→</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCategory("mechanic")}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-bold text-white hover:bg-white/10 hover:text-accent"
                      >
                        {dict.nav.mechanicCategory}
                        <span aria-hidden="true">→</span>
                      </button>
                      <Link
                        href={`/${locale}/services`}
                        className="mt-1 block border-t border-white/10 px-4 pt-3 text-[14px] font-semibold text-accent hover:text-accent-hover"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {dict.nav.viewAllServices} →
                      </Link>
                    </>
                  )}

                  {category !== null && (
                    <>
                      <button
                        type="button"
                        onClick={() => setCategory(null)}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-[13px] font-semibold text-steel-400 hover:text-accent"
                      >
                        <span aria-hidden="true">←</span>
                        {category === "towing" ? dict.nav.towingCategory : dict.nav.mechanicCategory}
                      </button>
                      <div className="max-h-96 overflow-y-auto border-t border-white/10 pt-1">
                        {category === "towing"
                          ? towingLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="block px-4 py-2 text-[14px] text-white hover:bg-white/10 hover:text-accent"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))
                          : repairServices.map((s) => (
                              <Link
                                key={s.id}
                                href={`/${locale}/services/${s[locale].slug}`}
                                className="block px-4 py-2 text-[14px] text-white hover:bg-white/10 hover:text-accent"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {s[locale].name}
                              </Link>
                            ))}
                        {category === "towing" && (
                          <Link
                            href={towingHubHref}
                            className="mt-1 block border-t border-white/10 px-4 pt-2.5 pb-1.5 text-[13px] font-semibold text-accent hover:text-accent-hover"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {locale === "fr" ? "Toutes nos options de remorquage" : "All towing options"} →
                          </Link>
                        )}
                        {category === "mechanic" && (
                          <Link
                            href={mechanicHubHref}
                            className="mt-1 block border-t border-white/10 px-4 pt-2.5 pb-1.5 text-[13px] font-semibold text-accent hover:text-accent-hover"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {locale === "fr" ? "Toutes nos options de garage" : "All garage options"} →
                          </Link>
                        )}
                      </div>
                    </>
                  )}
                </div>
                </div>
              )}
            </div>
          ))}
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
            {links.map((l) =>
              l.hasDropdown ? (
                <details key={l.href} className="group" onToggle={(e) => !e.currentTarget.open && setMobileCategory(null)}>
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium text-white marker:content-none">
                    {dict.nav.services}
                    <span className="text-xs text-steel-400 transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <div className="px-3 pb-3">
                    {mobileCategory === null ? (
                      <div className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => setMobileCategory("towing")}
                          className="flex items-center justify-between rounded-md py-2 text-left text-[14px] font-semibold text-white"
                        >
                          {dict.nav.towingCategory}
                          <span aria-hidden="true">→</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileCategory("mechanic")}
                          className="flex items-center justify-between rounded-md py-2 text-left text-[14px] font-semibold text-white"
                        >
                          {dict.nav.mechanicCategory}
                          <span aria-hidden="true">→</span>
                        </button>
                        <Link
                          href={`/${locale}/services`}
                          onClick={() => setOpen(false)}
                          className="mt-1 border-t border-white/10 pt-2 text-[14px] font-bold text-accent"
                        >
                          {dict.nav.viewAllServices} →
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileCategory(null)}
                          className="mb-1 flex items-center gap-2 py-1.5 text-[13px] font-semibold text-steel-400"
                        >
                          <span aria-hidden="true">←</span>
                          {mobileCategory === "towing" ? dict.nav.towingCategory : dict.nav.mechanicCategory}
                        </button>
                        {mobileCategory === "towing"
                          ? towingLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-md py-1.5 text-[14px] text-steel-200 hover:text-accent"
                              >
                                {sub.label}
                              </Link>
                            ))
                          : repairServices.map((s) => (
                              <Link
                                key={s.id}
                                href={`/${locale}/services/${s[locale].slug}`}
                                onClick={() => setOpen(false)}
                                className="block rounded-md py-1.5 text-[14px] text-steel-200 hover:text-accent"
                              >
                                {s[locale].name}
                              </Link>
                            ))}
                        {mobileCategory === "towing" && (
                          <Link
                            href={towingHubHref}
                            onClick={() => setOpen(false)}
                            className="mt-1 block border-t border-white/10 pt-2 text-[13px] font-semibold text-accent"
                          >
                            {locale === "fr" ? "Toutes nos options de remorquage" : "All towing options"} →
                          </Link>
                        )}
                        {mobileCategory === "mechanic" && (
                          <Link
                            href={mechanicHubHref}
                            onClick={() => setOpen(false)}
                            className="mt-1 block border-t border-white/10 pt-2 text-[13px] font-semibold text-accent"
                          >
                            {locale === "fr" ? "Toutes nos options de garage" : "All garage options"} →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </details>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    isActive(l.href, l.exact) ? "bg-accent-soft/10 text-accent" : "text-white"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
              <CallButton label={dict.cta.callNow} size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { type Dictionary } from "@/lib/dictionary";
import { hoursLabel } from "@/lib/business";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { towingIntents } from "@/lib/towingIntents";
import { mechanicIntents } from "@/lib/mechanicIntents";
import { Logo } from "./Logo";
import { CallButton } from "./CallButton";
import { PinIcon, ClockIcon } from "./Icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const addr = business.address;
  // Towing/roadside assistance runs 24/7, unlike the garage's posted hours.
  // The footer is shared across every page via the layout, so we detect the
  // towing context from the URL (remorquage-gatineau, remorquage/[intent] and
  // the towing service detail page — slug "remorquage" in FR, "towing" in EN).
  const pathname = usePathname();
  const isTowing = /\/(remorquage|towing)\b/.test(pathname);
  const footerServices = [
    ...services.filter((s) => s.category === "towing"),
    ...services.filter((s) => s.category !== "towing"),
  ].slice(0, 5);
  return (
    <footer className="bg-graphite-900 text-steel-300">
      {/* Intent-page links. The header's services dropdown only mounts its
          links on hover, so without this block every /remorquage/* and
          /garage/* page had a single inbound internal link. The footer is in
          the layout, so these ship on all 60+ pages. */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              {dict.nav.towingCategory}
            </h3>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href={`/${locale}/remorquage-gatineau`} className="hover:text-white">
                  {locale === "fr" ? "Remorquage à Gatineau" : "Towing in Gatineau"}
                </Link>
              </li>
              {towingIntents.map((intent) => (
                <li key={intent.slug}>
                  <Link href={`/${locale}/remorquage/${intent.slug}`} className="hover:text-white">
                    {intent[locale].serviceName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              {dict.nav.mechanicCategory}
            </h3>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href={`/${locale}/garage-gatineau`} className="hover:text-white">
                  {locale === "fr" ? "Garage à Gatineau" : "Garage in Gatineau"}
                </Link>
              </li>
              {mechanicIntents.map((intent) => (
                <li key={intent.slug}>
                  <Link href={`/${locale}/garage/${intent.slug}`} className="hover:text-white">
                    {intent[locale].serviceName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark size="md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.nav}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href={`/${locale}`} className="hover:text-white">{dict.nav.home}</Link></li>
            <li><Link href={`/${locale}/remorquage-gatineau`} className="hover:text-white">{dict.campaignSplit.towingTitle}</Link></li>
            <li><Link href={`/${locale}/garage-gatineau`} className="hover:text-white">{dict.campaignSplit.repairTitle}</Link></li>
            <li><Link href={`/${locale}/services`} className="hover:text-white">{dict.nav.services}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-white">{dict.nav.contact}</Link></li>
            <li><Link href={`/${locale}/confidentialite`} className="hover:text-white">{dict.footer.privacy}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {dict.nav.services}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((s) => (
              <li key={s.id}>
                <Link href={`/${locale}/services/${s[locale].slug}`} className="hover:text-white">
                  {s[locale].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <PinIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{addr.street}, {addr.sector}<br />({addr.locality}), {addr.region}</span>
            </li>
            <li>
              <CallButton label={business.phoneDisplay} showNumber variant="link" size="inline" />
            </li>
            <li className="flex items-start gap-2.5">
              <ClockIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{isTowing ? dict.openStatus.available247 : hoursLabel[locale]}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-steel-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {business.legalName}. {dict.footer.rights}</p>
          <p>{addr.street}, {addr.sector} · {business.phoneDisplay}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { type Dictionary } from "@/lib/dictionary";
import { hoursLabel } from "@/lib/business";
import { business } from "@/lib/business";
import { Logo } from "./Logo";
import { CallButton } from "./CallButton";
import { PinIcon, ClockIcon } from "./Icons";

type Cluster = "towing" | "repair" | "neutral";

/**
 * Which of the two topic clusters the current page belongs to.
 *
 * The site is split into a towing cluster and a mechanic cluster that are
 * meant to stay watertight: link equity should circulate inside a cluster
 * rather than bleed into the other one. Only the home page and /contact are
 * neutral — they act as the switchboard between the two.
 *
 * The towing service detail page lives at /services/remorquage (FR) and
 * /services/towing (EN), so it has to be caught before the /services test.
 */
function clusterOf(pathname: string, locale: Locale): Cluster {
  if (pathname === `/${locale}` || pathname === `/${locale}/`) return "neutral";
  // The zone pages cover both trades on purpose — a town page answers "who
  // do I call here" for towing and for repairs at once — so they belong to
  // neither cluster and keep the full footer.
  if (/\/(contact|confidentialite|zones)\b/.test(pathname)) return "neutral";
  if (/\/(remorquage|towing)\b/.test(pathname)) return "towing";
  return "repair";
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const addr = business.address;
  const pathname = usePathname();
  const cluster = clusterOf(pathname, locale);
  // Towing/roadside assistance runs 24/7, unlike the garage's posted hours.
  const isTowing = cluster === "towing";

  const towingPillar = {
    href: `/${locale}/remorquage-gatineau`,
    label: locale === "fr" ? "Remorquage à Gatineau" : "Towing in Gatineau",
  };
  const repairPillar = {
    href: `/${locale}/garage-gatineau`,
    label: locale === "fr" ? "Garage à Gatineau" : "Garage in Gatineau",
  };

  /**
   * Deliberately short, and deliberately pillar-only.
   *
   * An earlier version listed every intent page of both clusters here. It
   * fixed the orphan problem it was written for, but because the footer ships
   * on all 62 pages it also flattened the site: every page ended up with the
   * same 30 inbound links, so nothing looked more important than anything
   * else, half of all internal links crossed the cluster boundary, and the
   * noindex ad landing pages absorbed as much link equity as real pages.
   *
   * Satellites are linked from their pillar and from their sibling pages
   * instead — those links carry hierarchy, a footer block repeated site-wide
   * does not.
   */
  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    ...(cluster === "towing" || cluster === "neutral" ? [towingPillar] : []),
    ...(cluster === "repair" || cluster === "neutral" ? [repairPillar] : []),
    ...(cluster === "repair" || cluster === "neutral"
      ? [{ href: `/${locale}/services`, label: dict.nav.services }]
      : []),
    // Shown in every cluster: the zones hub is the entry point to the whole
    // geographic axis, and without it here it would be reachable only from a
    // breadcrumb on the zone pages themselves.
    {
      href: `/${locale}/zones`,
      label: locale === "fr" ? "Zones desservies" : "Areas served",
    },
    { href: `/${locale}/contact`, label: dict.nav.contact },
    { href: `/${locale}/confidentialite`, label: dict.footer.privacy },
  ];

  return (
    <footer className="bg-graphite-900 text-steel-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.6fr_1fr_1.2fr]">
        <div>
          <Logo dark size="md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.nav}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            {dict.footer.contact}
          </h2>
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

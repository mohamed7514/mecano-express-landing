import type { Locale } from "./i18n";

/**
 * The towns the business serves, and which zone page — if any — covers each
 * one on each side of the business.
 *
 * This file used to hold the zone pages' full copy, for pages at /zones/<town>
 * that covered towing AND mechanical work together. That was wrong: a page
 * carrying both trades gives Google one mixed category signal, and the two
 * Google Business listings have nothing clean to point at. The zone pages now
 * live inside their own branch — /remorquage/<town> and /garage/<town> — and
 * their copy sits with the rest of that branch in lib/towingIntents.ts and
 * lib/mechanicIntents.ts. The old copy is still in git at commit 1f0d5ae if
 * it is wanted as raw material.
 *
 * What is left here is the lookup the shared UI needs: given a town name shown
 * in the served-areas chips, which page should it link to, for the branch the
 * visitor is currently reading?
 *
 * The asymmetry is deliberate. The tow truck travels, so every town earns a
 * towing page. The garage does not move — it is at 879 chemin Vanier — so a
 * town only earns a garage page when the drive is realistic, and that page is
 * framed as "garage près de <town>", never "garage à <town>".
 */
export type Zone = {
  id: string;
  name: Record<Locale, string>;
  /** Slug under /remorquage/, when that page exists. */
  towing?: string;
  /** Slug under /garage/, when that page exists. */
  garage?: string;
};

export const zones: Zone[] = [
  { id: "aylmer", name: { fr: "Aylmer", en: "Aylmer" }, towing: "aylmer", garage: "aylmer" },
  { id: "hull", name: { fr: "Hull", en: "Hull" }, towing: "hull", garage: "hull" },
  { id: "chelsea", name: { fr: "Chelsea", en: "Chelsea" }, towing: "chelsea", garage: "chelsea" },
  { id: "gatineau", name: { fr: "Gatineau", en: "Gatineau" }, towing: "gatineau", garage: "gatineau" },
  { id: "buckingham", name: { fr: "Buckingham", en: "Buckingham" }, towing: "buckingham", garage: "buckingham" },
  // Cantley and Val-des-Monts are towing-only on purpose: the truck drives to
  // them, but nobody tows a working car 30 km to a garage they could reach
  // more cheaply. A "garage près de Cantley" page would be a claim the
  // business cannot back.
  { id: "cantley", name: { fr: "Cantley", en: "Cantley" }, towing: "cantley" },
  { id: "val-des-monts", name: { fr: "Val-des-Monts", en: "Val-des-Monts" }, towing: "val-des-monts" },
  { id: "luskville", name: { fr: "Luskville", en: "Luskville" }, towing: "luskville", garage: "luskville" },
  { id: "masson-angers", name: { fr: "Masson-Angers", en: "Masson-Angers" }, towing: "masson-angers", garage: "masson-angers" },
  { id: "ange-gardien", name: { fr: "L'Ange-Gardien", en: "L'Ange-Gardien" }, towing: "ange-gardien", garage: "ange-gardien" },
];

/** Which branch a page belongs to, so a chip links within its own branch. */
export type Branch = "towing" | "repair";

/**
 * The href a served-area chip should point at, or undefined when that town has
 * no page on that side yet — the chip then stays plain text rather than
 * pointing somewhere weaker. Matching is on the displayed name, since that is
 * what the chip lists carry.
 */
export function zoneHref(name: string, locale: Locale, branch: Branch): string | undefined {
  const zone = zones.find((z) => z.name[locale].toLowerCase() === name.toLowerCase());
  if (!zone) return undefined;
  if (branch === "towing") {
    return zone.towing ? `/${locale}/remorquage/${zone.towing}` : undefined;
  }
  // Garage area pages sit under their own segment, with the -qc suffix.
  // Returning the bare /garage/<town> here pointed every chip at a redirect.
  return zone.garage ? `/${locale}/garage/secteurs/${zone.garage}-qc` : undefined;
}

/** Town names for the served-areas chips, in listing order. */
export function zoneNames(locale: Locale): string[] {
  return zones.map((z) => z.name[locale]);
}

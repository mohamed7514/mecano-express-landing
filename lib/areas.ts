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
  { id: "hull", name: { fr: "Hull", en: "Hull" }, garage: "hull" },
  { id: "chelsea", name: { fr: "Chelsea", en: "Chelsea" }, towing: "chelsea" },
  { id: "gatineau", name: { fr: "Gatineau", en: "Gatineau" } },
  { id: "buckingham", name: { fr: "Buckingham", en: "Buckingham" } },
  { id: "cantley", name: { fr: "Cantley", en: "Cantley" } },
  { id: "val-des-monts", name: { fr: "Val-des-Monts", en: "Val-des-Monts" } },
  { id: "luskville", name: { fr: "Luskville", en: "Luskville" } },
  { id: "masson-angers", name: { fr: "Masson-Angers", en: "Masson-Angers" } },
  { id: "ange-gardien", name: { fr: "L'Ange-Gardien", en: "L'Ange-Gardien" } },
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
  const slug = branch === "towing" ? zone.towing : zone.garage;
  return slug ? `/${locale}/${branch === "towing" ? "remorquage" : "garage"}/${slug}` : undefined;
}

/** Town names for the served-areas chips, in listing order. */
export function zoneNames(locale: Locale): string[] {
  return zones.map((z) => z.name[locale]);
}

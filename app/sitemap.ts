import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { services } from "@/lib/services";
import { towingIntents } from "@/lib/towingIntents";
import { mechanicIntents } from "@/lib/mechanicIntents";
import { business } from "@/lib/business";

/**
 * Only indexable pages belong here — a sitemap entry is a request to index,
 * so listing a noindex URL sends Google two contradictory signals. That rules
 * out /confidentialite, the Ads-only intent pages (`indexable: false`) and
 * /services/remorquage, which canonicalizes to /remorquage-gatineau.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.domain;
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({ url: `${base}/${locale}`, lastModified, changeFrequency: "monthly", priority: 1 });
    // Dedicated Google Ads landing pages — highest priority, they're the
    // pages paid traffic actually lands on.
    entries.push({ url: `${base}/${locale}/garage-gatineau`, lastModified, changeFrequency: "weekly", priority: 1 });
    entries.push({ url: `${base}/${locale}/remorquage-gatineau`, lastModified, changeFrequency: "weekly", priority: 1 });
    for (const intent of towingIntents) {
      if (intent.indexable === false) continue;
      entries.push({
        url: `${base}/${locale}/remorquage/${intent.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
    for (const intent of mechanicIntents) {
      if (intent.indexable === false) continue;
      entries.push({
        url: `${base}/${locale}/garage/${intent.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
    entries.push({ url: `${base}/${locale}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 });
    entries.push({ url: `${base}/${locale}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 });
    for (const s of services) {
      // The towing service page canonicalizes to /remorquage-gatineau (see
      // services/[slug]/page.tsx) — a sitemap entry would ask Google to index
      // a URL that points its canonical somewhere else.
      if (s.category === "towing") continue;
      entries.push({
        url: `${base}/${locale}/services/${s[locale].slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return entries;
}

import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { services } from "@/lib/services";
import { towingIntents } from "@/lib/towingIntents";
import { mechanicIntents } from "@/lib/mechanicIntents";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.domain;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({ url: `${base}/${locale}`, changeFrequency: "monthly", priority: 1 });
    // Dedicated Google Ads landing pages — highest priority, they're the
    // pages paid traffic actually lands on.
    entries.push({ url: `${base}/${locale}/garage-gatineau`, changeFrequency: "weekly", priority: 1 });
    entries.push({ url: `${base}/${locale}/remorquage-gatineau`, changeFrequency: "weekly", priority: 1 });
    for (const intent of towingIntents) {
      entries.push({
        url: `${base}/${locale}/remorquage/${intent.slug}`,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
    for (const intent of mechanicIntents) {
      entries.push({
        url: `${base}/${locale}/garage/${intent.slug}`,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
    entries.push({ url: `${base}/${locale}/services`, changeFrequency: "monthly", priority: 0.9 });
    entries.push({ url: `${base}/${locale}/contact`, changeFrequency: "yearly", priority: 0.7 });
    entries.push({ url: `${base}/${locale}/confidentialite`, changeFrequency: "yearly", priority: 0.3 });
    for (const s of services) {
      entries.push({
        url: `${base}/${locale}/services/${s[locale].slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return entries;
}

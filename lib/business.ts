import type { Locale } from "./i18n";

/**
 * Single source of truth for the garage's NAP (Name, Address, Phone),
 * hours and coordinates. Used across pages, footer, JSON-LD schema and
 * sitemap so the info stays consistent everywhere (critical for local SEO).
 */
export const business = {
  name: "Mécano Express",
  legalName: "Remorquage Mécano Express",
  domain: "https://garagemecanoexpress.ca",
  phone: "+18199217869",
  phoneDisplay: "(819) 921-7869",
  email: "info@remorquagemecanoexpress.ca",
  address: {
    street: "879 chemin Vanier",
    locality: "Gatineau",
    sector: "Aylmer",
    region: "QC",
    postalCode: "J9J 0J0",
    country: "CA",
  },
  geo: {
    lat: 45.4317301,
    lng: -75.8169691,
  },
  mapUrl:
    "https://www.google.com/maps/place/remorquage+mecano+express/@45.4317677,-75.8195226,17z/data=!4m6!3m5!1s0x4cce0367c0682445:0x6ab7318c984c4874!8m2!3d45.4317301!4d-75.8169691",
  // Garage hours: Mon–Sat 9:00–18:00. Towing/roadside assistance is
  // separate and available 24/7 — see OpenStatusBadge's alwaysOpen prop.
  hours: [
    { days: [1, 2, 3, 4, 5, 6], opens: "09:00", closes: "18:00" },
  ],
  areasServed: ["Aylmer", "Hull", "Gatineau", "Buckingham", "Ottawa"],
  /**
   * Photos for the LocalBusiness schema. Google wants actual pictures of the
   * business here, not a logo — the logo goes in the separate `logo` field.
   */
  photos: ["/remorquage.webp", "/camionlourd.webp", "/photos/mecanique.webp"],
} as const;

/**
 * Profiles that confirm this is the same business as the site — the `sameAs`
 * of the LocalBusiness schema. The Google Business Profile listing is the one
 * that matters for local ranking; add the Facebook page and any directory
 * listings (Yelp, PagesJaunes) here as they're created.
 */
export const sameAs: string[] = [business.mapUrl];

/**
 * The openGraph fields every page has to repeat. Next merges `openGraph`
 * shallowly, so a page declaring its own object replaces the layout's whole
 * object rather than extending it — and the file-based opengraph-image is
 * only re-attached to the segment that owns the file ([locale], not the
 * pages). Spread this into every page's `openGraph` or that page ships with
 * no image at all and its Twitter card degrades to a text-only `summary`.
 */
export function ogBase(l: Locale) {
  return {
    type: "website" as const,
    locale: l === "fr" ? "fr_CA" : "en_CA",
    siteName: business.name,
    // Dimensions are stated so a scraper can lay the card out without
    // fetching the PNG first. They must match app/[locale]/opengraph-image.tsx.
    images: [
      {
        url: `/${l}/opengraph-image`,
        width: 1200,
        height: 630,
        alt:
          l === "fr"
            ? "Mécano Express — remorquage et garage à Aylmer, Gatineau"
            : "Mécano Express — towing and auto garage in Aylmer, Gatineau",
      },
    ],
  };
}

/**
 * Floor price for a tow — "starting at". Single source for every place the
 * site states it: the hero on /remorquage/prix, the quote panel, the FAQ
 * (which feeds the FAQPage schema), the meta description and the Offer in
 * the Service schema. One constant so the figure can never drift between
 * them, and so raising it is a one-line change.
 *
 * Formatting is per locale, not computed: Quebec French puts the comma as
 * the decimal mark and the dollar sign after the amount ("79,99 $"), English
 * Canada puts it before ("$79.99").
 *
 * NOTE: this is the amount before tax status is stated. Nothing on the site
 * claims the figure is tax-included — do not add that claim without the
 * client confirming it.
 */
export const towingStartingPrice = {
  amount: 79.99,
  currency: "CAD",
  display: { fr: "79,99 $", en: "$79.99" },
} as const;

export const hoursLabel: Record<Locale, string> = {
  fr: "Lun – Sam : 9h à 18h",
  en: "Mon – Sat: 9 AM to 6 PM",
};

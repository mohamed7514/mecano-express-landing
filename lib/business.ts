import type { Locale } from "./i18n";

/**
 * Single source of truth for the garage's NAP (Name, Address, Phone),
 * hours and coordinates. Used across pages, footer, JSON-LD schema and
 * sitemap so the info stays consistent everywhere (critical for local SEO).
 */
export const business = {
  name: "Mécano Express",
  legalName: "Remorquage Mécano Express",
  domain: "https://www.remorquagemecanoexpress.ca",
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
  // Mon–Sat 9:00–17:00
  hours: [
    { days: [1, 2, 3, 4, 5, 6], opens: "09:00", closes: "17:00" },
  ],
  areasServed: ["Aylmer", "Hull", "Gatineau", "Buckingham", "Ottawa"],
} as const;

export const hoursLabel: Record<Locale, string> = {
  fr: "Lun – Sam : 9h à 17h",
  en: "Mon – Sat: 9 AM to 5 PM",
};

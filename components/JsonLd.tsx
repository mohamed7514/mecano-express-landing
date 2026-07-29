import { business } from "@/lib/business";
import { services } from "@/lib/services";
import type { Locale } from "@/lib/i18n";
import type { FAQItem } from "@/lib/faq";

/**
 * LocalBusiness / AutoRepair structured data. Helps Google understand the
 * garage (name, address, phone, hours, services) — a strong local-SEO signal
 * and the source for rich results.
 */
export function LocalBusinessJsonLd({ locale }: { locale: Locale }) {
  const a = business.address;
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${business.domain}/#business`,
    name: business.legalName,
    alternateName: business.name,
    url: `${business.domain}/${locale}`,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    image: `${business.domain}/logo-mark.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    hasMap: business.mapUrl,
    areaServed: business.areasServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map(
        (d) =>
          ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d]
      ),
      opens: h.opens,
      closes: h.closes,
    })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s[locale].name },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQPage structured data — mirrors the visible FAQ accordion so Google can
 * surface these Q&As directly in search results (and AI answer engines can
 * cite them). Must match the on-page text exactly, per Google's guidelines.
 */
export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  if (items.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Shared Service structured data — used by individual service detail pages
 * and by the two dedicated Ads landing pages (towing / repair), each with
 * their own serviceType so search engines see them as distinct offers.
 */
export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    description,
    provider: { "@id": `${business.domain}/#business` },
    areaServed: business.areasServed.map((areaName) => ({ "@type": "City", name: areaName })),
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

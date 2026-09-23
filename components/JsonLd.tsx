import { business, sameAs } from "@/lib/business";
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
    image: business.photos.map((path) => `${business.domain}${path}`),
    logo: `${business.domain}/logo-mark.png`,
    sameAs,
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
  available247 = false,
  startingPrice,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  /** "Starting at" price. Modelled as an AggregateOffer with lowPrice, not an
   * Offer with price — the latter would assert one exact price for every tow,
   * which is not what the page says. */
  startingPrice?: { amount: number; currency: string };
  /** Towing/roadside runs around the clock, unlike the garage premises. The
   * AutoRepair schema above carries the shop's Mon-Sat hours, so 24/7 has to
   * be declared here on the service itself or the two contradict each other. */
  available247?: boolean;
  /**
   * The towns this particular page actually serves. Defaults to the whole
   * business footprint, which is right for a site-wide service but wrong for
   * a page about one town: /zones/chelsea was declaring it served Aylmer,
   * Hull, Gatineau, Buckingham and Ottawa — and not Chelsea. It also let the
   * site claim Ottawa on every page while the Ads account excludes Ontario.
   */
  areaServed?: readonly string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    description,
    provider: { "@id": `${business.domain}/#business` },
    areaServed: (areaServed ?? business.areasServed).map((areaName) => ({
      "@type": "City",
      name: areaName,
    })),
    url,
    ...(startingPrice
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: startingPrice.currency,
            lowPrice: startingPrice.amount,
          },
        }
      : {}),
    ...(available247
      ? {
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday", "Tuesday", "Wednesday", "Thursday",
              "Friday", "Saturday", "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * BreadcrumbList structured data. Google uses it for the breadcrumb trail
 * shown in place of the raw URL in search results, and it's the only signal
 * that tells crawlers where a /garage/* or /remorquage/* page sits in the
 * hierarchy — those pages are two levels deep with no other parent clue.
 */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${business.domain}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

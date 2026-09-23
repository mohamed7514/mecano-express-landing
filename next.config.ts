import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback — smaller hero images, better LCP.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The two hubs moved up to their parent segment: /garage-gatineau ->
      // /garage, /remorquage-gatineau -> /remorquage. Each hub is the landing
      // page for one of the two Google Business listings, so its URL has to
      // say which trade it is and nothing else — a listing pointing at the
      // home page gave Google two contradictory category signals on one URL.
      //
      // These 301s hand the old pillars' authority to the new hubs. They held
      // the internal links and the rankings, and nothing on the site points at
      // them any more.
      {
        source: "/:locale(fr|en)/garage-gatineau",
        destination: "/:locale/garage",
        permanent: true,
      },
      {
        source: "/:locale(fr|en)/remorquage-gatineau",
        destination: "/:locale/remorquage",
        permanent: true,
      },
      // Unprefixed, for anyone who drops the locale. Without these the bare
      // path costs two hops: the proxy adds /fr, then the rule above fires.
      { source: "/garage-gatineau", destination: "/fr/garage", permanent: true },
      { source: "/remorquage-gatineau", destination: "/fr/remorquage", permanent: true },

      // "Freins qui grincent" and "changement de plaquettes" were two pages
      // for one job — confirmed with the client. They are the same visit, the
      // same bay and the same invoice, so they are one page now. The five
      // questions they answered that the surviving page did not have moved onto
      // it; only the URLs are gone.
      {
        source: "/:locale(fr|en)/garage/freins-bruit",
        destination: "/:locale/garage/freins",
        permanent: true,
      },
      {
        source: "/:locale(fr|en)/garage/plaquettes-frein",
        destination: "/:locale/garage/freins",
        permanent: true,
      },

      // Garage area pages moved under their own segment so /garage/<slug> can
      // carry service slugs. The -qc suffix disambiguates: Québec has two
      // L'Ange-Gardien.
      {
        source: "/:locale(fr|en)/garage/aylmer",
        destination: "/:locale/garage/secteurs/aylmer-qc",
        permanent: true,
      },
      {
        source: "/:locale(fr|en)/garage/hull",
        destination: "/:locale/garage/secteurs/hull-qc",
        permanent: true,
      },

      // /remorquage/secteurs was a single page covering Chelsea, Cantley,
      // Val-des-Monts, Buckingham and Hull at once — the opposite of one page
      // per area. Each of those towns now has its own page, so the catch-all
      // is gone and its traffic belongs on the towing hub, which lists them
      // all. Insurance: it is not known to have shipped, but the redirect
      // costs nothing and a 404 would.
      {
        source: "/:locale(fr|en)/remorquage/secteurs",
        destination: "/:locale/remorquage",
        permanent: true,
      },

      // The mechanical services moved from /services/<slug> to /garage/<slug>,
      // so the URL names the trade the page belongs to. Order matters here:
      // the towing entry is caught before the catch-all, because it does not
      // go to /garage at all — it was a duplicate of the towing hub and
      // already canonicalized there.
      {
        source: "/:locale(fr|en)/services/remorquage",
        destination: "/:locale/remorquage",
        permanent: true,
      },
      {
        source: "/:locale(fr|en)/services/towing",
        destination: "/:locale/remorquage",
        permanent: true,
      },
      {
        source: "/:locale(fr|en)/services/:slug",
        destination: "/:locale/garage/:slug",
        permanent: true,
      },
      // The services hub is the garage hub now.
      {
        source: "/:locale(fr|en)/services",
        destination: "/:locale/garage",
        permanent: true,
      },
      { source: "/services", destination: "/fr/garage", permanent: true },
    ];
  },
};

export default nextConfig;

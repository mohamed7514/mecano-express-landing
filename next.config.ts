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
    ];
  },
};

export default nextConfig;

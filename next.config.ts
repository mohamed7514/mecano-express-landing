import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback — smaller hero images, better LCP.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // /garage/<intent> and /remorquage/<intent> have no page at their parent
      // segment, so truncating the URL used to 404. Send both to the hub page
      // that actually owns each theme instead of adding a competing one.
      {
        source: "/:locale(fr|en)/garage",
        destination: "/:locale/garage-gatineau",
        permanent: true,
      },
      {
        source: "/:locale(fr|en)/remorquage",
        destination: "/:locale/remorquage-gatineau",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

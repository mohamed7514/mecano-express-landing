import Script from "next/script";

/**
 * Ahrefs Web Analytics — cookieless, no personal data, so it needs no consent
 * gate. Loaded directly rather than through GTM: it is one request and going
 * through the container would only delay it behind GTM's own bootstrap.
 *
 * The key is public by design — it identifies the site to Ahrefs and is
 * visible in the page source either way, so there is nothing to hide in an
 * env var.
 */
const AHREFS_KEY = "qbqleGoQ6GJU4aegn8cNsw";

export function AhrefsAnalytics() {
  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={AHREFS_KEY}
      strategy="afterInteractive"
    />
  );
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const ADS_CALL_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_LABEL;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires on every phone-call click across the site. Phone calls are the
 * single conversion event that matters for this business, so this is the
 * only tracking wired up for launch.
 *
 * Pushes to dataLayer first — this is what Google Tag Manager listens to,
 * and it works whether or not gtag.js ends up loaded. The direct gtag()
 * calls are a no-op until NEXT_PUBLIC_GOOGLE_ADS_ID / _CALL_CONVERSION_LABEL
 * are set, kept for sites that skip GTM and load gtag.js directly.
 */
export function trackCallClick() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "phone_call_click" });

  if (typeof window.gtag !== "function") return;
  window.gtag("event", "phone_call_click", { event_category: "engagement" });
  if (ADS_ID && ADS_CALL_LABEL) {
    window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_CALL_LABEL}` });
  }
}

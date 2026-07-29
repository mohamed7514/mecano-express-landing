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
 * only tracking wired up for launch — no-op until the env vars are set.
 */
export function trackCallClick() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "phone_call_click", { event_category: "engagement" });
  if (ADS_ID && ADS_CALL_LABEL) {
    window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_CALL_LABEL}` });
  }
}

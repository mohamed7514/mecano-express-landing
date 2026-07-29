import Script from "next/script";
import { GA_ID, ADS_ID } from "@/lib/gtag";

/**
 * Renders nothing (no <script> tags, no network calls) until
 * NEXT_PUBLIC_GA_MEASUREMENT_ID is set — safe to ship before the client's
 * real GA4/Google Ads IDs are available.
 */
export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";

export const alt = "Remorquage Mécano Express";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const taglines: Record<Locale, string> = {
  fr: "Remorquage & garage à Aylmer, Gatineau",
  en: "Towing & auto repair in Aylmer, Gatineau",
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : defaultLocale;

  const logoData = await readFile(join(process.cwd(), "public", "logo-mark.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 78% 50%, rgba(254,119,0,0.35), transparent 60%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={340} height={340} style={{ marginRight: 56 }} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 60, fontWeight: 800, color: "#ffffff", lineHeight: 1.08 }}>
            Remorquage Mécano Express
          </div>
          <div style={{ fontSize: 32, color: "#fe7700", marginTop: 22, fontWeight: 600 }}>
            {taglines[l]}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

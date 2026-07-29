import Image from "next/image";
import { photoExists } from "@/lib/media";

/**
 * Branded gradient panel shown wherever a real photo is expected but the
 * client hasn't dropped the file into public/photos/ yet — no "coming
 * soon" text, so the live site never looks unfinished to real customers.
 */
export function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-graphite-950 via-graphite-900 to-graphite-800 ${className}`}
    >
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent/20 blur-[90px]"
        aria-hidden="true"
      />
      <svg
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative text-white/15"
        aria-hidden="true"
      >
        <path d="M14.5 5.5a3.5 3.5 0 0 0-4.9 4.2L4 15.3 6.7 18l5.6-5.6a3.5 3.5 0 0 0 4.2-4.9l-2.1 2.1-1.9-.4-.4-1.9 2.4-1.8Z" />
      </svg>
    </div>
  );
}

/**
 * Renders the real photo from public/photos/<name> the moment it exists,
 * falling back to PhotoPlaceholder until then. Server-only (uses node:fs).
 */
export function Photo({
  name,
  alt,
  className = "",
  fill = false,
  width,
  height,
  preload = false,
  sizes,
}: {
  name: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  preload?: boolean;
  sizes?: string;
}) {
  const relPath = `photos/${name}`;
  if (!photoExists(relPath)) {
    return <PhotoPlaceholder className={className} />;
  }
  if (fill) {
    return (
      <Image src={`/${relPath}`} alt={alt} fill sizes={sizes} priority={preload} className={className} />
    );
  }
  return (
    <Image
      src={`/${relPath}`}
      alt={alt}
      width={width}
      height={height}
      priority={preload}
      className={className}
    />
  );
}

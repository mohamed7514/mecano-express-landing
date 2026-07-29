/**
 * Angled ray-burst motif pulled from the logo's diagonal stripe pattern —
 * used as a recurring decorative signature on dark hero sections instead
 * of a generic blurred circle, so the brand reads as custom rather than
 * a stock Tailwind template.
 */
export function BrandBurst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMaxYMin slice"
    >
      <polygon points="500,0 500,110 240,500 150,500" fill="var(--color-accent)" opacity="0.10" />
      <polygon points="500,140 500,230 320,500 250,500" fill="var(--color-accent)" opacity="0.16" />
      <polygon points="500,260 500,320 400,500 350,500" fill="var(--color-accent)" opacity="0.22" />
      <polygon points="500,0 500,40 90,500 40,500" fill="var(--color-chrome)" opacity="0.06" />
    </svg>
  );
}

import type { Locale } from "./i18n";

export type Testimonial = {
  name: string;
  neighborhood: string;
  quote: Record<Locale, string>;
  rating: 1 | 2 | 3 | 4 | 5;
};

/**
 * Real customer reviews only — never fabricated. Empty until real Google
 * reviews (name, neighborhood, quote) are supplied; Testimonials.tsx
 * renders nothing when this is empty, so there's no visual gap.
 */
export const testimonials: Testimonial[] = [];

"use client";

import { business } from "@/lib/business";
import { trackCallClick } from "@/lib/gtag";
import { PhoneIcon } from "./Icons";

type Variant = "solid" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg" | "xl" | "inline" | "inline-lg";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent text-white hover:bg-accent-hover shadow-sm shadow-accent/30 clip-slant",
  outline:
    "border border-steel-300 text-ink hover:border-accent hover:text-accent bg-white/70",
  ghost: "text-white/90 hover:text-white",
  link: "text-white font-semibold hover:text-accent [&_svg]:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-3.5 py-2 gap-1.5",
  md: "text-[15px] px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3.5 gap-2.5",
  xl: "text-lg px-8 py-5 gap-3",
  inline: "text-[15px] gap-2.5",
  "inline-lg": "font-display text-2xl font-bold gap-3.5",
};

export function CallButton({
  label,
  showNumber = false,
  variant = "solid",
  size = "md",
  pulse = false,
  hideIcon = false,
  className = "",
}: {
  label: string;
  showNumber?: boolean;
  variant?: Variant;
  size?: Size;
  pulse?: boolean;
  hideIcon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={`tel:${business.phone}`}
      data-call-cta
      onClick={trackCallClick}
      aria-label={`${label} ${business.phoneDisplay}`}
      className={`inline-flex items-center justify-center rounded-[var(--radius)] font-bold transition-colors ${variants[variant]} ${sizes[size]} ${pulse ? "animate-pulse-glow" : ""} ${className}`}
    >
      {!hideIcon && (
        <PhoneIcon
          width={size === "xl" ? 24 : size === "lg" || size === "inline-lg" ? 20 : 18}
          height={size === "xl" ? 24 : size === "lg" || size === "inline-lg" ? 20 : 18}
        />
      )}
      <span>{showNumber ? business.phoneDisplay : label}</span>
    </a>
  );
}

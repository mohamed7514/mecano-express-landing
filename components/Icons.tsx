import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 5.5C3 4.12 4.12 3 5.5 3h1.6c.6 0 1.1.4 1.3.98l.9 2.9c.16.5 0 1.05-.4 1.4l-1.3 1.1a12.5 12.5 0 0 0 5.02 5.02l1.1-1.3c.35-.4.9-.56 1.4-.4l2.9.9c.58.2.98.7.98 1.3v1.6c0 1.38-1.12 2.5-2.5 2.5C10.5 21 3 13.5 3 5.5Z" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ---- Service icons ---- */

export function OilIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 14h9l3-3h4v3a5 5 0 0 1-5 5H8a4 4 0 0 1-4-4v-1Z" />
      <path d="M9 11V8h4M12 11V8" />
      <path d="M20 8s2 2 2 3.5A2 2 0 0 1 18 11.5C18 10 20 8 20 8Z" />
    </svg>
  );
}

export function BrakeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    </svg>
  );
}

export function TireIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </svg>
  );
}

export function DiagnosticIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 12h3l2 5 4-12 2 7h5" />
    </svg>
  );
}

export function SuspensionIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 3v3M7 18v3M7 6c2 .5 2 2 0 2.5S5 11 7 11.5 9 13 7 13.5 5 16 7 16.5" />
      <path d="M17 3v18M13 6h8M13 18h8" />
    </svg>
  );
}

export function AcIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" />
      <path d="M12 3l2 2-2 2-2-2 2-2ZM4.5 7.5l.7 2.7-2.7.7M19.5 7.5l-.7 2.7 2.7.7" />
    </svg>
  );
}

export function ExhaustIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 14h9a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h3" />
      <path d="M3 14v-2a2 2 0 0 1 2-2h4l2 4" />
      <circle cx="19" cy="20" r="0" />
    </svg>
  );
}

export function TransmissionIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="7" cy="7" r="2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="7" r="2" />
      <path d="M7 9v6M7 7h10M17 9v-.5M9 17h6a2 2 0 0 0 2-2v-4" />
    </svg>
  );
}

export function TowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 16.5V9h6l3 3h5.5a2.5 2.5 0 0 1 2.5 2.5v2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M13 12V6h3l2.5 3" />
      <path d="M19 6v3" />
    </svg>
  );
}

export function BodyIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 16.5V13l2-4.5a2 2 0 0 1 1.9-1.5h8.2a2 2 0 0 1 1.9 1.5L20 13v3.5" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
      <path d="M4 13h16" />
      <path d="M9.5 10.5c1-.6 4-.6 5 0" />
    </svg>
  );
}

export const serviceIcons: Record<string, (p: IconProps) => ReactElement> = {
  oil: OilIcon,
  brake: BrakeIcon,
  tire: TireIcon,
  diagnostic: DiagnosticIcon,
  suspension: SuspensionIcon,
  ac: AcIcon,
  exhaust: ExhaustIcon,
  transmission: TransmissionIcon,
  tow: TowIcon,
  body: BodyIcon,
};

"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionary";
import { business } from "@/lib/business";

const DAY_MAP: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/**
 * business.hours is defined in the shop's own local time (America/Toronto),
 * so "now" must be read in that timezone too — not the visitor's, which
 * would be wrong for anyone clicking the ad from outside Eastern Time.
 */
function isOpenNow(): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const day = DAY_MAP[parts.find((p) => p.type === "weekday")?.value ?? "Sun"] ?? 0;
  const minutes =
    parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10) * 60 +
    parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);

  return business.hours.some(
    (block) =>
      (block.days as readonly number[]).includes(day) &&
      minutes >= toMinutes(block.opens) &&
      minutes < toMinutes(block.closes)
  );
}

export function OpenStatusBadge({
  dict,
  className = "",
  alwaysOpen = false,
}: {
  dict: Dictionary;
  className?: string;
  /** Towing/roadside assistance runs 24/7, independent of the garage's
   * posted hours — skips the clock check and always shows as available. */
  alwaysOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean | null>(alwaysOpen ? true : null);

  useEffect(() => {
    if (alwaysOpen) return;
    const update = () => setOpen(isOpenNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [alwaysOpen]);

  if (open === null) {
    return <span className={`inline-block h-8 ${className}`} aria-hidden="true" />;
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold ${
        open
          ? "border-signal-good/40 bg-signal-good/10 text-signal-good"
          : "border-white/15 bg-white/5 text-steel-300"
      } ${className}`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${open ? "bg-signal-good" : "bg-steel-400"}`} />
      {alwaysOpen
        ? dict.openStatus.available247
        : open
          ? dict.openStatus.openNow
          : `${dict.openStatus.closedNow} — ${dict.openStatus.closedNote}`}
    </span>
  );
}

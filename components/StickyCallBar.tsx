import type { Dictionary } from "@/lib/dictionary";
import { CallButton } from "./CallButton";
import { OpenStatusBadge } from "./OpenStatusBadge";

/**
 * Mobile-only, always-on call bar for the two Ads landing pages. No
 * dismiss button by design — persistent visibility is the point on a page
 * whose entire job is to turn a paid click into a phone call.
 */
export function StickyCallBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm md:hidden">
      <OpenStatusBadge dict={dict} className="mb-2" />
      <CallButton label={dict.cta.callNow} showNumber size="xl" pulse className="w-full" />
    </div>
  );
}

import Image from "next/image";

const sizes = {
  sm: 40,
  md: 56,
  lg: 88,
} as const;

export function Logo({
  dark = false,
  size = "sm",
  wordmark = true,
}: {
  dark?: boolean;
  size?: keyof typeof sizes;
  wordmark?: boolean;
}) {
  const px = sizes[size];
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo-mark.png"
        alt={wordmark ? "" : "Remorquage Mécano Express"}
        width={px}
        height={px}
        className="shrink-0 object-contain"
      />
      {wordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[17px] font-extrabold tracking-tight ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            Mécano Express
          </span>
          <span className={`text-[11px] font-medium ${dark ? "text-steel-300" : "text-steel-400"}`}>
            Garage · Remorquage · Aylmer
          </span>
        </span>
      )}
    </span>
  );
}

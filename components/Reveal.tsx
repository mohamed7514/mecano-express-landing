/**
 * Scroll-reveal wrapper. Pure CSS (see .reveal in globals.css) — no
 * IntersectionObserver, no client JS, so content can never be stuck
 * invisible if a script is slow, blocked, or a crawler never scrolls.
 * `delay` staggers siblings slightly via animation-delay in supporting
 * browsers; harmless no-op everywhere else.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={delay ? { animationDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

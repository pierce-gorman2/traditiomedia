import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
      <span aria-hidden className="h-px w-10 bg-gold" />
      {children}
    </p>
  );
}

export function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`px-6 py-28 sm:py-36 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

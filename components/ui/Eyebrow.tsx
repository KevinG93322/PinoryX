import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
      {children}
    </p>
  );
}

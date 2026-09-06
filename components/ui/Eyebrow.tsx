import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold tracking-wide text-blue">
      {children}
    </p>
  );
}

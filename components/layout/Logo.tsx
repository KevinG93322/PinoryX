import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/#top"
      className={cn("group flex items-center gap-2.5 text-ink", className)}
      aria-label="PineryX home"
    >
      <span
        className="grid h-8 w-8 place-items-center rounded-sm bg-blue text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M5 4.75h4.05L12 9.2l2.95-4.45H19L13.7 12 19 19.25h-4.05L12 14.8l-2.95 4.45H5L10.3 12 5 4.75z" />
        </svg>
      </span>
      <span className="font-display text-[1.125rem] font-semibold tracking-tight">
        Pinery<span className="text-blue">X</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/#top"
      className={cn("group flex items-center gap-2.5 text-ink", className)}
      aria-label="PineryX home"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-md border border-line bg-elevated">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-pine"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.5 4.5h4.1L12 10.1 15.4 4.5h4.1L14.2 12l5.3 7.5h-4.1L12 13.9 8.6 19.5H4.5L9.8 12 4.5 4.5z" />
        </svg>
      </span>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Pinery<span className="text-pine">X</span>
      </span>
    </Link>
  );
}

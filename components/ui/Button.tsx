import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200",
        variant === "primary" &&
          "bg-blue text-white hover:bg-blue-dim",
        variant === "secondary" &&
          "border border-line-strong bg-white text-ink hover:border-blue hover:text-blue",
        variant === "ghost" && "text-muted hover:text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

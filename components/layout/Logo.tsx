import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="PineryX home"
    >
      <Image
        src="/images/logo.png"
        alt="PineryX"
        width={862}
        height={236}
        className="h-9 w-auto sm:h-10"
        priority
      />
    </Link>
  );
}

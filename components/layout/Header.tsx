"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow duration-200",
        scrolled || open ? "border-line shadow-sm" : "border-line",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo onClick={closeMenu} />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-blue",
                  active ? "text-blue" : "text-ink/80",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className={pathname === "/contact" ? "bg-blue-dim" : undefined}>
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <nav className="flex flex-col px-5 py-5 sm:px-8" aria-label="Mobile">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "border-b border-line py-4 text-base font-medium transition-colors hover:text-blue",
                    active ? "text-blue" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              href="/contact"
              onClick={closeMenu}
              className={cn("mt-6 w-full", pathname === "/contact" && "bg-blue-dim")}
            >
              Contact
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

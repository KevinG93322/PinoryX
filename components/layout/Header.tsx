"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export function Header() {
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow duration-200",
        scrolled || open ? "border-line shadow-sm" : "border-line",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-ink/80 transition-colors hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#contact">Contact</Button>
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
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-line py-4 text-base font-medium text-ink transition-colors hover:text-blue"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              href="/#contact"
              className="mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              Contact
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

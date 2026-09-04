import { footer, nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-elevated">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {footer.blurb}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-ink transition-colors hover:text-pine"
            >
              {site.email}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Tell us what you are building. We respond to serious inquiries.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">English · Multi-chain Web3 engineering</p>
        </div>
      </Container>
    </footer>
  );
}

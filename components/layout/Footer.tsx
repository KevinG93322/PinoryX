import { footer, nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-elevated">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
              {footer.blurb}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-ink">Navigate</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[15px] text-muted transition-colors hover:text-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  className="text-[15px] text-muted transition-colors hover:text-blue"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-ink">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-[15px] text-blue transition-colors hover:text-blue-dim"
            >
              {site.email}
            </a>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
              Tell us what you are building. We respond to serious inquiries.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">English · Multi-chain Web3 engineering</p>
        </div>
      </Container>
    </footer>
  );
}

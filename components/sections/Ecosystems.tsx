import { ecosystems } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Ecosystems() {
  return (
    <section className="border-y border-line bg-elevated/60">
      <Container className="py-10 sm:py-12">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
          Primary ecosystems — not exclusive ones
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {ecosystems.map((item) => (
            <div key={item.name} className="min-w-0">
              <p className="font-display text-lg font-semibold text-ink">
                {item.name}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

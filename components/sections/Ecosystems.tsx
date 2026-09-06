import { ecosystems } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Ecosystems() {
  return (
    <section className="border-y border-line bg-elevated">
      <Container className="py-14 sm:py-16">
        <p className="mb-8 text-sm font-semibold text-blue">
          Primary ecosystems — not exclusive ones
        </p>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-12">
          {ecosystems.map((item) => (
            <div key={item.name} className="min-w-0 border-t-2 border-blue/30 pt-5">
              <p className="font-display text-xl font-semibold text-ink">
                {item.name}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

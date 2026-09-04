import { ecosystems, technology } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Technology() {
  return (
    <Section id="technology" className="bg-elevated/40">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{technology.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {technology.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {technology.body}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {ecosystems.map((chain) => (
            <span
              key={chain.name}
              className="rounded-full border border-pine/30 bg-pine/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-pine"
            >
              {chain.name}
            </span>
          ))}
          <span className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            And other networks
          </span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technology.practices.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

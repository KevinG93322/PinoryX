import { solutions } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Solutions() {
  return (
    <Section id="solutions">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Systems we put into production.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Services describe how we work. Solutions describe what ships — connected infrastructure for assets, markets, governance, and tokens.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {solutions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="h-full bg-bg p-7 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
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

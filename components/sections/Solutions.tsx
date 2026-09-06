import { solutions } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Solutions() {
  return (
    <Section id="solutions" className="bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Systems we put into production.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Services describe how we work. Solutions describe what ships — connected infrastructure for assets, markets, governance, and tokens.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {solutions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="surface-card h-full bg-elevated p-7 sm:p-9">
                <p className="text-sm font-semibold text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
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

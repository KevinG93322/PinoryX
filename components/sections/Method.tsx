import { method } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Method() {
  return (
    <Section>
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A delivery method built for on-chain risk.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {method.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.05}>
              <li className="h-full rounded-2xl border border-line bg-card p-5">
                <p className="font-mono text-[11px] text-pine">{item.step}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

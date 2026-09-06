import { method } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Method() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            A delivery method built for on-chain risk.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {method.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.05}>
              <li className="surface-card h-full bg-elevated p-6">
                <p className="text-sm font-semibold text-blue">{item.step}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
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

import { why } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Why() {
  return (
    <Section className="bg-elevated">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Why PineryX</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            The standard we hold ourselves to.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {why.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="surface-card h-full bg-white p-8">
                <h3 className="font-display text-2xl font-semibold text-ink">
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

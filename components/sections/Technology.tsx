import { ecosystems, technology } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Technology() {
  return (
    <Section id="technology" className="bg-elevated">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{technology.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {technology.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {technology.body}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {ecosystems.map((chain) => (
            <span
              key={chain.name}
              className="border border-blue/25 bg-white px-4 py-2 text-sm font-medium text-blue"
            >
              {chain.name}
            </span>
          ))}
          <span className="border border-line bg-white px-4 py-2 text-sm font-medium text-muted">
            And other networks
          </span>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technology.practices.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="surface-card h-full bg-white p-7">
                <h3 className="font-display text-xl font-semibold text-ink">
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

import { capabilities } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Capabilities() {
  return (
    <Section id="services" className="bg-elevated">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Capabilities we build around.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Five product surfaces. One engineering standard. We take a system from architecture through to production infrastructure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <article className="surface-card flex h-full flex-col bg-white p-7 sm:p-8">
                <p className="text-sm font-semibold text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
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

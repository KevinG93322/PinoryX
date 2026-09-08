import { about } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {about.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {about.body}
          </p>
          <Button href="/about" className="mt-8">
            Read about PineryX
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <article className="surface-card h-full bg-elevated px-7 py-8 sm:px-8 sm:py-10">
              <p className="text-sm font-semibold text-blue">{about.mission.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {about.mission.text}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="surface-card h-full bg-elevated px-7 py-8 sm:px-8 sm:py-10">
              <p className="text-sm font-semibold text-blue">{about.vision.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {about.vision.text}
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

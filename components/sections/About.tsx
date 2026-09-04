import { about } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {about.body}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-line bg-card p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {about.mission.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {about.mission.text}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-line bg-card p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {about.vision.title}
              </p>
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

import { career } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function CareerTeaser() {
  return (
    <Section id="career" className="bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{career.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {career.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {career.body}
          </p>
          <Button href={career.cta.href} className="mt-8">
            {career.cta.label}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function CtaBand({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Section className="bg-elevated pb-24 lg:pb-28">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary ? (
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

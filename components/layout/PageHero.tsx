import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  body,
  cta,
  secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-b border-line bg-elevated">
      <Container className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{body}</p>
        {cta || secondary ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {cta ? <Button href={cta.href}>{cta.label}</Button> : null}
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

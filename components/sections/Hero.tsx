import { ArrowDownRight } from "lucide-react";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  return (
    <section
      id="top"
      className="page-grid relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="glow-orb -left-24 top-10 h-72 w-72 bg-pine/20" />
      <div className="glow-orb right-0 top-40 h-80 w-80 bg-gold/10" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <Reveal>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
              <ArrowDownRight className="h-4 w-4" />
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
              >
                <span className="h-1 w-1 rounded-full bg-pine" />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="hidden md:block">
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}

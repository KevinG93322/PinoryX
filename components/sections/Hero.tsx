import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero_1.jpg"
        alt="PineryX — blockchain products and infrastructure"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0f1728]/75 via-[#0f1728]/50 to-[#0f1728]/25"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[100svh] items-center pt-28 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-white/80">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.15] tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-[72px] lg:leading-[1.12]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:mt-7 sm:text-xl">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ul className="mt-10 flex flex-col gap-2 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {hero.chips.map((chip) => (
              <li key={chip} className="text-sm font-medium text-white/75">
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

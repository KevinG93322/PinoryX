import { capabilities } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Capabilities() {
  const [featured, ...rest] = capabilities;

  return (
    <Section id="services" className="bg-elevated/40">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Capabilities we build around.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Five product surfaces. One engineering standard. We take a system from architecture through to production infrastructure.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col justify-between rounded-2xl border border-pine/25 bg-card p-8 transition-colors hover:border-pine/50">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">
                  01
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {featured.text}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {rest.slice(0, 2).map((item, i) => (
              <Reveal key={item.id} delay={0.06 * (i + 1)}>
                <article className="h-full rounded-2xl border border-line bg-card p-6 transition-colors hover:border-pine/30">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                    0{i + 2}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.slice(2).map((item, i) => (
            <Reveal key={item.id} delay={0.04 * i}>
              <article className="h-full rounded-2xl border border-line bg-card p-6 sm:p-7 transition-colors hover:border-pine/30">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                  0{i + 4}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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

import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { about, aboutPage, method } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.body,
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-white">
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        body={aboutPage.body}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="surface-card h-full bg-elevated p-8">
              <p className="text-sm font-semibold text-blue">{about.mission.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {about.mission.text}
              </p>
            </article>
            <article className="surface-card h-full bg-elevated p-8">
              <p className="text-sm font-semibold text-blue">{about.vision.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {about.vision.text}
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="bg-elevated">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>{aboutPage.whatWeAre.title}</Eyebrow>
              <p className="text-lg leading-relaxed text-ink">
                {aboutPage.whatWeAre.text}
              </p>
            </div>
            <div>
              <Eyebrow>{aboutPage.whatWeAreNot.title}</Eyebrow>
              <p className="text-lg leading-relaxed text-ink">
                {aboutPage.whatWeAreNot.text}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A delivery method built for on-chain risk.
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {method.map((item) => (
              <li key={item.step} className="surface-card h-full bg-elevated p-6">
                <p className="text-sm font-semibold text-blue">{item.step}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        eyebrow="People"
        title="The team is on a separate page."
        body="About is the company. Team is the people. We keep them apart on purpose."
        primary={{ label: "Meet the team", href: "/team" }}
        secondary={{ label: "Contact", href: "/contact" }}
      />
    </main>
  );
}

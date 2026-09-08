import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { teamPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Team",
  description: teamPage.body,
};

export default function TeamPage() {
  return (
    <main id="main" className="bg-white">
      <PageHero
        eyebrow={teamPage.eyebrow}
        title={teamPage.title}
        body={teamPage.body}
      />

      <Section className="bg-white">
        <Container>
          <Eyebrow>Who we hire</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The crafts we are building around.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Profiles and names will appear here when people join. Until then, this is the work we staff for.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {teamPage.disciplines.map((item) => (
              <article key={item.title} className="surface-card bg-elevated p-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Join us"
        title="If you already build in this space, introduce yourself."
        body="Open roles live on Careers. General introductions go to Contact."
        primary={{ label: "View careers", href: "/careers" }}
        secondary={{ label: "Contact", href: "/contact" }}
      />
    </main>
  );
}

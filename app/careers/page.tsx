import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { career, careersPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: careersPage.body,
};

export default function CareersPage() {
  return (
    <main id="main" className="bg-white">
      <PageHero
        eyebrow={careersPage.eyebrow}
        title={careersPage.title}
        body={careersPage.body}
        cta={career.cta}
      />

      <Section className="bg-white">
        <Container>
          <Eyebrow>How we hire</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A small process, on purpose.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {careersPage.howWeHire.map((item) => (
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

      <Section className="bg-elevated">
        <Container>
          <Eyebrow>Open roles</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Nothing listed yet.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {careersPage.rolesNote}
          </p>
          <div className="mt-8 surface-card bg-white p-8">
            <p className="text-sm font-semibold text-blue">Open roles</p>
            <p className="mt-3 text-lg text-ink">There are no open positions at this time.</p>
            <p className="mt-2 text-base leading-relaxed text-muted">
              If you are already building protocol, architecture, or application systems in this space, send a short note anyway.
            </p>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Introduce yourself"
        title="A short note is enough."
        body="Tell us what you have built and what you want to work on next."
        primary={career.cta}
      />
    </main>
  );
}

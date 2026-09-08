import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { servicesPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.body,
};

export default function ServicesPage() {
  return (
    <main id="main" className="bg-white">
      <PageHero
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        body={servicesPage.body}
        cta={{ label: "Start a project", href: "/contact" }}
      />

      <Section className="bg-white">
        <Container>
          <div className="space-y-16 lg:space-y-20">
            {servicesPage.items.map((item, i) => (
              <article
                key={item.id}
                id={item.id}
                className="grid scroll-mt-28 gap-6 border-t border-line pt-12 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <p className="text-sm font-semibold text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg leading-relaxed text-muted">{item.text}</p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-base text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Tell us what you want to launch."
        body="Share a short brief. We reply by email and can help you decide chain, architecture, and delivery path."
        primary={{ label: "Contact", href: "/contact" }}
      />
    </main>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you are building. We reply by email.",
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-white">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building."
        body="Share a short brief of what you want to launch. We reply by email."
      />

      <Section className="bg-white pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-blue">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block text-2xl font-medium text-blue transition-colors hover:text-blue-dim"
              >
                {site.email}
              </a>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
                Use the form, or write directly. We respond to serious inquiries.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

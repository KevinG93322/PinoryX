import { CtaBand } from "@/components/layout/CtaBand";
import { site } from "@/content/site";

export function Contact() {
  return (
    <CtaBand
      eyebrow="Contact"
      title="Tell us what you are building."
      body={`Share a short brief. We reply at ${site.email}.`}
      primary={{ label: "Go to contact", href: "/contact" }}
    />
  );
}

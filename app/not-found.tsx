import { PageHero } from "@/components/layout/PageHero";

export default function NotFound() {
  return (
    <main id="main" className="bg-white">
      <PageHero
        eyebrow="404"
        title="This page is not here."
        body="The link may be old, or the page has not been built. You can return home or go to Contact."
        cta={{ label: "Back to home", href: "/" }}
        secondary={{ label: "Contact", href: "/contact" }}
      />
    </main>
  );
}

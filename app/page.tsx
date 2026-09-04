import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { Contact } from "@/components/sections/Contact";
import { Ecosystems } from "@/components/sections/Ecosystems";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Solutions } from "@/components/sections/Solutions";
import { Technology } from "@/components/sections/Technology";
import { Why } from "@/components/sections/Why";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Ecosystems />
      <About />
      <Capabilities />
      <Solutions />
      <Technology />
      <Method />
      <Why />
      <CareerTeaser />
      <Contact />
    </main>
  );
}

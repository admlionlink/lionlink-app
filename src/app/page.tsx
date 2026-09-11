import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Connection } from "@/components/Connection";
import { Differentiators } from "@/components/Differentiators";
import { About } from "@/components/About";
import { WhatsappCta } from "@/components/WhatsappCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Connection />
        <Differentiators />
        <About />
        <WhatsappCta
          title="Vamos conversar sobre o seu projeto?"
          body="Conte um pouco sobre o seu negócio e o que você precisa. Quem responde é quem vai construir."
        />
      </main>
      <Footer />
    </>
  );
}

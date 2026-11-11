import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatsAppSection } from "@/components/WhatsAppSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <WhatsAppSection />
      </main>
      <Footer />
    </div>
  );
}

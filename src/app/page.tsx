import { LiveEcosystemBar } from "@/components/live-ecosystem-bar";
import { LiveHubCursors } from "@/components/live-hub-cursors";
import { AboutSection } from "@/components/about-section";
import { ConciergeChat } from "@/components/concierge-chat";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { JourneySection } from "@/components/journey-section";
import { ProjectMatcher } from "@/components/project-matcher";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Saltar al contenido
      </a>
      <main id="main">
        <Hero />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <ProjectMatcher />
        <SkillsSection />
        <ContactSection />
      </main>
      <LiveHubCursors />
      <LiveEcosystemBar />
      <ConciergeChat />
      <Footer />
    </>
  );
}

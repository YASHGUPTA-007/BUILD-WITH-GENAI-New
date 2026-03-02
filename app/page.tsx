import SiteNav          from "./components/SiteNav";
import HeroSection       from "./components/HeroSection";
import VisionSection     from "./components/VisionSection";
import ProgramSection    from "./components/ProgramSection";
import ProjectsSection   from "./components/ProjectsSection";
import OutcomesSection   from "./components/OutcomesSection";
import EnrollmentSection from "./components/EnrollmentSection";
import TrustSection      from "./components/TrustSection";
import CTASection        from "./components/CTASection";
import SiteFooter        from "./components/SiteFooter";

export default function Home() {
  return (
    <main style={{ background: "#F0EBE1" }}>
      <SiteNav />
      <HeroSection />
      <VisionSection />
      <ProgramSection />
      <ProjectsSection />
      <OutcomesSection />
      <EnrollmentSection />
      <TrustSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-8 md:py-16">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      {/* <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer /> */}
    </main>
  );
}

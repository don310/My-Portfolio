import HomeSection from "../components/Sections/HomeSection";
import AboutSection from "../components/Sections/AboutSection";
import EducationSection from "../components/Sections/EducationSection";
import PortfolioSection from "../components/Sections/PortfolioSection";
import ContactSection from "../components/Sections/ContactSection";
import SkillSection from "../components/Sections/SkillSection"; // Import SkillSection
import ExperiencesSection from "../components/Sections/ExperiencesSection"; // Import ExperiencesSection

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <ExperiencesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

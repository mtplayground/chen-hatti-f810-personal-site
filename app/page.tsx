import {
  AboutSection,
  BlogsSection,
  EducationAwardsSection,
  ExperienceTeachingSection,
  HeroSection,
  NewsTimelineSection,
  SelectedPublicationsSection,
  ServicesSection
} from "../components/sections";

export default function Home() {
  return (
    <main className="space-y-section">
      <HeroSection />
      <AboutSection />
      <NewsTimelineSection />
      <EducationAwardsSection />
      <SelectedPublicationsSection />
      <BlogsSection />
      <ExperienceTeachingSection />
      <ServicesSection />
    </main>
  );
}

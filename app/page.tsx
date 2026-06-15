import {
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
      <NewsTimelineSection />
      <EducationAwardsSection />
      <SelectedPublicationsSection />
      <ExperienceTeachingSection />
      <ServicesSection />
      <BlogsSection />
    </main>
  );
}

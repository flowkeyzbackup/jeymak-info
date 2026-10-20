import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import AboutCTA from "../components/about/AboutCTA"
import WhyChooseUs from "../components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs/>
      <AboutCTA />
    </main>
  );
}
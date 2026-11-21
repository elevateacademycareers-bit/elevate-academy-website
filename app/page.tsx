import { Hero } from "@/components/sections/Hero";
import { AchievementSlider } from "@/components/sections/AchievementSlider";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { BusinessOpportunity } from "@/components/sections/BusinessOpportunity";
import { AdviserSection } from "@/components/sections/AdviserSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { GallerySection } from "@/components/sections/GallerySection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AchievementSlider />
      <AboutSection />
      <SolutionsSection />
      <BusinessOpportunity />
      <AdviserSection />
      <TestimonialSlider />
      <GallerySection limit={6} />
      <AppointmentSection />
      <ContactSection />
    </>
  );
}

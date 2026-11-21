import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { AdviserSection } from "@/components/sections/AdviserSection";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export const metadata = pageMeta("Meet Our Advisers", "Meet the licensed professionals behind Team Elevate.", "/advisers");

export default function AdvisersPage() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="Meet the People Behind Team Elevate." intro="Get to know the licensed professionals who serve our clients and support our agency." />
      <AdviserSection grid />
      <AppointmentSection />
    </>
  );
}

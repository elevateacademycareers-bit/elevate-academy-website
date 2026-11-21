import { pageMeta } from "@/lib/seo";
import { AppointmentSection } from "@/components/sections/AppointmentSection";

export const metadata = pageMeta("Book an Appointment", "Schedule a conversation with a Team Elevate team member at a time that works for you.", "/book-appointment");

export default function BookPage() {
  return (
    <div className="pt-20">
      <AppointmentSection headingLevel="h1" />
    </div>
  );
}

import { pageMeta } from "@/lib/seo";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = pageMeta("Contact Us", "Get in touch with Team Elevate about financial solutions or the business opportunity.", "/contact");

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection headingLevel="h1" />
    </div>
  );
}

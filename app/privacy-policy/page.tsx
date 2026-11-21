import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = pageMeta("Privacy Policy", "How Team Elevate collects, uses and protects personal information.", "/privacy-policy");

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="TEMPLATE — must be reviewed and finalized by legal/compliance before launch." />
      <section className="section pt-12">
        <div className="container-x prose-legal max-w-3xl">
          <p><em>Last updated: PLACEHOLDER date</em></p>
          <p>
            {site.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy and handles personal information in accordance with the Personal Information
            Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws, including Quebec&apos;s Law 25 where it applies.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Information you provide through our contact form: name, email address, phone number (optional), subject and message.</li>
            <li>Information you provide when booking through Calendly, which is processed by Calendly under its own privacy policy.</li>
            <li>Basic technical information such as browser type and pages visited, if analytics are enabled. PLACEHOLDER — list any analytics tools used.</li>
          </ul>
          <p>Please do not submit sensitive information — such as account numbers, Social Insurance Number or health information — through this website.</p>
          <h2>How we use information</h2>
          <ul>
            <li>To respond to your enquiry and schedule appointments.</li>
            <li>To send electronic messages only where you have given consent, in compliance with Canada&apos;s Anti-Spam Legislation (CASL). Every marketing email includes an unsubscribe option, honoured within 10 business days.</li>
            <li>To meet legal and regulatory obligations.</li>
          </ul>
          <h2>Sharing</h2>
          <p>We do not sell personal information. We may share it with service providers that help us operate (for example, scheduling and email providers), with {site.affiliation.name} and product carriers where needed to provide services you request, or where required by law. Some providers may store data outside Canada.</p>
          <h2>Retention and security</h2>
          <p>We keep personal information only as long as needed for the purposes described or as required by law, and use reasonable safeguards to protect it.</p>
          <h2>Your rights</h2>
          <p>You may request access to or correction of your personal information, or withdraw consent, by contacting our Privacy Officer.</p>
          <h2>Contact</h2>
          <p>Privacy Officer: PLACEHOLDER name · {site.contact.email}</p>
        </div>
      </section>
    </>
  );
}

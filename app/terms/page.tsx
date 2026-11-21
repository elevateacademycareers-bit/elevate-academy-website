import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = pageMeta("Terms and Conditions", `Terms governing use of the ${site.name} website.`, "/terms");

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" intro="TEMPLATE — must be reviewed and finalized by legal/compliance before launch." />
      <section className="section pt-12">
        <div className="container-x prose-legal max-w-3xl">
          <p><em>Last updated: PLACEHOLDER date</em></p>
          <h2>Use of this website</h2>
          <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
          <h2>Information only — not advice</h2>
          <p>Content on this website is general and educational. It is not financial, investment, tax, insurance or legal advice and is not an offer or solicitation to buy any product in any jurisdiction where such an offer would be unlawful. Speak with an appropriately licensed professional about your circumstances.</p>
          <h2>Licensing</h2>
          <p>{site.regulatoryDisclosure}</p>
          <h2>Business opportunity and earnings</h2>
          <p>Any description of compensation is illustrative and is not a promise or guarantee of income. Compensation is earned from the sale of suitable products to clients and is not paid for recruitment. Individual results vary.</p>
          <h2>Testimonials</h2>
          <p>Testimonials reflect individual experiences shared with permission and are not indicative of typical results.</p>
          <h2>Third-party links and services</h2>
          <p>We may link to or embed third-party services such as Calendly. We are not responsible for their content or practices.</p>
          <h2>Intellectual property</h2>
          <p>Logos, text and images on this site belong to {site.name} or their respective owners and may not be used without permission.</p>
          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, {site.name} is not liable for losses arising from use of this website.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the Province of PLACEHOLDER and the federal laws of Canada applicable therein.</p>
        </div>
      </section>
    </>
  );
}

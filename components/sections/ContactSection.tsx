import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { SiteImage } from "@/components/ui/SiteImage";

export function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  const rows = [
    { icon: Mail, label: "Email", value: site.contact.email, href: site.contact.emailHref },
    { icon: Phone, label: "Phone", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: Clock, label: "Hours", value: site.contact.hours },
    ...(site.contact.address ? [{ icon: MapPin, label: "Office", value: site.contact.address }] : []),
  ];
  return (
    <section className="section bg-ink-2/60" aria-labelledby="contact-title">
      <div className="container-x grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="eyebrow mb-4">Contact Us</p>
          <H id="contact-title" className="text-3xl md:text-5xl">We&apos;d Love to Hear From You.</H>
          <div className="gold-rule mt-6 w-24" aria-hidden />
          <p className="mt-6 text-mist">Questions about our services or the business opportunity? Send us a message and a team member will get back to you.</p>
          <ul className="mt-8 space-y-5">
            {rows.map(({ icon: I, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-gold"><I className="h-4 w-4" aria-hidden /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mist">{label}</p>
                  {href ? <a href={href} className="text-cream hover:text-gold-light">{value}</a> : <p className="text-cream">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-8" />
        </div>
        <div className="lg:col-span-3">
          <div className="card overflow-hidden">
            <div className="relative aspect-[16/8]">
              <SiteImage src="/images/site/contact.webp" alt="" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 md:p-10">
              <h2 className="text-2xl">Contact Team Elevate</h2>
              {site.contact.emailHref ? (
                <>
                  <p className="mt-3 text-mist">Please leave account numbers, Social Insurance Numbers and health details out of your email.</p>
                  <ButtonLink href={site.contact.emailHref} className="mt-6">
                    <Mail className="h-4 w-4" aria-hidden /> Email us
                  </ButtonLink>
                </>
              ) : (
                <p className="mt-3 text-mist">Our contact email is coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, nav } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo size={56} />
          <p className="mt-5 max-w-sm text-sm text-mist">
            {site.mission} Team Elevate is an agency associated with {site.affiliation.name}.
          </p>
          <SocialLinks className="mt-6" />
        </div>
        <div className="lg:col-span-2">
          <h2 className="eyebrow mb-4 font-sans">Explore</h2>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link className="text-mist hover:text-gold-light" href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="eyebrow mb-4 font-sans">Financial Solutions</h2>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link className="text-mist hover:text-gold-light" href={`/solutions#${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
          <h2 className="eyebrow mb-4 mt-8 font-sans">Business Opportunity</h2>
          <ul className="space-y-2 text-sm">
            <li><Link className="text-mist hover:text-gold-light" href="/business-opportunity">The agency model</Link></li>
            <li><Link className="text-mist hover:text-gold-light" href="/business-opportunity#compensation">How compensation works</Link></li>
            <li><Link className="text-mist hover:text-gold-light" href="/business-opportunity#legacy">Ownership & legacy</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="eyebrow mb-4 font-sans">Contact</h2>
          <ul className="space-y-3 text-sm text-mist">
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              {site.contact.emailHref ? <a href={site.contact.emailHref} className="hover:text-gold-light">{site.contact.email}</a> : site.contact.email}
            </li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              {site.contact.phoneHref ? <a href={site.contact.phoneHref} className="hover:text-gold-light">{site.contact.phone}</a> : site.contact.phone}
            </li>
            {site.contact.address && (
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden />{site.contact.address}</li>
            )}
          </ul>
        </div>
      </div>
      <div className="container-x border-t border-line py-8 text-xs leading-relaxed text-mist/90">
        <p><strong className="text-gold-light">Important information.</strong> {site.regulatoryDisclosure}</p>
        <p className="mt-3">
          Information on this website is general and educational in nature and is not personalized financial, tax or legal advice. Product
          suitability depends on your individual circumstances. Any compensation figures shown are illustrative and are not a guarantee of
          income. Insurance agents are generally compensated by commission paid by product carriers; details are available on request.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex gap-5">
            <li><Link href="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold-light">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

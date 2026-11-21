import { SiteImage } from "@/components/ui/SiteImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Mail, Phone } from "lucide-react";
import { advisers } from "@/content/people";
import { pageMeta } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export function generateStaticParams() {
  return advisers.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = advisers.find((x) => x.slug === slug);
  if (!a) return {};
  return { ...pageMeta(a.name, a.shortBio, `/advisers/${a.slug}`), robots: a.placeholder ? { index: false } : undefined };
}

export default async function AdviserPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = advisers.find((x) => x.slug === slug);
  if (!a) notFound();

  const facts = [
    ["Title", a.title],
    ["Credentials & licences", a.credentials.join(", ")],
    ["Licensed in", a.licensedIn.join(", ")],
    ["Areas of expertise", a.expertise.join(", ")],
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container-x">
        <Link href="/advisers" className="inline-flex items-center gap-2 text-sm text-mist hover:text-gold-light"><ArrowLeft className="h-4 w-4" aria-hidden /> All advisers</Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
              <SiteImage src={a.photo || "/images/advisers/office-stock.webp"} alt={a.photo ? `Portrait of ${a.name}` : ""} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-3">
            {a.placeholder && <span className="placeholder-tag mb-4">Placeholder profile</span>}
            <h1 className="text-4xl md:text-6xl">{a.name}</h1>
            <p className="mt-3 text-lg text-gold">{a.title}</p>
            <div className="gold-rule mt-6 w-24" aria-hidden />
            <div className="mt-8 space-y-4 text-mist">{a.bio.map((p, i) => <p key={i}>{p}</p>)}</div>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k} className="bg-card p-5">
                  <dt className="text-xs uppercase tracking-wider text-gold-light">{k}</dt>
                  <dd className="mt-1 text-sm text-cream">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/book-appointment"><CalendarDays className="h-4 w-4" aria-hidden /> Book an Appointment</ButtonLink>
              {a.email && <ButtonLink href={`mailto:${a.email}`} variant="outline"><Mail className="h-4 w-4" aria-hidden /> Email</ButtonLink>}
              {a.phone && <ButtonLink href={`tel:${a.phone}`} variant="outline"><Phone className="h-4 w-4" aria-hidden /> Call</ButtonLink>}
            </div>
            {a.placeholder && <PlaceholderNote>Replace this profile with verified details in <code>content/people.ts</code>. Never publish credentials that haven&apos;t been verified.</PlaceholderNote>}
          </div>
        </div>
      </div>
    </section>
  );
}

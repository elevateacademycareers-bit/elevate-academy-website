import { SiteImage } from "@/components/ui/SiteImage";
import { ArrowRight, Compass, Eye, HeartHandshake, Target } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";

// Mission and Philosophy come from the presentation. Vision and Values are DRAFT wording — confirm with leadership.
export const pillars: { icon: typeof Target; title: string; text: string; draft?: boolean }[] = [
  { icon: Target, title: "Our Mission", text: site.mission },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Families across Canada who feel confident about their finances — protected today and building wealth they can pass on.",
    draft: true,
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Integrity, education, long-term relationships and putting each family's needs ahead of any single product.",
    draft: true,
  },
  {
    icon: Compass,
    title: "Our Philosophy",
    text: "Personalized guidance — not just products — with annual reviews and support through every stage of life.",
  },
];

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-last lg:order-first">
          <div className="absolute -inset-4 rounded-3xl border border-line" aria-hidden />
          <div className="relative aspect-[6/7] overflow-hidden rounded-2xl">
            <SiteImage src="/images/site/about.webp" alt="Placeholder for Team Elevate team photography" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <span className="placeholder-tag absolute left-4 top-4">Replace with team photo</span>
        </div>
        <div>
          <p className="eyebrow mb-4">About Team Elevate</p>
          <h2 id="about-title" className="text-3xl md:text-5xl">More Than Financial Services. A Vision for Generations.</h2>
          <div className="gold-rule mt-6 w-24" aria-hidden />
          <blockquote className="mt-8 border-l-2 border-gold pl-5 text-xl italic text-gold-light md:text-2xl">
            “{site.mission}”
          </blockquote>
          <p className="mt-6 text-mist">
            Many families face rising expenses, debt, insufficient savings and the worry of what happens if illness or job loss strikes.
            Team Elevate exists to help. Working with {site.affiliation.name}, our licensed agents bring banking, insurance and investment
            solutions under one roof — and the time to understand what each family actually needs.
          </p>
          {!full && (
            <ButtonLink href="/about" variant="ghost" className="mt-6">
              More about us <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          )}
        </div>
      </div>
      <div className="container-x mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: I, title, text, draft }) => (
          <div key={title} className="card p-6 transition hover:border-gold/50">
            <div className="flex items-center justify-between">
              <I className="h-6 w-6 text-gold" aria-hidden />
              {draft && <span className="placeholder-tag">Draft</span>}
            </div>
            <h3 className="mt-4 text-xl">{title}</h3>
            <p className="mt-2 text-sm text-mist">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

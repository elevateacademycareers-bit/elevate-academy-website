import { ArrowRight, Building2, Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { clientChallenges, clientValue } from "@/content/services";
import { experiorSummary } from "@/content/opportunity";
import { PageHero } from "@/components/ui/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = pageMeta(
  "About Us",
  "Team Elevate's mission is building financial foundations for families to empower them today and leave a legacy for tomorrow.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A Vision for Generations." intro={site.mission} />
      <AboutSection full />

      <section className="section bg-ink-2/60" aria-labelledby="help-title">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Why we exist</p>
            <h2 id="help-title" className="text-3xl md:text-4xl">We Are Here to Help.</h2>
            <p className="mt-5 text-mist">Many of the families we meet are facing at least one of these challenges:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {clientChallenges.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-cream"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />{c}</li>
              ))}
            </ul>
          </div>
          <div className="card p-8">
            <h3 className="text-2xl">How we&apos;re different</h3>
            <ul className="mt-6 space-y-4">
              {clientValue.map((c) => (
                <li key={c} className="flex gap-3 text-mist"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />{c}</li>
              ))}
            </ul>
            <ButtonLink href="/solutions" variant="ghost" className="mt-6">See our solutions <ArrowRight className="h-4 w-4" aria-hidden /></ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="exp-title">
        <div className="container-x">
          <SectionHeading eyebrow="Our affiliation" title={`Powered by ${site.affiliation.name}`} intro="Team Elevate agents are contracted through Experior Financial Group, a managing general agency. In Experior's own words:" />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {experiorSummary.map((s) => (
              <li key={s} className="card flex gap-4 p-5 text-sm text-mist"><Building2 className="h-5 w-5 shrink-0 text-gold" aria-hidden />{s}</li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-mist">Statements about Experior Financial Group are summarized from Experior materials. PLACEHOLDER — verify they are current before publishing.</p>
        </div>
      </section>
    </>
  );
}

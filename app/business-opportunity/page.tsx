import { site } from "@/content/site";
import { ArrowRight, Award, BadgeDollarSign, CalendarDays, Check, GitBranch, Layers, Repeat, Users } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import {
  cashflowQuadrant,
  contractLevels,
  earningsDisclosure,
  exampleFYC,
  generationalOverrides,
  legacy,
  pathway,
  personalIncomeExamples,
  seniorLevels,
  startingConcerns,
  waysPaid,
} from "@/content/opportunity";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = pageMeta(
  "Business Opportunity",
  `Become a licensed financial professional with ${site.name}. Learn about training, the agency model, how compensation works and business ownership.`,
  "/business-opportunity"
);

const money = (n: number) => n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
const wayIcons = [BadgeDollarSign, Users, GitBranch, Award, Repeat, Layers];

function Disclosure({ className = "" }: { className?: string }) {
  return (
    <aside className={`rounded-xl border border-gold/40 bg-gold/5 p-5 text-xs leading-relaxed text-mist ${className}`} aria-label="Income disclosure">
      <p className="mb-1 font-semibold uppercase tracking-wider text-gold-light">Income disclosure</p>
      {earningsDisclosure}
    </aside>
  );
}

export default function OpportunityPage() {
  // Team override example (slide 10): FA writes $1,200 AP; each upline earns the contract-level difference.
  const ap = 1200;
  const overrideChain = contractLevels.map((lvl, i) => ({
    ...lvl,
    diff: i === 0 ? lvl.rate : lvl.rate - contractLevels[i - 1].rate,
  }));

  return (
    <>
      <PageHero
        eyebrow="Business Opportunity"
        title="Build Your Business. Grow Your Impact."
        intro="Become a licensed financial professional, serve families in your community and, over time, build an agency of your own — with training, mentorship and flexibility."
      />

      {/* Cashflow quadrant */}
      <section className="section" aria-labelledby="quad-title">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">The mindset</p>
            <h2 id="quad-title" className="text-3xl md:text-4xl">From Owning a Job to Owning an Agency</h2>
            <p className="mt-5 text-mist">
              The cashflow quadrant describes four ways people earn. {site.name}&apos;s model is designed to help licensed agents move from the
              left side — trading time for income — toward building an agency and, eventually, having money work for them.
            </p>
            <p className="mt-4 text-mist">The path: <strong className="text-cream">government licence → agent → agency</strong>.</p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {cashflowQuadrant.map((q) => (
              <div key={q.letter} className={`p-6 md:p-8 ${q.letter === "B" || q.letter === "I" ? "bg-card" : "bg-ink"}`}>
                <p className={`text-5xl ${q.letter === "B" || q.letter === "I" ? "gold-text" : "text-mist"}`}>{q.letter}</p>
                <p className="mt-3 text-sm font-semibold text-cream">{q.label}</p>
                <p className="text-sm text-mist">{q.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="section bg-ink-2/60" aria-label="Your pathway">
        <div className="container-x">
          <SectionHeading eyebrow="Your pathway" title="How the Agency Model Works" />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pathway.map((p, i) => (
              <li key={p.title} className="card p-6">
                <span className="text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Concerns */}
      <section className="section" aria-label="Getting started">
        <div className="container-x">
          <SectionHeading eyebrow="Getting started" title="Common Questions When Starting a Business" intro="What it takes to begin — including the costs." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {startingConcerns.map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="text-xl text-gold-light">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-mist"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-mist">
            Additional costs may include the licensing course and exam, provincial licence fees and errors & omissions insurance. PLACEHOLDER — confirm full, current cost list.
          </p>
        </div>
      </section>

      {/* Compensation */}
      <section id="compensation" className="section bg-ink-2/60" aria-label="How compensation works">
        <div className="container-x">
          <SectionHeading
            eyebrow="Education"
            title="How Compensation Works"
            intro="Agents are paid by product carriers when they place suitable products for clients. Here are the six ways compensation can be earned, explained with the illustrative examples from our presentation."
          />
          <Disclosure className="mx-auto mt-10 max-w-4xl" />

          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {waysPaid.map((w, i) => {
              const I = wayIcons[i];
              return (
                <li key={w.title} className="card p-6">
                  <I className="h-6 w-6 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl">{w.title}</h3>
                  <p className="mt-2 text-sm text-mist">{w.text}</p>
                </li>
              );
            })}
          </ul>

          {/* Contract levels */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl">Contract Levels</h3>
              <p className="mt-3 text-sm text-mist">Positions in Experior and their contract level, expressed as a percentage of annual premium on the illustrative product.</p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-line">
                <table className="w-full min-w-[420px] text-sm">
                  <caption className="sr-only">Experior contract levels</caption>
                  <thead className="bg-card text-left text-xs uppercase tracking-wider text-gold-light">
                    <tr><th scope="col" className="px-4 py-3">Level</th><th scope="col" className="px-4 py-3">Position</th><th scope="col" className="px-4 py-3 text-right">Contract</th></tr>
                  </thead>
                  <tbody>
                    {[...contractLevels].reverse().map((l) => (
                      <tr key={l.code} className="border-t border-line">
                        <td className="px-4 py-3 font-semibold text-gold">{l.code}</td>
                        <td className="px-4 py-3 text-cream">{l.title}</td>
                        <td className="px-4 py-3 text-right text-cream">{l.rate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-mist">
                Leadership levels above Executive Director: {seniorLevels.map((s) => `${s.title} (${s.code})`).join(", ")}. Promotion criteria are set by Experior.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl">Personal Income — Example</h3>
              <p className="mt-3 text-sm text-mist">Compensation shown as a percentage of the annual premium (AP) on life and critical illness insurance.</p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-line">
                <table className="w-full min-w-[420px] text-sm">
                  <caption className="sr-only">Illustrative personal income by contract level</caption>
                  <thead className="bg-card text-left text-xs uppercase tracking-wider text-gold-light">
                    <tr>
                      <th scope="col" className="px-4 py-3">Level</th>
                      {personalIncomeExamples.map((e) => (
                        <th key={e.label} scope="col" className="px-4 py-3 text-right">
                          {e.label}<span className="block font-normal normal-case tracking-normal text-mist">AP {money(e.annualPremium)}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {contractLevels.map((l) => (
                      <tr key={l.code} className="border-t border-line">
                        <td className="px-4 py-3"><span className="font-semibold text-gold">{l.code}</span> <span className="text-mist">{l.rate}%</span></td>
                        {personalIncomeExamples.map((e) => (
                          <td key={e.label} className="px-4 py-3 text-right text-cream">{money((e.annualPremium * l.rate) / 100)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-4 space-y-1 text-xs text-mist">
                {personalIncomeExamples.map((e) => <li key={e.label}><strong className="text-cream">{e.label}:</strong> {e.description}</li>)}
              </ul>
            </div>
          </div>

          {/* Overrides */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl">Team Overrides</h3>
              <p className="mt-3 text-sm text-mist">
                Leaders earn the difference between their contract level and that of the agent who placed the business. Example: a Financial
                Associate places a policy with {money(ap)} annual premium.
              </p>
              <ol className="mt-6 space-y-3">
                {[...overrideChain].reverse().map((l, i) => (
                  <li key={l.code} className="flex items-center justify-between rounded-lg border border-line bg-ink/60 px-4 py-3 text-sm">
                    <span><span className="font-semibold text-gold">{l.code}</span> <span className="text-mist">({l.rate}%)</span></span>
                    <span className="text-mist">{i === overrideChain.length - 1 ? "Personal income" : `Override ${l.diff}%`}</span>
                    <span className="font-semibold text-cream">{money((ap * l.diff) / 100)}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-mist">Per the presentation, a 10% override may still apply when contract levels are the same, subject to Experior rules.</p>
            </div>
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl">Generational Overrides</h3>
              <p className="mt-3 text-sm text-mist">
                Calculated as a percentage of first-year commission (FYC). Example: FYC = {money(exampleFYC)} on a term policy with {money(ap)} annual premium.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-line">
                <table className="w-full text-sm">
                  <caption className="sr-only">Generational override example</caption>
                  <thead className="bg-ink/60 text-left text-xs uppercase tracking-wider text-gold-light">
                    <tr><th scope="col" className="px-4 py-2.5">Generation</th><th scope="col" className="px-4 py-2.5 text-right">% of FYC</th><th scope="col" className="px-4 py-2.5 text-right">Example</th></tr>
                  </thead>
                  <tbody>
                    {generationalOverrides.map((g) => (
                      <tr key={g.generation} className="border-t border-line">
                        <td className="px-4 py-2.5 text-cream">{g.generation}</td>
                        <td className="px-4 py-2.5 text-right text-mist">{g.percent}%</td>
                        <td className="px-4 py-2.5 text-right text-cream">{money((exampleFYC * g.percent) / 100)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-mist">Generational overrides apply only to qualifying leaders under Experior&apos;s criteria.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="text-xl">Agency Bonus</h3>
              <p className="mt-2 text-sm text-mist">Qualification is based on overall agency performance — the volume of settled insurance premium and the number of licensed partners — with requirements at each level.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl">Renewal &amp; Trail Income</h3>
              <p className="mt-2 text-sm text-mist">Renewal income can recur yearly while a policy stays active. Trail income is paid annually or monthly while an investment stays in place. Both depend on clients keeping their policies and investments.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl">Carrier Bonus</h3>
              <p className="mt-2 text-sm text-mist">Some carriers pay additional bonuses on enhanced net first-year commissions and consecutive years of loyalty, according to their own schedules, which can change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="section" aria-label="Ownership and legacy">
        <div className="container-x">
          <SectionHeading eyebrow="The Experior Financial Group legacy" title="Ownership That Can Outlast You" />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl text-gold-light">Ownership of Business</h3>
              <ul className="mt-4 space-y-3">{legacy.ownershipOfBusiness.map((t) => <li key={t} className="flex gap-3 text-sm text-mist"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />{t}</li>)}</ul>
            </div>
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl text-gold-light">Right to Transfer Program</h3>
              <ul className="mt-4 space-y-3">{legacy.rightToTransfer.map((t) => <li key={t} className="flex gap-3 text-sm text-mist"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />{t}</li>)}</ul>
            </div>
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl text-gold-light">Ownership of Experior</h3>
              <p className="mt-4 text-sm text-mist">{legacy.ownershipOfExperior}</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-mist">Program terms, eligibility and availability are determined by Experior Financial Group and may change.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0" aria-labelledby="opp-cta">
        <div className="container-x">
          <div className="card relative overflow-hidden p-8 text-center md:p-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(201,164,92,0.18),transparent_70%)]" aria-hidden />
            <p className="eyebrow">This is not a race; it&apos;s a marathon</p>
            <h2 id="opp-cta" className="mt-4 text-3xl md:text-5xl">Explore the Opportunity</h2>
            <p className="mx-auto mt-5 max-w-2xl text-mist">Consistency is key. Book a conversation to learn about licensing, training and whether this path is right for you.</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/book-appointment"><CalendarDays className="h-4 w-4" aria-hidden /> Book a Conversation</ButtonLink>
              <ButtonLink href="/contact" variant="outline">Ask a Question <ArrowRight className="h-4 w-4" aria-hidden /></ButtonLink>
            </div>
          </div>
          <Disclosure className="mx-auto mt-10 max-w-4xl" />
        </div>
      </section>
    </>
  );
}

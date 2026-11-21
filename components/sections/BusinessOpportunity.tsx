import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { pathway } from "@/content/opportunity";
import { ButtonLink } from "@/components/ui/Button";

export function BusinessOpportunity() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="opp-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgba(201,164,92,0.12),transparent_70%)]" aria-hidden />
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Business Opportunity</p>
          <h2 id="opp-title" className="text-3xl md:text-5xl">Build Your Business. Grow Your Impact.</h2>
          <div className="gold-rule mt-6 w-24" aria-hidden />
          <p className="mt-6 text-mist">
            Move from owning a job to building an agency. Become a licensed financial professional, serve families in your community and,
            over time, develop and mentor a team — with training, flexible hours and a path to business ownership and succession.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {pathway.map((p) => (
              <li key={p.title} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="text-cream">{p.title}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/business-opportunity" className="mt-10 w-full sm:w-auto">
            Explore the Opportunity <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <p className="mt-6 text-xs text-mist">
            Income is earned from serving clients with suitable products, not from recruitment. Results vary and are not guaranteed.
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            <Image src="/images/site/opportunity.webp" alt="Placeholder for a training and mentorship photo" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="card absolute -bottom-8 left-4 right-4 grid grid-cols-3 divide-x divide-line p-5 text-center sm:left-auto sm:right-6 sm:w-96">
            {[
              ["6", "ways to earn"],
              ["Part / Full", "time options"],
              ["$0", "registration fee"],
            ].map(([k, v]) => (
              <div key={v} className="px-2">
                <p className="font-serif text-xl text-gold-light">{k}</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-mist">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

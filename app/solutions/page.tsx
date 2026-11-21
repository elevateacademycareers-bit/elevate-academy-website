import { SiteImage } from "@/components/ui/SiteImage";
import { CalendarDays, Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { services, clientValue } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = pageMeta(
  "Financial Solutions",
  "Investment services, insurance solutions and other financial services under one roof, offered by licensed representatives.",
  "/solutions"
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Solutions"
        title="Services Under One Roof."
        intro="Investments, insurance and other financial services — with personalized guidance and an annual review, not just products."
      />
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={i % 2 ? "section bg-ink-2/60" : "section"} aria-labelledby={`${s.slug}-title`}>
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={i % 2 ? "lg:order-last" : ""}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line">
                <SiteImage src={s.image} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold"><Icon name={s.icon} className="h-5 w-5" /></span>
              <h2 id={`${s.slug}-title`} className="mt-5 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-mist">{s.summary}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-cream"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />{it}</li>
                ))}
              </ul>
              {s.note && <p className="mt-6 border-l-2 border-gold/50 pl-4 text-xs text-mist">{s.note}</p>}
            </div>
          </div>
        </section>
      ))}
      <section className="section" aria-labelledby="approach-title">
        <div className="container-x">
          <div className="card mx-auto max-w-4xl p-8 text-center md:p-14">
            <h2 id="approach-title" className="text-3xl md:text-4xl">Guidance Built Around You</h2>
            <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
              {clientValue.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-mist"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />{c}</li>
              ))}
            </ul>
            <ButtonLink href="/book-appointment" className="mt-10"><CalendarDays className="h-4 w-4" aria-hidden /> Book an Appointment</ButtonLink>
            <p className="mt-6 text-xs text-mist">Product availability varies by province and by each representative&apos;s licensing. Recommendations are based on a needs analysis.</p>
          </div>
        </div>
      </section>
    </>
  );
}

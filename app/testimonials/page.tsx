import { pageMeta } from "@/lib/seo";
import { testimonials } from "@/content/people";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { Quote } from "lucide-react";

export const metadata = pageMeta("Testimonials", "Stories of trust from people who work with Team Elevate.", "/testimonials");

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Stories of Trust. Relationships That Matter." />
      <TestimonialSlider />
      <section className="section bg-ink-2/60 pt-16" aria-label="All testimonials">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="card relative p-7">
              <Quote className="h-6 w-6 text-gold" aria-hidden />
              {t.placeholder && <span className="placeholder-tag absolute right-5 top-5">Placeholder</span>}
              <blockquote className="mt-4 text-cream">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm"><span className="font-semibold text-gold-light">{t.name}</span>{t.context && <span className="block text-mist">{t.context}</span>}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

import { SiteImage } from "@/components/ui/SiteImage";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/people";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";

export function TestimonialSlider() {
  return (
    <section className="section" aria-label="Client testimonials">
      <div className="container-x">
        <SectionHeading eyebrow="Testimonials" title="Stories of Trust. Relationships That Matter." />
        <div className="mx-auto mt-14 max-w-4xl">
          <Carousel label="Testimonials" autoplay={7000}>
            {testimonials.map((t, i) => (
              <figure key={i} className="card relative px-6 py-12 text-center md:px-16 md:py-16">
                <Quote className="mx-auto h-10 w-10 text-gold/70" aria-hidden />
                {t.placeholder && <span className="placeholder-tag absolute right-5 top-5">Placeholder</span>}
                <blockquote className="mt-6 text-xl leading-relaxed text-cream md:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  {t.photo && <SiteImage src={t.photo} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />}
                  <div className="text-left">
                    <p className="font-semibold text-gold-light">{t.name}</p>
                    {t.context && <p className="text-sm text-mist">{t.context}</p>}
                  </div>
                </figcaption>
              </figure>
            ))}
          </Carousel>
          <p className="mt-6 text-center text-xs text-mist">
            Testimonials reflect individual experiences, are shared with permission and are not indicative of future results or typical outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

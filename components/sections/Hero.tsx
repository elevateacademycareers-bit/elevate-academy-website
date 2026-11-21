import { SiteImage } from "@/components/ui/SiteImage";
import { ArrowRight, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20" aria-labelledby="hero-title">
      {/* Replace /images/site/hero.webp with approved photography (skyline / team). Only this image is preloaded. */}
      <SiteImage
        src="/images/site/hero.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(201,164,92,0.18),transparent_70%)]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden />

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 animate-rise text-lg sm:text-2xl">{site.name}</p>
          <h1 id="hero-title" className="text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl animate-lift">
            Build a Stronger Financial Future. <span className="gold-text italic">Together.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mist md:text-xl animate-rise [animation-delay:240ms]">
            Guidance for today. Foundations for tomorrow.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-rise [animation-delay:360ms]">
            <ButtonLink href="/about" variant="outline" className="w-full sm:w-auto px-7 py-4">
              Explore Our Approach <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/book-appointment" className="w-full sm:w-auto px-7 py-4">
              <CalendarDays className="h-4 w-4" aria-hidden /> Book an Appointment
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

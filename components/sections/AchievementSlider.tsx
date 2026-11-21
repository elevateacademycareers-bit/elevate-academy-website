import { SiteImage } from "@/components/ui/SiteImage";
import { getMedia } from "@/lib/media";
import { Carousel } from "@/components/ui/Carousel";

/** Posters are read from /public/images/posters — drop approved files in to update. */
export function AchievementSlider() {
  const posters = getMedia("posters");
  if (!posters.length) return null;
  return (
    <section className="relative -mt-10 pb-8 md:-mt-16" aria-labelledby="achievements-title">
      <div className="container-x">
        <div className="mb-6 flex items-end justify-between px-2 md:px-3">
          <div>
            <p className="eyebrow">Milestones</p>
            <h2 id="achievements-title" className="mt-2 text-2xl md:text-3xl">Achievements & Recognition</h2>
          </div>
        </div>
        <Carousel label="Achievement posters" perView={{ base: 1, md: 1, lg: 2 }} autoplay={5000}>
          {posters.map((p, i) => (
            <figure key={p.src} className="card overflow-hidden">
              <div className="relative aspect-[16/10]">
                <SiteImage
                  src={p.src}
                  alt={p.alt}
                  fill
                  draggable={false}
                  sizes="(min-width:1024px) 50vw, 100vw"
                  loading={i < 2 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </div>
              {p.caption && <figcaption className="px-5 py-4 text-sm text-gold-light">{p.caption}</figcaption>}
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

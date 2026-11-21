import { getMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "./GalleryGrid";
import { ButtonLink } from "@/components/ui/Button";

export function GallerySection({ limit }: { limit?: number }) {
  const all = getMedia("gallery");
  const items = limit ? all.slice(0, limit) : all;
  return (
    <section className="section bg-ink-2/60" aria-label="Gallery">
      <div className="container-x">
        <SectionHeading eyebrow="Gallery" title="Moments That Bring Us Together." intro="Illustrative photos of conferences, workshops and professional gatherings." />
        <div className="mt-14">
          <GalleryGrid items={items} />
        </div>
        {limit && all.length > limit && (
          <div className="mt-10 text-center">
            <ButtonLink href="/gallery" variant="outline">View full gallery</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}

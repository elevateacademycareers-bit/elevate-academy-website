import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export const metadata = pageMeta("Gallery", "Team celebrations, conferences, training sessions and recognition at Team Elevate.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments That Bring Us Together." />
      <GallerySection />
      <div className="container-x pb-16">
        <PlaceholderNote>
          To add photos, drop optimized .webp/.jpg files into <code>public/images/gallery</code> (prefix with 01-, 02-… to order them) and add
          alt text and captions in <code>captions.json</code>. Remove the placeholder files before launch.
        </PlaceholderNote>
      </div>
    </>
  );
}

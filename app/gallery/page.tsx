import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";

export const metadata = pageMeta("Gallery", "Illustrative photos of conferences, workshops and professional gatherings.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments That Bring Us Together." />
      <GallerySection />
    </>
  );
}

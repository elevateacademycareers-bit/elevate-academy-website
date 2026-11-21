import { advisers } from "@/content/people";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdviserCard } from "@/components/ui/AdviserCard";
import { Carousel } from "@/components/ui/Carousel";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export function AdviserSection({ grid = false }: { grid?: boolean }) {
  const anyPlaceholder = advisers.some((a) => a.placeholder);
  return (
    <section className="section bg-ink-2/60" aria-label="Our advisers">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Team"
          title={`Meet the People Behind ${site.name}.`}
          intro="Licensed professionals committed to long-term relationships with the families they serve."
        />
        {grid ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisers.map((a) => <AdviserCard key={a.slug} adviser={a} />)}
          </div>
        ) : (
          <div className="mt-14">
            <Carousel label="Advisers" perView={{ base: 1, md: 2, lg: 3 }} autoplay={0}>
              {advisers.map((a) => <AdviserCard key={a.slug} adviser={a} />)}
            </Carousel>
          </div>
        )}
        {anyPlaceholder && (
          <PlaceholderNote>
            Adviser profiles are placeholders. Add verified names, titles, licences and photos in <code>content/people.ts</code>. Use only
            titles each person is permitted to use in their province.
          </PlaceholderNote>
        )}
      </div>
    </section>
  );
}

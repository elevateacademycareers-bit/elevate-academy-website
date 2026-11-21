import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function SolutionsSection() {
  return (
    <section className="section bg-ink-2/60" aria-label="Financial solutions">
      <div className="container-x">
        <SectionHeading
          eyebrow="Financial Solutions"
          title="Services Under One Roof"
          intro="Banking, insurance and investments — with access to many product carriers, so recommendations start with your needs rather than a single company's shelf."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-mist">
          Products and services are offered only by representatives licensed or registered to provide them in your province.
        </p>
      </div>
    </section>
  );
}

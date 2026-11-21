import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/content/services";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  return (
    <article className="card group flex flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-gold/50">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" aria-hidden />
        <span className="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-ink/80 text-gold">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-cream">{service.title}</h3>
        <p className="mt-3 flex-1 text-mist">{service.summary}</p>
        <Link
          href={`/solutions#${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold"
        >
          Learn More<span className="sr-only"> about {service.title}</span> <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

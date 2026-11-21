import { SiteImage } from "@/components/ui/SiteImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Adviser } from "@/content/people";

export function AdviserCard({ adviser }: { adviser: Adviser }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-500 hover:border-gold/50">
      <div className="relative aspect-[4/5] overflow-hidden">
        <SiteImage
          src={adviser.photo || "/images/advisers/placeholder.webp"}
          alt={adviser.placeholder ? "Adviser photo placeholder" : `Portrait of ${adviser.name}`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        {adviser.placeholder && <span className="placeholder-tag absolute left-4 top-4">Placeholder</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-cream">{adviser.name}</h3>
        <p className="mt-1 text-sm font-semibold text-gold">{adviser.title}</p>
        <p className="mt-1 text-xs uppercase tracking-wider text-mist">{adviser.credentials.join(" · ")}</p>
        <p className="mt-4 flex-1 text-sm text-mist">{adviser.shortBio}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Areas of expertise">
          {adviser.expertise.map((e) => (
            <li key={e} className="rounded-full border border-line px-3 py-1 text-xs text-gold-light">{e}</li>
          ))}
        </ul>
        <Link
          href={`/advisers/${adviser.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold"
        >
          View profile<span className="sr-only"> of {adviser.name}</span> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

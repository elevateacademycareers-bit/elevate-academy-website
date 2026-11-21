"use client";

import Image from "next/image";
import { useState } from "react";
import { Expand } from "lucide-react";
import type { MediaItem } from "@/lib/media";
import { Lightbox } from "@/components/ui/Lightbox";

export function GalleryGrid({ items }: { items: MediaItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((it, i) => (
          <li key={it.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-line text-left"
              aria-label={`Open image: ${it.caption || it.alt}`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                width={it.width}
                height={it.height}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm text-cream">{it.caption}</span>
                <Expand className="h-4 w-4 text-gold" aria-hidden />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />}
    </>
  );
}

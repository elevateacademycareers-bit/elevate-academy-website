"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { MediaItem } from "@/lib/media";

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = items[index];

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onNavigate]);

  // Simple swipe
  const start = useRef<number | null>(null);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={item.caption || item.alt}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 text-cream backdrop:bg-black/80"
    >
      <div
        className="flex h-full flex-col items-center justify-center px-4 py-16"
        onPointerDown={(e) => (start.current = e.clientX)}
        onPointerUp={(e) => {
          if (start.current === null) return;
          const dx = e.clientX - start.current;
          if (Math.abs(dx) > 60) onNavigate((index + (dx < 0 ? 1 : -1) + items.length) % items.length);
          start.current = null;
        }}
      >
        <figure className="relative flex max-h-full w-full max-w-6xl flex-col items-center">
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="100vw"
            className="max-h-[78dvh] w-auto rounded-lg object-contain"
          />
          <figcaption className="mt-4 text-center text-sm text-mist">
            {item.caption || item.alt} <span className="ml-2 text-gold">{index + 1} / {items.length}</span>
          </figcaption>
        </figure>
      </div>
      <button
        type="button"
        onClick={onClose}
        autoFocus
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold-light hover:bg-gold hover:text-ink"
        aria-label="Close image viewer"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => onNavigate((index - 1 + items.length) % items.length)}
        className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-ink/70 text-gold-light hover:bg-gold hover:text-ink"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => onNavigate((index + 1) % items.length)}
        className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-ink/70 text-gold-light hover:bg-gold hover:text-ink"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>
    </dialog>
  );
}

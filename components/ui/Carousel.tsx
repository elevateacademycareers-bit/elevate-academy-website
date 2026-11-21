"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type PerView = { base: number; md?: number; lg?: number };

function usePerView(pv: PerView) {
  const [n, setN] = useState(pv.base);
  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => setN(lg.matches ? pv.lg ?? pv.md ?? pv.base : md.matches ? pv.md ?? pv.base : pv.base);
    update();
    md.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      md.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, [pv.base, pv.md, pv.lg]);
  return n;
}

/**
 * Accessible, dependency-free carousel.
 * - Prev/next arrows, pagination dots, keyboard arrows
 * - Autoplay with pause on hover/focus, explicit pause button (WCAG 2.2.2)
 * - Touch/pointer swipe
 * - Honours prefers-reduced-motion (autoplay disabled)
 */
export function Carousel({
  children,
  label,
  perView = { base: 1 },
  autoplay = 5000,
  className,
  arrowsOutside = false,
}: {
  children: ReactNode;
  label: string;
  perView?: PerView;
  autoplay?: number;
  className?: string;
  arrowsOutside?: boolean;
}) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const pv = Math.min(usePerView(perView), Math.max(count, 1));
  const maxIndex = Math.max(0, count - pv);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const drag = useRef<{ x: number; dx: number; active: boolean }>({ x: 0, dx: 0, active: false });
  const [dragDx, setDragDx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => setIndex((i) => Math.min(i, maxIndex)), [maxIndex]);

  const go = useCallback((i: number) => setIndex(i < 0 ? maxIndex : i > maxIndex ? 0 : i), [maxIndex]);

  useEffect(() => {
    if (!autoplay || paused || hovered || reduced || maxIndex === 0) return;
    const t = window.setInterval(() => {
      if (document.visibilityState === "visible") setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, autoplay);
    return () => window.clearInterval(t);
  }, [autoplay, paused, hovered, reduced, maxIndex]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag.current = { x: e.clientX, dx: 0, active: true };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.dx = e.clientX - drag.current.x;
    if (Math.abs(drag.current.dx) > 6) setDragDx(drag.current.dx);
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    const { dx } = drag.current;
    const w = trackRef.current?.offsetWidth ?? 1;
    if (Math.abs(dx) > Math.min(80, w * 0.12)) go(index + (dx < 0 ? 1 : -1));
    drag.current.active = false;
    setDragDx(0);
  };

  const showControls = maxIndex > 0;

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div className="overflow-hidden" ref={trackRef}>
        <div
          className={cn("flex touch-pan-y select-none", dragDx ? "" : "transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]")}
          style={{ transform: `translate3d(calc(${(-index * 100) / pv}% + ${dragDx}px),0,0)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          aria-live={autoplay && !paused && !reduced ? "off" : "polite"}
        >
          {slides.map((s, i) => {
            const visible = i >= index && i < index + pv;
            return (
              <div
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!visible}
                inert={!visible}
                className="shrink-0 px-2 md:px-3"
                style={{ flexBasis: `${100 / pv}%` }}
              >
                {s}
              </div>
            );
          })}
        </div>
      </div>

      {showControls && (
        <div className={cn("mt-8 flex items-center justify-center gap-4", arrowsOutside && "md:justify-between")}>
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold-light transition hover:bg-gold hover:text-ink"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className="grid h-8 w-8 place-items-center"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              >
                <span className={cn("block h-1.5 rounded-full transition-all duration-500", i === index ? "w-7 bg-gold" : "w-2.5 bg-mist/40")} />
              </button>
            ))}
            {autoplay > 0 && !reduced && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="ml-1 grid h-8 w-8 place-items-center rounded-full text-mist hover:text-gold"
                aria-label={paused ? "Start automatic slide show" : "Pause automatic slide show"}
              >
                {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold-light transition hover:bg-gold hover:text-ink"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
}

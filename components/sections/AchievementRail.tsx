"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

const scrollSpeed = 36;

export function AchievementRail({ children }: { children: ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const slides = Children.toArray(children);
  const canScroll = slides.length > 1;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || paused || interacting || reducedMotion || !canScroll) return;

    let frame = 0;
    let previousTime: number | undefined;
    let distance = 0;
    const move = (time: number) => {
      const loopWidth = track.scrollWidth / 2;
      if (previousTime !== undefined && loopWidth > viewport.clientWidth) {
        distance += Math.min(time - previousTime, 50) * scrollSpeed / 1000;
        const pixels = Math.floor(distance);
        if (pixels > 0) {
          viewport.scrollLeft = (viewport.scrollLeft + pixels) % loopWidth;
          distance -= pixels;
        }
      }
      previousTime = time;
      frame = window.requestAnimationFrame(move);
    };
    frame = window.requestAnimationFrame(move);
    return () => window.cancelAnimationFrame(frame);
  }, [canScroll, paused, interacting, reducedMotion]);

  return (
    <>
      {canScroll && !reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="mb-4 ml-auto mr-2 flex min-h-11 items-center gap-2 rounded-full border border-gold/50 px-4 text-sm text-gold-light hover:bg-gold hover:text-ink md:mr-3"
        >
          {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
          {paused ? "Play scrolling" : "Pause scrolling"}
        </button>
      )}
      <div
        ref={viewportRef}
        role="region"
        aria-label="Achievement photos"
        tabIndex={canScroll ? 0 : undefined}
        className="overflow-x-auto"
        onFocus={() => setInteracting(true)}
        onBlur={() => setInteracting(false)}
        onPointerDown={() => setPaused(true)}
      >
        <div ref={trackRef} className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="w-[88%] shrink-0 px-2 md:w-[58%] md:px-3 lg:w-[46%]">
              {slide}
            </div>
          ))}
          {canScroll && !reducedMotion && slides.map((slide, index) => (
            <div key={index} aria-hidden="true" inert className="w-[88%] shrink-0 px-2 md:w-[58%] md:px-3 lg:w-[46%]">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

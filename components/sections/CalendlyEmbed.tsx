"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Loader2 } from "lucide-react";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
  }
}

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Calendly) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject());
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject();
    document.body.appendChild(s);
  });
}

/**
 * Calendly inline embed that only loads Calendly's script when the
 * booking area approaches the viewport (keeps it off the critical path).
 * Set NEXT_PUBLIC_CALENDLY_URL to your real scheduling link.
 */
export function CalendlyEmbed({ url }: { url: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!url || !wrap.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setState("loading");
        const u = new URL(url);
        u.searchParams.set("hide_gdpr_banner", "1");
        u.searchParams.set("background_color", "1d2721");
        u.searchParams.set("text_color", "f5f2ea");
        u.searchParams.set("primary_color", "c9a45c");
        loadScript()
          .then(() => {
            if (target.current && window.Calendly) {
              window.Calendly.initInlineWidget({ url: u.toString(), parentElement: target.current });
              setState("ready");
            }
          })
          .catch(() => setState("error"));
      },
      { rootMargin: "400px" }
    );
    io.observe(wrap.current);
    return () => io.disconnect();
  }, [url]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin === "https://calendly.com" && e.data?.event === "calendly.event_scheduled") setBooked(true);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  if (!url) {
    return (
      <div className="card flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
        <CalendarDays className="h-10 w-10 text-gold" aria-hidden />
        <p className="mt-4 text-2xl">Online booking coming soon</p>
        <p className="mt-2 max-w-md text-sm text-mist">
          <span className="placeholder-tag mb-3">Setup required</span>
          <br />
          Add your Calendly link to the <code>NEXT_PUBLIC_CALENDLY_URL</code> environment variable to enable the embedded scheduler.
          In the meantime, see our <Link className="text-gold-light underline" href="/contact">contact page</Link>.
        </p>
      </div>
    );
  }

  return (
    <div ref={wrap} className="card relative overflow-hidden">
      {booked && (
        <p role="status" className="flex items-center gap-2 border-b border-line bg-gold/10 px-5 py-3 text-sm text-gold-light">
          <CheckCircle2 className="h-4 w-4" aria-hidden /> Thank you — your appointment is booked. Calendly will email your confirmation.
        </p>
      )}
      {state !== "ready" && (
        <div className="absolute inset-0 grid place-items-center text-sm text-mist" aria-live="polite">
          {state === "error" ? (
            <p className="px-6 text-center">
              The scheduler couldn&apos;t load. <a className="text-gold-light underline" href={url} target="_blank" rel="noopener noreferrer">Open booking in a new tab</a>.
            </p>
          ) : (
            <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Loading scheduler…</span>
          )}
        </div>
      )}
      <div ref={target} className="h-[720px] min-w-[320px] md:h-[700px]" />
    </div>
  );
}

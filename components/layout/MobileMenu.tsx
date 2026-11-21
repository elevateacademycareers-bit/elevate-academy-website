"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CalendarDays, X } from "lucide-react";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";

export function MobileMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      id="mobile-menu"
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label="Site menu"
      className="m-0 ml-auto h-dvh max-h-none w-full max-w-sm bg-ink-2 p-0 text-cream backdrop:bg-black/70"
    >
      <div className="flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-line"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-8 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block border-b border-line py-4 text-2xl transition",
                    isActive(item.href) ? "text-gold" : "text-cream hover:text-gold-light"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="/book-appointment" onClick={onClose} className="mt-6 w-full py-4">
          <CalendarDays className="h-4 w-4" aria-hidden /> Book an Appointment
        </ButtonLink>
      </div>
    </dialog>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, Menu } from "lucide-react";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-line bg-ink/90 backdrop-blur-md" : "bg-gradient-to-b from-ink/80 to-transparent"
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <div className={cn("container-x flex items-center justify-between gap-4 transition-all", scrolled ? "h-18" : "h-22")}>
        <Logo size={46} className={scrolled ? "text-gold-light" : "text-cream"} />
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-2.5 py-2 text-sm transition hover:text-gold-light",
                    isActive(item.href) ? "text-gold" : "text-cream/85"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <ButtonLink href="/book-appointment" className="whitespace-nowrap px-5 py-2.5">
              <CalendarDays className="h-4 w-4" aria-hidden /> Book an Appointment
            </ButtonLink>
          </span>
          <span className="sm:hidden">
            <ButtonLink href="/book-appointment" className="min-h-10 px-4 py-2 text-xs" aria-label="Book an appointment">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden /> Book
            </ButtonLink>
          </span>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream xl:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} isActive={isActive} />
    </header>
  );
}

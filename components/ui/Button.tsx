import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "gold" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  gold:
    "bg-gradient-to-b from-gold-light to-gold text-ink shadow-[0_10px_30px_-12px_rgba(201,164,92,0.7)] hover:brightness-105 hover:-translate-y-0.5",
  outline: "border border-gold/60 text-gold-light hover:bg-gold/10 hover:border-gold",
  ghost: "text-gold-light hover:text-gold underline-offset-4 hover:underline px-0",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 min-h-11 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

export function ButtonLink({
  href,
  variant = "gold",
  className,
  children,
  ...rest
}: { href: string; variant?: Variant; children: ReactNode } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "gold",
  className,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return <button className={cn(base, styles[variant], className)} {...rest} />;
}

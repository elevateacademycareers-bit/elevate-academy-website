import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ size = 48, className }: { size?: number; className?: string }) {
  const icon = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg`;

  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center transition-colors", className)} aria-label="Team Elevate — home">
      <span
        aria-hidden
        className="block aspect-[307/282] bg-current"
        style={{ width: size, mask: `url("${icon}") center / contain no-repeat` }}
      />
    </Link>
  );
}

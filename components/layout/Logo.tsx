import { SiteImage } from "@/components/ui/SiteImage";
import Link from "next/link";

export function Logo({ size = 48, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Team Elevate — home">
      <SiteImage src="/images/brand/logo.png" alt="" width={size} height={Math.round(size * 0.845)} priority className="h-auto" style={{ width: size }} />
      {withText && (
        <span className="hidden whitespace-nowrap font-serif text-xl min-[400px]:inline leading-none tracking-wide text-cream">
          Team <span className="gold-text">Elevate</span>
        </span>
      )}
    </Link>
  );
}

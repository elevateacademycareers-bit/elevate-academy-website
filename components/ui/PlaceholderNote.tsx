import { Info } from "lucide-react";

/** Visible marker for content that must be replaced before launch. */
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-8 flex max-w-2xl items-start gap-2 rounded-lg border border-dashed border-gold/40 bg-gold/5 px-4 py-3 text-sm text-mist">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

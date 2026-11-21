import { site } from "@/content/site";
import { cn } from "@/lib/cn";

// Simple brand marks drawn inline (lucide no longer ships brand icons).
const paths: Record<string, string> = {
  facebook: "M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.7-.6Z",
  instagram: "M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 1 0 12 7.5Zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8ZM17.3 5.5a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8a5.6 5.6 0 0 1-5.6 5.6H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2Zm0 1.8a3.8 3.8 0 0 0-3.8 3.8v8.8a3.8 3.8 0 0 0 3.8 3.8h8.8a3.8 3.8 0 0 0 3.8-3.8V7.6a3.8 3.8 0 0 0-3.8-3.8H7.6Z",
  linkedin: "M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 8.5h3V21H3V8.5Zm5 0h2.9v1.7c.4-.8 1.5-1.9 3.3-1.9 3.4 0 4.3 2.1 4.3 5.1V21h-3v-6.8c0-1.6-.3-2.9-1.9-2.9-1.7 0-2.6 1.1-2.6 3V21H8V8.5Z",
  youtube: "M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z",
};

export function SocialLinks({ className }: { className?: string }) {
  const entries = Object.entries(site.social).filter(([, url]) => url);
  if (!entries.length) return <p className={cn("text-xs text-mist/70", className)}>Social links: add official profiles in content/site.ts</p>;
  return (
    <ul className={cn("flex gap-3", className)}>
      {entries.map(([k, url]) => (
        <li key={k}>
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${site.name} on ${k}`}
             className="grid h-10 w-10 place-items-center rounded-full border border-line text-gold-light transition hover:border-gold hover:bg-gold hover:text-ink">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d={paths[k]} /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={cn("text-cream", Tag === "h1" ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl")}>{title}</Tag>
      <div className={cn("gold-rule mt-6 w-24", align === "center" ? "mx-auto" : "")} aria-hidden />
      {intro && <p className="mt-6 text-base md:text-lg text-mist">{intro}</p>}
    </div>
  );
}

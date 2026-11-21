import Image from "next/image";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 md:pt-44 md:pb-24">
      <Image src="/images/site/hero.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" aria-hidden />
      <div className="container-x relative">
        <p className="eyebrow mb-4 animate-rise">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl md:text-6xl animate-lift">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-mist animate-rise">{intro}</p>}
      </div>
    </section>
  );
}

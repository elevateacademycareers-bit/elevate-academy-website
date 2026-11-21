import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-6 pt-24 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl md:text-6xl">Page not found</h1>
        <p className="mt-4 text-mist">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <ButtonLink href="/" className="mt-8">Back to home</ButtonLink>
      </div>
    </section>
  );
}

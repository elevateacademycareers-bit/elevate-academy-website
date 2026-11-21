import { CalendarCheck, Clock, Globe2 } from "lucide-react";
import { site } from "@/content/site";
import { CalendlyEmbed } from "./CalendlyEmbed";

export function AppointmentSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="book" className="section relative overflow-hidden" aria-labelledby="book-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_0%_100%,rgba(201,164,92,0.12),transparent_70%)]" aria-hidden />
      <div className="container-x grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="eyebrow mb-4">Book an Appointment</p>
          <H id="book-title" className="text-3xl md:text-5xl">Let&apos;s Start a Conversation.</H>
          <div className="gold-rule mt-6 w-24" aria-hidden />
          <p className="mt-6 text-mist">
            Every financial journey begins with a conversation. Connect with our team to explore your goals and available opportunities.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              [CalendarCheck, "Choose the appointment type that suits you"],
              [Clock, "Pick from real-time available slots"],
              [Globe2, "Times shown automatically in your time zone"],
            ].map(([I, t]) => {
              const Ico = I as typeof Clock;
              return (
                <li key={t as string} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-gold"><Ico className="h-4 w-4" aria-hidden /></span>
                  <span className="text-cream">{t as string}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-xs text-mist">
            Please don&apos;t share account numbers, SIN or other sensitive financial details when booking. We&apos;ll discuss your needs securely during the meeting.
          </p>
        </div>
        <div className="lg:col-span-3">
          <CalendlyEmbed url={site.calendlyUrl} />
        </div>
      </div>
    </section>
  );
}

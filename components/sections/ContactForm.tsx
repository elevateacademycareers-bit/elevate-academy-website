"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { validateContact, type ContactInput, type ContactErrors } from "@/lib/validate";
import { cn } from "@/lib/cn";

const empty: ContactInput = { name: "", email: "", phone: "", subject: "", message: "", privacy: false, marketing: false, website: "" };

export function ContactForm() {
  const [v, setV] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const set = <K extends keyof ContactInput>(k: K, val: ContactInput[K]) => {
    setV((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateContact(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setV(empty);
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-2 w-full rounded-lg border bg-ink px-4 py-3 text-cream placeholder:text-mist/50 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
  const errId = (k: keyof ContactInput) => (errors[k] ? `cf-${k}-err` : undefined);
  const Err = ({ k }: { k: keyof ContactInput }) =>
    errors[k] ? <p id={`cf-${k}-err`} className="mt-1.5 text-sm text-[#f0a58f]">{errors[k]}</p> : null;

  if (status === "ok") {
    return (
      <div className="card flex min-h-[420px] flex-col items-center justify-center p-10 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-gold" aria-hidden />
        <p className="mt-4 font-serif text-2xl">Thank you for reaching out.</p>
        <p className="mt-2 text-mist">Your message has been received. A member of our team will be in touch soon.</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Send another message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-10" aria-describedby="cf-note">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium">Full name <span className="text-gold" aria-hidden>*</span></label>
          <input id="cf-name" autoComplete="name" className={cn(field, errors.name ? "border-[#f0a58f]" : "border-line")} value={v.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errId("name")} required />
          <Err k="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium">Email <span className="text-gold" aria-hidden>*</span></label>
          <input id="cf-email" type="email" autoComplete="email" className={cn(field, errors.email ? "border-[#f0a58f]" : "border-line")} value={v.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errId("email")} required />
          <Err k="email" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="text-sm font-medium">Phone number <span className="text-mist">(optional)</span></label>
          <input id="cf-phone" type="tel" autoComplete="tel" className={cn(field, errors.phone ? "border-[#f0a58f]" : "border-line")} value={v.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errId("phone")} />
          <Err k="phone" />
        </div>
        <div>
          <label htmlFor="cf-subject" className="text-sm font-medium">Subject <span className="text-gold" aria-hidden>*</span></label>
          <select id="cf-subject" className={cn(field, errors.subject ? "border-[#f0a58f]" : "border-line")} value={v.subject} onChange={(e) => set("subject", e.target.value)} aria-invalid={!!errors.subject} aria-describedby={errId("subject")} required>
            <option value="">Select a subject</option>
            <option>Financial solutions</option>
            <option>Business opportunity</option>
            <option>Appointment request</option>
            <option>General question</option>
          </select>
          <Err k="subject" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className="text-sm font-medium">Message <span className="text-gold" aria-hidden>*</span></label>
          <textarea id="cf-message" rows={5} maxLength={2000} className={cn(field, "resize-y", errors.message ? "border-[#f0a58f]" : "border-line")} value={v.message} onChange={(e) => set("message", e.target.value)} aria-invalid={!!errors.message} aria-describedby={cn(errId("message"), "cf-message-hint")} required />
          <p id="cf-message-hint" className="mt-1.5 text-xs text-mist">Please don&apos;t include account numbers, SIN, health details or other sensitive information.</p>
          <Err k="message" />
        </div>
        {/* Honeypot — hidden from people, catches bots */}
        <div className="hidden" aria-hidden>
          <label htmlFor="cf-website">Website</label>
          <input id="cf-website" tabIndex={-1} autoComplete="off" value={v.website} onChange={(e) => set("website", e.target.value)} />
        </div>
      </div>

      <fieldset className="mt-6 space-y-4">
        <legend className="sr-only">Consent</legend>
        <div>
          <label className="flex items-start gap-3 text-sm text-mist">
            <input id="cf-privacy" type="checkbox" className="mt-1 h-4 w-4 accent-[#c9a45c]" checked={v.privacy} onChange={(e) => set("privacy", e.target.checked)} aria-invalid={!!errors.privacy} aria-describedby={errId("privacy")} />
            <span>I consent to Team Elevate collecting and using the information above to respond to my enquiry, as described in the <Link href="/privacy-policy" className="text-gold-light underline">Privacy Policy</Link>. <span className="text-gold" aria-hidden>*</span></span>
          </label>
          <Err k="privacy" />
        </div>
        <label className="flex items-start gap-3 text-sm text-mist">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-[#c9a45c]" checked={v.marketing} onChange={(e) => set("marketing", e.target.checked)} />
          <span>Optional: I would like to receive occasional emails from Team Elevate about financial education and events. I can unsubscribe at any time.</span>
        </label>
      </fieldset>

      {status === "error" && (
        <p role="alert" className="mt-6 flex items-center gap-2 rounded-lg border border-[#f0a58f]/50 bg-[#f0a58f]/10 px-4 py-3 text-sm text-[#f7c9bb]">
          <AlertCircle className="h-4 w-4" aria-hidden /> Something went wrong sending your message. Please try again, or email us directly.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="cf-note" className="text-xs text-mist"><span className="text-gold">*</span> Required fields</p>
        <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto px-8">
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
          {status === "sending" ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

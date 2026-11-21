import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/validate";

/**
 * Contact form endpoint.
 * TODO: connect to your email/CRM provider (e.g. Resend, Postmark, HubSpot).
 * Record the marketing-consent flag and timestamp for CASL compliance and
 * honour unsubscribe requests. Do not log message bodies in production.
 */
export async function POST(req: Request) {
  let body: Partial<ContactInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: pretend success for bots
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateContact(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const submission = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    phone: String(body.phone ?? "").trim(),
    subject: String(body.subject),
    message: String(body.message).trim(),
    marketingConsent: Boolean(body.marketing),
    consentTimestamp: new Date().toISOString(),
  };

  // Placeholder delivery — replace with your provider.
  if (process.env.NODE_ENV !== "production") console.info("[contact] submission received", { ...submission, message: "[redacted]" });

  return NextResponse.json({ ok: true });
}

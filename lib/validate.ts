export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
  marketing: boolean;
  website: string; // honeypot
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]{7,20}$/;

/** Shared by the client form and the API route. */
export function validateContact(v: Partial<ContactInput>): ContactErrors {
  const e: ContactErrors = {};
  const name = (v.name ?? "").trim();
  const email = (v.email ?? "").trim();
  const phone = (v.phone ?? "").trim();
  const message = (v.message ?? "").trim();
  if (name.length < 2) e.name = "Please enter your full name.";
  else if (name.length > 100) e.name = "Name is too long.";
  if (!EMAIL.test(email)) e.email = "Please enter a valid email address.";
  if (phone && (!PHONE.test(phone) || phone.replace(/\D/g, "").length < 7)) e.phone = "Please enter a valid phone number.";
  if (!v.subject) e.subject = "Please choose a subject.";
  if (message.length < 10) e.message = "Please include a short message (at least 10 characters).";
  else if (message.length > 2000) e.message = "Message is too long (2,000 characters max).";
  if (!v.privacy) e.privacy = "Please confirm your consent so we can respond.";
  return e;
}

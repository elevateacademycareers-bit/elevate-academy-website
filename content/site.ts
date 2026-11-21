/**
 * Central site configuration.
 *
 * Every value marked `PLACEHOLDER` must be replaced with verified,
 * company-approved information before launch. Nothing here should be
 * invented: if a value is unknown, leave the placeholder in place.
 */

export const site = {
  name: "Team Elevate",
  tagline: "Elevate Financial Futures",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  description:
    "Team Elevate builds financial foundations for Canadian families and develops licensed financial professionals through the Experior Financial Group agency model.",
  mission:
    "Building financial foundations for families to empower them today and leave a legacy for tomorrow.",
  /** Configure via NEXT_PUBLIC_CALENDLY_URL. Never hard-code an invented link. */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",

  /** Affiliation as shown in the Team Elevate presentation. */
  affiliation: {
    name: "Experior Financial Group Inc.",
    role: "Managing General Agency (MGA)",
  },

  contact: {
    email: "PLACEHOLDER — contact@yourdomain.ca",
    phone: "PLACEHOLDER — (000) 000-0000",
    phoneHref: "", // e.g. "tel:+10000000000"
    emailHref: "", // e.g. "mailto:contact@yourdomain.ca"
    address: "", // Leave empty if no public office address is approved
    hours: "PLACEHOLDER — Office hours",
  },

  /** Add only official, active profiles. Empty strings are hidden. */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  /** Licensing / regulatory disclosure shown in the footer. Review with compliance. */
  regulatoryDisclosure:
    "Insurance products are offered through individually licensed life insurance agents contracted through Experior Financial Group Inc. Investment products, where offered, are provided only by individuals appropriately licensed or registered in their province of residence and through the applicable registered firm. Products and services are subject to provincial licensing requirements and may not be available in all provinces. PLACEHOLDER — compliance to confirm final wording, registrations and provinces of operation.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Business Opportunity", href: "/business-opportunity" },
  { label: "Our Team", href: "/advisers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

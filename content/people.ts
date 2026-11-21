/**
 * Advisers and testimonials.
 *
 * NEVER invent names, titles, credentials, licences or reviews.
 * The entries below are clearly labelled placeholders. Replace each with
 * verified, approved details (and written consent for testimonials) and set
 * `placeholder: false`.
 *
 * TITLE NOTE: "Financial Advisor" and "Financial Planner" are protected
 * titles in some provinces (e.g. Ontario, Saskatchewan). Use only titles
 * the individual is credentialed to use.
 */

export type Adviser = {
  slug: string;
  name: string;
  title: string;
  credentials: string[];
  licensedIn: string[];
  expertise: string[];
  shortBio: string;
  bio: string[];
  photo?: string; // e.g. "/images/advisers/jane-doe.webp"
  email?: string;
  phone?: string;
  linkedin?: string;
  placeholder?: boolean;
};

const placeholderAdviser = (n: number): Adviser => ({
  slug: `adviser-${n}`,
  name: `Adviser Name ${n}`,
  title: "Verified professional title",
  credentials: ["Approved credential / licence"],
  licensedIn: ["Province(s) of licence"],
  expertise: ["Area of expertise"],
  shortBio:
    "Short approved biography. Replace this placeholder with the adviser's verified background and areas of focus.",
  bio: [
    "Full approved biography goes here. Include only verified information such as years in the industry, approved designations and the communities served.",
    "Add a second paragraph about the adviser's approach to client relationships, if desired.",
  ],
  placeholder: true,
});

export const advisers: Adviser[] = [1, 2, 3, 4, 5, 6].map(placeholderAdviser);

export type Testimonial = {
  name: string;
  context?: string;
  quote: string;
  photo?: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Approved display name",
    context: "Context or date (optional)",
    quote:
      "Placeholder testimonial. Publish only authentic client statements, used with written permission and reviewed by compliance.",
    placeholder: true,
  },
  {
    name: "Approved display name",
    context: "Context or date (optional)",
    quote:
      "Placeholder testimonial. Do not edit a client's words in a way that changes their meaning, and do not imply individual experiences are typical.",
    placeholder: true,
  },
  {
    name: "Approved display name",
    context: "Context or date (optional)",
    quote:
      "Placeholder testimonial. Replace with a real, consented quote and set placeholder to false.",
    placeholder: true,
  },
];

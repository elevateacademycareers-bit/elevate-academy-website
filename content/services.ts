/**
 * Service categories and product lists — taken verbatim from the
 * "Services Under One Roof" and "How We Help Our Clients" slides.
 *
 * COMPLIANCE: Display only the products that each representative is
 * licensed/registered to provide in their province. Investment products
 * such as mutual funds require separate registration from a life licence.
 */

export type ServiceCategory = {
  slug: string;
  title: string;
  icon: "TrendingUp" | "ShieldCheck" | "Landmark";
  image: string;
  summary: string;
  items: string[];
  note?: string;
};

export const services: ServiceCategory[] = [
  {
    slug: "investment-services",
    title: "Investment Services",
    icon: "TrendingUp",
    image: "/images/services/investments.webp",
    summary:
      "Registered and non-registered savings strategies that help families plan for a first home, education, retirement and their estate.",
    items: [
      "Tax-Free Savings Account (TFSA)",
      "First Home Savings Account (FHSA)",
      "Registered Retirement Savings Plan (RRSP)",
      "Registered Education Savings Plan (RESP)",
      "Registered Disability Savings Plan (RDSP)",
      "Annuities / Locked-in Investments",
      "Estate Planning, including Wills",
    ],
    note:
      "Investment products are offered only by representatives holding the applicable provincial licence or registration.",
  },
  {
    slug: "insurance-solutions",
    title: "Insurance Solutions",
    icon: "ShieldCheck",
    image: "/images/services/insurance.webp",
    summary:
      "Protection for the people and plans that matter most — from life and critical illness coverage to health, travel and business insurance.",
    items: [
      "Life Insurance",
      "Critical Illness Insurance",
      "Disability Insurance",
      "Health and Dental Insurance",
      "Visitor Visa Insurance",
      "Super Visa Insurance",
      "Long-term Care Insurance",
      "Group Insurance",
      "Business Insurance",
      "Funeral Insurance",
    ],
  },
  {
    slug: "other-financial-services",
    title: "Other Financial Services",
    icon: "Landmark",
    image: "/images/services/banking.webp",
    summary:
      "Access to banking, lending and property-protection solutions through a network of partners — so more of your financial life lives under one roof.",
    items: [
      "Credit Cards",
      "Mortgages",
      "Renewal or Refinancing",
      "Home Equity Line of Credit",
      "Home and Auto Insurance",
      "Pet Insurance",
      "Debt Consolidation and Consumer Proposal",
    ],
    note:
      "Some services are provided through referral partners. PLACEHOLDER — confirm which services are offered directly versus by referral, and any referral compensation to disclose.",
  },
];

/** Client challenges listed on slide 2 ("We are here to help"). */
export const clientChallenges = [
  "Debt",
  "Rising expenses",
  "Insufficient savings",
  "Goals that feel out of reach",
  "A compromised lifestyle",
  "Lack of quality time with family",
  "Financial insecurity due to job loss or illness",
  "Increased stress and financial pressure",
];

/** Value points from slide 6 ("Need"). */
export const clientValue = [
  "Personalized financial guidance — not just products",
  "An annual financial review",
  "Support for constant needs, from womb to tomb",
  "Greater financial awareness for the whole family",
];

/**
 * Business-opportunity content. All figures are taken from the Team
 * Elevate presentation and are illustrative only. Compensation schedules
 * are set by Experior Financial Group and product carriers and can change.
 * Compliance must review and approve before publishing.
 */

export const cashflowQuadrant = [
  { letter: "E", label: "Employee", caption: "You have a job" },
  { letter: "S", label: "Self-employed", caption: "You own a job" },
  { letter: "B", label: "Business owner", caption: "You have an agency" },
  { letter: "I", label: "Investor", caption: "Money works for you" },
];

export const pathway = [
  {
    title: "Become licensed",
    text: "Complete the provincial life licence qualification (HLLQP) and exam, then contract as a licensed agent. No prior industry experience is required.",
  },
  {
    title: "Serve clients",
    text: "Build relationships with families and provide personalized guidance, with access to many product carriers rather than a single company's shelf.",
  },
  {
    title: "Learn by doing",
    text: "Field training, product training and live and recorded video sessions help you build knowledge that stays with you.",
  },
  {
    title: "Develop a team",
    text: "As you grow, you can mentor and support other licensed agents and progress through contract levels based on defined criteria.",
  },
  {
    title: "Build an agency",
    text: "Agency growth is measured on licensed partners and settled insurance premium — not on recruitment alone.",
  },
  {
    title: "Ownership & succession",
    text: "Retain contractual ownership of your book of business and access succession options through the Right to Transfer program.",
  },
];

/** "Concerns when starting a business" — slide 6. */
export const startingConcerns = [
  {
    title: "Investment",
    points: [
      "No registration fees",
      "Back-office fee of $39/month",
      "HLLQP licensing course fees reimbursed at first promotion (conditions apply)",
    ],
  },
  {
    title: "Time",
    points: ["Part-time or full-time", "Flexible schedule", "Your time, your investment"],
  },
  {
    title: "Knowledge",
    points: ["No prior experience required", "Field training", "Product trainings", "Live & recorded videos"],
  },
  {
    title: "Risk",
    points: [
      "No large capital investment required",
      "Your time, your business, your choice",
      "Knowledge stays with you",
    ],
  },
];

export const waysPaid = [
  { title: "Personal Income", text: "Commission earned on the policies and plans you personally place for clients, paid as a percentage based on your contract level." },
  { title: "Team Overrides", text: "Override compensation based on the difference between your contract level and that of agents you support." },
  { title: "Generational Overrides", text: "A percentage of first-year commission (FYC) from qualifying leaders' agencies, across multiple generations." },
  { title: "Agency Bonus", text: "Qualification based on overall agency performance — volume of insurance premium and licensed partners." },
  { title: "Renewal & Trail Income", text: "Renewal income can recur while policies stay active; trail income is paid while investments remain in place." },
  { title: "Carrier Bonus", text: "Some product carriers pay additional bonuses on qualifying production, based on their own schedules and criteria." },
];

/** Contract levels from "Positions in Experior" (slide 8). */
export const contractLevels = [
  { code: "FA", title: "Financial Associate", rate: 70 },
  { code: "SFA", title: "Senior Financial Associate", rate: 85 },
  { code: "SM", title: "Senior Manager", rate: 100 },
  { code: "ED", title: "Executive Director", rate: 120 },
];

export const seniorLevels = [
  { code: "SED", title: "Senior Executive Director" },
  { code: "NED", title: "National Executive Director" },
  { code: "SNED", title: "Senior National Executive Director" },
  { code: "EP", title: "Executive Partner" },
];

/** Personal-income examples (slide 9). Compensation = % of annual premium (AP). */
export const personalIncomeExamples = [
  {
    label: "Basic plan",
    description: "An individual pays $100/month for life and critical illness insurance.",
    annualPremium: 1200,
  },
  {
    label: "Family plan",
    description: "A couple pays $300/month for life and critical illness insurance.",
    annualPremium: 3600,
  },
];

/** Generational override percentages of FYC (slide 10). */
export const generationalOverrides = [
  { generation: "1st", percent: 28 },
  { generation: "2nd", percent: 14 },
  { generation: "3rd", percent: 7 },
  { generation: "4th", percent: 2 },
  { generation: "5th", percent: 1 },
  { generation: "6th", percent: 0.5 },
  { generation: "7th", percent: 0.5 },
];
/** FYC used in the deck example: $600 on a $1,200 annual-premium term policy. */
export const exampleFYC = 600;

export const legacy = {
  ownershipOfBusiness: [
    "Life-licensed agents at all levels can fully transfer their business to an immediate family member, including a spouse, child or parent.",
    "The recipient of the business transfer must hold a valid life insurance licence.",
  ],
  rightToTransfer: [
    "Upon the death or retirement of an Executive Director, unlicensed loved ones may continue to receive 25–75% of business overrides, passing through generations.",
    "The Executive Director must meet the program's eligibility criteria before retirement or death.",
  ],
  ownershipOfExperior:
    "Experior describes a stock option plan through which eligible agents may receive company shares at promotion and income milestones. Eligibility, vesting and terms are set by Experior and may change.",
};

/** Summary slide — statements are Experior's own descriptions. Verify currency before launch. */
export const experiorSummary = [
  "A provider of financial services in Canada, the USA and Puerto Rico, founded in 2014.",
  "Complete financial services under one roof — banking, investments and insurance.",
  "Power of choice: a central link between many product carriers and clients.",
  "Ownership of clients: agents maintain contractual ownership of their book of business.",
  "Tri-Brid model: combines personal production, agency building and overrides.",
  "Ownership of brokerage: the ability to pass ongoing income to future generations.",
];

export const earningsDisclosure =
  "The figures on this page are illustrative examples drawn from Experior Financial Group compensation materials, rounded and simplified for education. They are not a representation or guarantee of earnings. Income depends on individual effort, licensing, client needs, product suitability, persistency, contract level and many other factors, and some agents earn little or no income. Compensation is paid on the sale of suitable products to clients — never on recruitment alone. Schedules are set by Experior and product carriers and may change without notice. Costs include licensing courses and exams, provincial licence fees, errors & omissions insurance and a monthly back-office fee. PLACEHOLDER — insert approved income disclosure statement from compliance.";

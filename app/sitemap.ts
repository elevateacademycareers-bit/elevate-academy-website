import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { advisers } from "@/content/people";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/solutions", "/business-opportunity", "/advisers", "/gallery", "/testimonials", "/contact", "/book-appointment", "/privacy-policy", "/terms"];
  const now = new Date();
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}`, lastModified: now, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.7 })),
    ...advisers.filter((a) => !a.placeholder).map((a) => ({ url: `${site.url}/advisers/${a.slug}`, lastModified: now, priority: 0.5 })),
  ];
}

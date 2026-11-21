import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Self-hosted (no runtime request to Google Fonts): Inter + Playfair Display, variable, latin subset.
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display-latin-wght-normal.woff2", style: "normal", weight: "400 900" },
    { path: "./fonts/playfair-display-latin-wght-italic.woff2", style: "italic", weight: "400 900" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Build a Stronger Financial Future. Together.`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    url: "/",
    title: `${site.name} | Build a Stronger Financial Future. Together.`,
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#101411", colorScheme: "dark" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/brand/logo.png`,
  description: site.description,
  // Add address / telephone / sameAs only once verified.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}

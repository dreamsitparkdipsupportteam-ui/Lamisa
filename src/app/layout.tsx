import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site, activeSocials, getSiteUrl } from "@/content/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = getSiteUrl();
const pageTitle = "Lamisa | Digital Marketing Specialist & Organic Growth Expert";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s | Lamisa",
  },
  description: site.description,
  keywords: [
    "Lamisa Digital Marketer",
    "Digital Marketing Specialist",
    "Organic Growth Expert",
    "Social Media Marketing",
    "Digital Marketing Consultant",
    "Content Strategy",
    "SEO Strategy",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lamisa",
    title: pageTitle,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF8FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: siteUrl,
    ...(activeSocials.length > 0 ? { sameAs: activeSocials.map((s) => s.url) } : {}),
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-purple focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

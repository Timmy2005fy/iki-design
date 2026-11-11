import type { Metadata } from "next";
import { Syne, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://iki-design.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iki / UI/UX Design & Web Development",
    template: "%s | iki",
  },
  description: "Clean UI/UX design and modern websites built to perform. Custom web design and engineering for companies, studios, and growing businesses.",
  keywords: [
    "UI/UX Design",
    "Web Development",
    "Frontend Engineering",
    "Web Design for Companies",
    "Studio Websites",
    "Web Applications",
    "iki design agency",
    "Lagos Web Studio",
  ],
  authors: [{ name: "iki design agency" }],
  creator: "iki",
  publisher: "iki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "iki",
    title: "iki / UI/UX Design & Web Development",
    description: "Clean UI/UX design and modern websites built to perform for companies, studios, and businesses.",
    images: [
      {
        url: "/brand/og-share.png",
        width: 1200,
        height: 630,
        alt: "iki design agency / UI/UX Design & Web Development",
        type: "image/png",
      },
      {
        url: "/brand/iki-mark.png",
        width: 1024,
        height: 1024,
        alt: "iki logo mark",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iki / UI/UX Design & Web Development",
    description: "Clean UI/UX design and modern websites built to perform for companies, studios, and businesses.",
    images: ["/brand/og-share.png"],
    creator: "@ikiagency",
  },
  icons: {
    icon: [
      { url: "/brand/iki-mark.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/iki-mark.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/iki-mark.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/brand/iki-mark.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/brand/iki-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSerif.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[var(--canvas-bg)] text-[var(--text-primary)] font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

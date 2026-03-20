import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sct-wd-1-responsive-landing-page.vercel.app"),
  title: {
    default: "OrbitFlow | Premium SaaS Landing Page",
    template: "%s | OrbitFlow",
  },
  description:
    "Modern, responsive SaaS-style landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  keywords: [
    "SaaS landing page",
    "Next.js portfolio",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "OrbitFlow | Premium SaaS Landing Page",
    description:
      "Premium startup landing page with responsive UI, smooth animations, and dark mode support.",
    siteName: "OrbitFlow",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "OrbitFlow landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitFlow | Premium SaaS Landing Page",
    description:
      "Modern SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

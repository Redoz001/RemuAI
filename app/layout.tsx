import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { COMPANY } from "./lib/site-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: COMPANY.website }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "technology",

  keywords: [
    "software engineering",
    "business systems",
    "workflow automation",
    "AI systems",
    "cloud platforms",
    "digital products",
    "technology consulting",
    "UAE technology company",
  ],

  title: {
    default: "RemuAI | Technology, with judgment",
    template: "%s | RemuAI",
  },

  description: COMPANY.description,

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/icon.svg",

    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "RemuAI | Technology, with judgment",
    description: COMPANY.description,
    siteName: COMPANY.name,
    locale: "en_AE",
  },

  twitter: {
    card: "summary_large_image",
    title: "RemuAI | Technology, with judgment",
    description: COMPANY.description,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
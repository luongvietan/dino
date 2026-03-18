import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://thedinonetwork.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Dino Network",
  title: {
    default: "Dino Network - TikTok LIVE Agency",
    template: "%s | Dino Network",
  },
  description:
    "Official TikTok LIVE Partner Agency for creators in USA, Canada and Philippines. Grow your audience and monetize your content with expert support.",
  keywords: [
    "TikTok LIVE Agency",
    "TikTok LIVE Partner",
    "creator agency",
    "TikTok creators",
    "Dino Network",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dino Network",
    title: "Dino Network - TikTok LIVE Agency",
    description:
      "Official TikTok LIVE Partner Agency for creators in USA, Canada and Philippines. Grow your audience and monetize your content with expert support.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Dino Network TikTok LIVE Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dino Network - TikTok LIVE Agency",
    description:
      "Official TikTok LIVE Partner Agency for creators in USA, Canada and Philippines. Grow your audience and monetize your content with expert support.",
    images: ["/hero.webp"],
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
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dino Network",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  sameAs: [
    "https://www.tiktok.com/@dinonetworkus",
    "https://discord.gg/dinonetwork",
  ],
};

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-display" 
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-next-intl-locale") ?? "en";

  return (
    <html lang={locale} className="dark">
      <head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

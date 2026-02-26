import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Dino Network",
  description: "Official TikTok LIVE Partner Agency for creators in USA and Canada. Grow your audience and monetize your content with expert support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display`}>
        <LenisProvider>
          <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}

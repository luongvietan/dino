"use client";

import { ApplicationForm } from "@/components/application-form/ApplicationForm";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const VALID_REGIONS = ["usa-canada", "philippines"] as const;

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const region = searchParams.get("region");

  useEffect(() => {
    if (!region || !VALID_REGIONS.includes(region as (typeof VALID_REGIONS)[number])) {
      router.replace("/join");
    }
  }, [region, router]);

  if (!region || !VALID_REGIONS.includes(region as (typeof VALID_REGIONS)[number])) {
    return (
      <main className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-4">Redirecting to region selection...</p>
          <Link href="/join" className="text-primary font-semibold hover:underline">
            Choose region
          </Link>
        </div>
      </main>
    );
  }

  const backgroundStyle = {
    backgroundImage:
      "radial-gradient(circle at 12% 18%, rgba(34,197,94,0.18), transparent 28%), radial-gradient(circle at 82% 12%, rgba(59,130,246,0.16), transparent 32%), radial-gradient(circle at 50% 88%, rgba(236,72,153,0.14), transparent 30%), linear-gradient(135deg, #0b1220 0%, #05070d 50%, #0b1220 100%)",
    backgroundColor: "#05070d",
  };

  return (
    <main
      className="relative overflow-hidden min-h-screen bg-background-light dark:bg-background-dark flex flex-col"
      style={backgroundStyle}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.05),transparent_24%)]" />
      <header className="px-4 sm:px-6 py-4 sm:py-6 absolute top-0 w-full z-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Dino Network Logo" width={32} height={32} className="object-contain" />
          <h2 className="text-base sm:text-lg font-bold">Dino Network</h2>
        </Link>
        <Link href="/" className="text-xs sm:text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">close</span>
          Exit
        </Link>
      </header>
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 pt-20 sm:pt-24 pb-6 w-full h-full max-w-4xl mx-auto">
        <ApplicationForm region={region as "usa-canada" | "philippines"} />
      </div>
    </main>
  );
}

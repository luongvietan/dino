"use client";

import { ApplicationForm } from "@/components/application-form/ApplicationForm";
import Link from "next/link";
import Image from "next/image";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <header className="px-6 py-6 absolute top-0 w-full z-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.webp" alt="Dino Network Logo" width={32} height={32} className="object-contain" />
          <h2 className="text-lg font-bold">Dino Network</h2>
        </Link>
        <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">close</span>
          Exit
        </Link>
      </header>
      <div className="flex-1 flex flex-col justify-center items-center px-4 w-full h-full max-w-4xl mx-auto">
        <ApplicationForm />
      </div>
    </main>
  );
}

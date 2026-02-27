"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 -mt-10">
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-8 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative z-10 rounded-[2rem] bg-gradient-to-b from-[#111827] to-[#05070d] border border-white/10 p-6 md:p-10 lg:p-12">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Official TikTok LIVE Partner
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em]">
              Build Your <span className="text-primary">LIVE</span> Career
              <br />
              <span className="italic font-semibold">the Right Way</span>
            </h1>

            <div className="h-px w-full bg-white/10" />

            <p className="text-sm sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Official TikTok LIVE Partner Agency for creators in USA and
              Canada. Grow your audience and monetize your content with expert
              support.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center bg-[#b9e43a] hover:bg-[#c6f04a] text-black px-8 py-3 rounded-full font-bold text-base transition-colors min-w-[170px]"
              >
                Join the Dino Family
              </Link>
              <Link
                href="#perks"
                className="inline-flex items-center justify-center border border-white/40 hover:border-white/70 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold text-base transition-colors min-w-[170px]"
              >
                View Perks
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[280px] md:min-h-[420px]"
          >
            <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

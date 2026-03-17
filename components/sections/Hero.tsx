"use client";

import Link from "next/link";
import { motion } from "framer-motion";
export function Hero() {
  const backgroundStyle = {
    backgroundImage:
      "radial-gradient(circle at 12% 18%, rgba(34,197,94,0.18), transparent 28%), radial-gradient(circle at 82% 12%, rgba(59,130,246,0.16), transparent 32%), radial-gradient(circle at 50% 88%, rgba(236,72,153,0.14), transparent 30%), linear-gradient(135deg, #0b1220 0%, #05070d 50%, #0b1220 100%)",
    backgroundColor: "#05070d",
    backgroundSize: "cover",
  };

  return (
    <section
      className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-14 lg:py-16 -mt-8 md:-mt-10 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
      style={backgroundStyle}
    >
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-8 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="relative z-10 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#111827]/90 to-[#05070d]/95 border border-white/10 p-5 sm:p-6 md:p-10 lg:p-12 backdrop-blur-[2px] shadow-[0_30px_120px_rgba(5,7,13,0.55)]">
        <div className="relative z-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Official TikTok LIVE Partner
            </div>

            <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em]">
              Build Your <span className="text-primary">LIVE</span> Career
              <br />
              <span className="italic font-semibold">the Right Way</span>
            </h1>

            <div className="h-px w-full bg-white/10" />

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
              Official TikTok LIVE Partner Agency for creators in USA and
              Canada. Grow your audience and monetize your content with expert
              support.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/apply"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#b9e43a] hover:bg-[#c6f04a] text-black px-6 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-colors sm:min-w-[170px]"
              >
                Join the Dino Family
              </Link>
              <Link
                href="#why-join"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-white/40 hover:border-white/70 hover:bg-white/10 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition-colors sm:min-w-[170px]"
              >
                Why Join
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[240px] sm:min-h-[280px] md:min-h-[420px]"
          >
            <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

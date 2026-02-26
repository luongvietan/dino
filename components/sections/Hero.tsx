"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Official TikTok LIVE Partner
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
          Build Your <span className="text-primary">LIVE</span> Career the Right Way
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
          Official TikTok LIVE Partner Agency for creators in USA and Canada. Grow your audience and monetize your content with expert support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/apply" 
            className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/20 text-center"
          >
            Join the Dino Family
          </Link>
          <Link 
            href="#perks" 
            className="border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
          >
            View Perks
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-primary/10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <span className="material-symbols-outlined text-[120px] text-primary/80">stadium</span>
      </motion.div>
    </section>
  );
}

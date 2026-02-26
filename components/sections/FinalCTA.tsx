"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8 bg-slate-900 rounded-[3rem] p-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/10 opacity-50 blur-3xl rounded-full translate-y-1/2"></div>
        <h2 className="text-4xl md:text-5xl font-black text-white relative z-10 leading-tight">
          Ready to Take Your LIVE Streams to the Next Level?
        </h2>
        <p className="text-slate-400 text-lg relative z-10">
          Application takes less than 2 minutes. Our team will review and get back to you within 48 hours.
        </p>
        <div className="relative z-10 pt-4">
          <Link 
            href="/apply" 
            className="inline-block bg-primary hover:bg-primary/90 text-background-dark px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-primary/40"
          >
            Apply to Join Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

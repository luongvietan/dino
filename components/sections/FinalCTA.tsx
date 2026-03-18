"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

export function FinalCTA() {
  const t = useTranslations("finalCta");
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6 md:space-y-8 bg-slate-900 rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/10 opacity-50 blur-3xl rounded-full translate-y-1/2"></div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white relative z-10 leading-tight">
          {t("title")}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg relative z-10">
          {t("subtitle")}
        </p>
        <div className="relative z-10 pt-4">
          <Link 
            href="/apply" 
            className="inline-flex w-full sm:w-auto items-center justify-center bg-primary hover:bg-primary/90 text-background-dark px-7 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-xl transition-all hover:scale-105 shadow-2xl shadow-primary/40"
          >
            {t("button")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

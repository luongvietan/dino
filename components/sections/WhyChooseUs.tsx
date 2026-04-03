"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  return (
    <section className="max-w-7xl mx-auto overflow-x-clip px-4 sm:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">{t("title")}</h2>
          <div className="space-y-5 md:space-y-6 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-3 md:pt-4">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-primary mb-1">500+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">{t("stats.activeCreators")}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-primary mb-1">24/7</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">{t("stats.globalSupport")}</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] sm:aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 rotate-2 md:rotate-3 transition-transform hover:rotate-0">
            <div className="absolute inset-0">
              <video
                src="/guide.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

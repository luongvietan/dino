"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const itemsMeta = [
  { img: "/box2.jpg", large: true },
  { img: "/box1.jpg", large: false },
  { img: "/box3.jpg", large: false },
] as const;

export function StandOut() {
  const t = useTranslations("standOut");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        {t("title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr] gap-4 md:gap-5">
        {itemsMeta.map((meta, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`
              group relative overflow-hidden rounded-2xl md:rounded-3xl
              min-h-[280px] md:min-h-[320px]
              ${meta.large ? "md:row-span-2 md:min-h-0" : ""}
            `}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${meta.img}')` }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent
                         dark:from-black/90 dark:via-black/50"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-sm">
                {items[idx]?.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-xl drop-shadow-sm">
                {items[idx]?.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

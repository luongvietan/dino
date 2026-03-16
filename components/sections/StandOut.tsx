"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Unparalleled Network Reach",
    desc: "Leverage our extensive relationships with TikTok corporate to put your content in front of the right decision makers.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    large: true,
  },
  {
    title: "Creator-First Mentality",
    desc: "We prioritize your creative vision. We provide the structure so you can focus on being your authentic self.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    title: "Proven Track Record",
    desc: "Our creators consistently hit the TikTok Top Rankings. We have the data and the results to back up our methodologies.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    large: false,
  },
];

export function StandOut() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        What Makes Dino Network Stand Out
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr] gap-4 md:gap-5">
        {items.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`
              group relative overflow-hidden rounded-2xl md:rounded-3xl
              min-h-[280px] md:min-h-[320px]
              ${item.large ? "md:row-span-2 md:min-h-0" : ""}
            `}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.img}')` }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent
                         dark:from-black/90 dark:via-black/50"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-sm">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-xl drop-shadow-sm">
                {item.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

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
      
      <div className="space-y-6">
        {[
          {
            title: "Unparalleled Network Reach",
            desc: "Leverage our extensive relationships with TikTok corporate to put your content in front of the right decision makers.",
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          },
          {
            title: "Creator-First Mentality",
            desc: "Unlike other agencies, we prioritize your creative vision. We provide the structure so you can focus on being your authentic self.",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            reverse: true
          },
          {
            title: "Proven Track Record",
            desc: "Our creators consistently hit the TikTok Top Rankings. We have the data and the results to back up our methodologies.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-800 p-1 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all"
          >
            <div className={`w-full md:w-64 h-48 rounded-2xl overflow-hidden ${item.reverse ? 'order-1 md:order-2' : ''}`}>
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
            </div>
            <div className={`flex-grow p-6 ${item.reverse ? 'order-2 md:order-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

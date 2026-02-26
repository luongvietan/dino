"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="bg-slate-100 dark:bg-slate-900/50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Educational Guide</h4>
          <h2 className="text-3xl md:text-4xl font-bold">What Is a TikTok LIVE Agency?</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group aspect-video rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl"
        >
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492619334770-22e399301ee8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60"></div>
            <button className="z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center text-background-dark transition-transform group-hover:scale-110 shadow-2xl">
              <span className="material-symbols-outlined text-5xl fill-current">play_arrow</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-4">
              <div className="h-1.5 flex-grow rounded-full bg-white/20">
                <div className="h-full w-1/3 bg-primary rounded-full"></div>
              </div>
              <span className="text-xs font-mono text-white">0:37 / 2:23</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

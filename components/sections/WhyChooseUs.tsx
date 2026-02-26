"use client";

import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-black">Why Creators Choose Dino Network</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              Dino Network was built by a streamer who understands the creator&apos;s journey firsthand. Having streamed myself, I know the challenges, pressure, and dedication it takes to grow on TikTok LIVE.
            </p>
            <p>
              I&apos;ve seen too many creators join random agencies only to experience slow responses, lack of support, and poor guidance when they needed help the most. That&apos;s exactly why Dino Network was created — to be a creator-first network that actually cares.
            </p>
            <p>
              We focus on account protection, real engagement, and proven LIVE growth systems, all with the same shared goal: helping creators grow safely, earn consistently, and build something long-term — together.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <div className="text-4xl font-black text-primary mb-1">500+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-1">24/7</div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Global Support</div>
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
          <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-primary to-emerald-600 overflow-hidden shadow-2xl shadow-primary/20 rotate-3 transition-transform hover:rotate-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[200px] text-white/20">token</span>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

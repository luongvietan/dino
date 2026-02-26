"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "handshake",
    title: "TikTok Partner Agency",
    desc: "Support with growth, compliance, and monetization"
  },
  {
    icon: "psychology",
    title: "1-on-1 Coaching & Growth Tips",
    desc: "Performance-based LIVE strategy guidance"
  },
  {
    icon: "gavel",
    title: "Live Ban Assistance",
    desc: "Fast help resolving bans and restoring LIVE access"
  },
  {
    icon: "star",
    title: "Exclusive Perks & TikTok Events",
    desc: "Campaigns, bonus opportunities, and event invites"
  },
  {
    icon: "verified",
    title: "Live Pro Badge & Stream Key",
    desc: "Access to OBS/stream tools when eligible"
  },
  {
    icon: "groups",
    title: "Community Discord Server",
    desc: "Private support community and networking space"
  }
];

export function WhatWeProvide() {
  return (
    <section id="perks" className="bg-slate-50 dark:bg-slate-900/30 py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-black">What Dino Network Provides</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Hands-on support, account protection, and proven LIVE strategies to help creators grow safely and earn consistently.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">
                {benefit.icon}
              </span>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply to join Dino Network?",
    answer:
      "Dino Network is built for TikTok LIVE creators who want stronger support, better guidance, and a real community behind their growth. If you are actively streaming or ready to start taking LIVE seriously, you are welcome to apply.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application itself takes less than 2 minutes to complete. Once submitted, our team typically reviews it and responds within 48 hours.",
  },
  {
    question: "What kind of support do members receive?",
    answer:
      "Members get access to direct guidance, creator resources, community support, and strategic help around growing on TikTok LIVE. We focus on helping creators improve consistently, not just getting them in the door.",
  },
  {
    question: "Do I need to be a large creator to join?",
    answer:
      "No. We work with creators at different stages of growth. What matters most is that you are serious about improving your LIVE presence and willing to build with the community.",
  },
  {
    question: "Is there any cost to apply?",
    answer:
      "No. Applying is free, and submitting your application simply lets our team review whether Dino Network is a good fit for you.",
  },
];

export function FAQSection() {
  return (
    <section className="relative px-4 sm:px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-10 md:space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black md:text-5xl">
            Questions Creators Usually Ask
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Everything you need to know before applying to join Dino Network.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-sm transition-colors dark:border-slate-700 dark:bg-slate-900/80"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left">
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.question}
                </span>
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 group-open:rotate-180 dark:bg-slate-800 dark:text-slate-300">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <div className="border-t border-slate-200/80 px-4 sm:px-6 pb-5 sm:pb-6 pt-3.5 sm:pt-4 dark:border-slate-700">
                <p className="max-w-3xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  {item.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply to join Dino Network?",
    answer:
      "Anyone who actively livestreams is welcome to apply. We accept creators at all levels, whether you are just starting out or already established. Our goal is to help you grow by providing guidance, proven tips, and access to additional opportunities that are not typically available to independent creators. Dino Network is built to support you throughout your journey while continuing to grow a strong, supportive community of creators.",
  },
  {
    question: "How much does it cost to join?",
    answer:
      "Joining Dino Network is 100% free-there are no upfront costs or fees. We are partnered with TikTok. TikTok takes a percentage from the creator's earnings, and from that share, TikTok pays us a small percentage to help you grow and assist with any live-related issues. You never pay us directly-our focus is to support you and help you succeed.",
  },
  {
    question: "Am I locked into any sort of contracts?",
    answer:
      "There are no long-term contracts or lock-in commitments. Creators are free to leave at any time. Our focus is on delivering real results by providing support, growth opportunities, and valuable resources, so you choose to stay because of the value you receive, not because you are obligated to.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application process is quick and straightforward. Most applications are reviewed within a short timeframe, and once approved, onboarding can begin immediately. Once you submit your application, you will be asked to join our Discord server and open a ticket so we can assist you promptly. Our goal is to get you into the Dino Network family as soon as possible, so you are supported early and covered in case you run into any live issues.",
  },
  {
    question: "What kind of support do creators receive?",
    answer:
      "We provide real, hands-on support to help you grow on TikTok LIVE. This includes tips to improve your streams, increase engagement, and get more exposure. If you ever run into live issues-like suspensions or technical problems-we are here to help and can step in when needed. You will also get access to bonus opportunities and our Discord community, where you can connect with other creators and stay locked in. Overall, we are here to support you, guide you, and help you grow every step of the way.",
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

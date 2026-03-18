"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
} from "@/components/ui/carousel";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const testimonials = t.raw("items") as Array<{
    username: string;
    role: string;
    quote: string;
    img: string;
    sideImg: string;
    avatarSize: string;
    avatarPosition: string;
    url: string;
  }>;

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-10 md:space-y-16">
        <motion.div
          id="testimonials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 scroll-mt-28"
        >
          <h2 className="text-3xl sm:text-4xl font-black">{t("title")}</h2>
          <p className="text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel options={{ align: "start", loop: false }}>
            <div className="absolute left-3 sm:left-4 top-0 z-20 flex gap-2 sm:gap-3">
              <SliderPrevButton
                className="size-10 rounded-full border disabled:opacity-40 cursor-pointer border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={t("a11y.previous")}
              >
                <ChevronLeft className="size-4 text-primary" />
              </SliderPrevButton>
              <SliderNextButton
                className="size-10 rounded-full disabled:opacity-40 cursor-pointer border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={t("a11y.next")}
              >
                <ChevronRight className="size-4 text-primary" />
              </SliderNextButton>
            </div>

            <SliderContainer className="gap-4 sm:gap-6 pt-14 md:pt-20">
              {testimonials.map((item, idx) => (
                <Slider key={item.username} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.35 }}
                    className="relative overflow-visible bg-white dark:bg-slate-800 p-5 sm:p-7 md:p-10 pr-5 sm:pr-24 md:pr-36 rounded-2xl sm:rounded-3xl shadow-sm space-y-5 md:space-y-6"
                  >
                    <div className="hidden sm:block absolute top-2 right-4 md:right-6 -translate-y-1/3 md:-translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl rotate-3">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.sideImg}')` }}
                      ></div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="relative w-14 aspect-square shrink-0 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                              backgroundImage: `url('${item.img}')`,
                              backgroundSize: item.avatarSize,
                              backgroundPosition: item.avatarPosition,
                            }}
                          />
                        </div>
                        <div>
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-primary transition-colors"
                          >
                            {item.username}
                          </Link>
                          <p className="text-sm text-primary font-bold">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed">
                      &quot;{item.quote}&quot;
                    </p>
                  </motion.div>
                </Slider>
              ))}
            </SliderContainer>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

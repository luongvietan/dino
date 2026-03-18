"use client";

import React from 'react'
import {
  Handshake,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Users,
  Lightbulb,
  Gift,
  KeyRound,
} from 'lucide-react'
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
} from '@/components/ui/carousel'
import { useTranslations } from "next-intl"

const itemIcons = [
  {
    icon: Handshake,
    key: 0,
  },
  {
    icon: Lightbulb,
    key: 1,
  },
  {
    icon: ShieldCheck,
    key: 2,
  },
  {
    icon: Gift,
    key: 3,
  },
  {
    icon: KeyRound,
    key: 4,
  },
  {
    icon: Users,
    key: 5,
  },
]

export const FeatureFlow: React.FC = () => {
  const t = useTranslations("featureFlow")
  const items = t.raw("items") as Array<{ title: string; desc: string }>

  return (
    <section
      id="why-join"
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/30 relative"
    >
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Carousel options={{ align: 'start', loop: false }}>
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-6 inline-block">
                {t("badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
                {t("title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            <div className="flex flex-col w-full md:w-auto md:items-end gap-4">
              <div className="flex gap-4">
                <SliderPrevButton
                  className="size-12 rounded-full border disabled:opacity-40 cursor-pointer border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={t("a11y.previous")}
                >
                  <ChevronLeft className="size-5 text-primary" />
                </SliderPrevButton>
                <SliderNextButton
                  className="size-12 rounded-full disabled:opacity-40 cursor-pointer border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={t("a11y.next")}
                >
                  <ChevronRight className="size-5 text-primary" />
                </SliderNextButton>
              </div>
            </div>
          </div>

          <SliderContainer className="gap-4 sm:gap-6">
            {itemIcons.map((item, i) => (
              <Slider key={i} className="basis-full sm:basis-[85%] md:basis-1/3 lg:basis-1/4">
                <FlowCard icon={item.icon} title={items[item.key]?.title} desc={items[item.key]?.desc} />
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  )
}

type IconComponent = React.ComponentType<{ className?: string }>;

const FlowCard = ({ icon: Icon, title, desc }: { icon: IconComponent; title: string; desc: string }) => (
  <div className="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-5 sm:p-8 rounded-2xl flex flex-col gap-6 sm:gap-8 hover:border-primary/40 transition-colors h-full">
    <div className="size-10 flex items-center justify-center text-primary">
      <Icon className="size-8" />
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
)

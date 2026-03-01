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

const items = [
  {
    icon: Handshake,
    title: 'TikTok Partner Agency',
    desc: 'Support with growth, compliance, and monetization to build a safer, stronger LIVE presence.',
  },
  {
    icon: Lightbulb,
    title: '1-on-1 Coaching & Growth Tips',
    desc: 'Performance-based LIVE strategy guidance with practical coaching tailored to your stream goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Live Ban Assistance',
    desc: 'Fast help resolving bans and restoring LIVE access so your momentum is protected.',
  },
  {
    icon: Gift,
    title: 'Exclusive Perks & TikTok Events',
    desc: 'Campaigns, bonus opportunities, and event invites available to eligible Dino creators.',
  },
  {
    icon: KeyRound,
    title: 'Live Pro Badge & Stream Key',
    desc: 'Access to OBS and stream tools when eligible so you can level up production quality.',
  },
  {
    icon: Users,
    title: 'Community Discord Server',
    desc: 'Private support community and creator networking space for ongoing help and collaboration.',
  },
]

export const FeatureFlow: React.FC = () => {
  return (
    <section
      id="perks"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30 relative"
    >
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Carousel options={{ align: 'start', loop: false }}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-6 inline-block">
                Agency Perks
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                What Dino Network Provides
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                Hands-on support, account protection, and proven LIVE
                strategies to help creators grow safely and earn consistently.
              </p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-4">
                <SliderPrevButton
                  className="size-12 rounded-full border disabled:opacity-40 cursor-pointer border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="size-5 text-primary" />
                </SliderPrevButton>
                <SliderNextButton
                  className="size-12 rounded-full disabled:opacity-40 cursor-pointer border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="size-5 text-primary" />
                </SliderNextButton>
              </div>
            </div>
          </div>

          <SliderContainer className="gap-6">
            {items.map((item, i) => (
              <Slider key={i} className="basis-full md:basis-1/3 lg:basis-1/4">
                <FlowCard {...item} />
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  )
}

const FlowCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-8 rounded-2xl flex flex-col gap-8 hover:border-primary/40 transition-colors h-full">
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

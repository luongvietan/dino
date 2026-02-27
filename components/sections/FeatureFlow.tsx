import React from 'react'
import {
  Target,
  ChevronLeft,
  ChevronRight,
  Shield,
  Users,
  Waypoints,
  Lightbulb,
  BarChart3,
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
    icon: Waypoints,
    title: 'Official Partner Guidance',
    desc: 'Get direct agency support on growth, compliance, and monetization with clear weekly action plans.',
  },
  {
    icon: Lightbulb,
    title: '1-on-1 Coaching',
    desc: 'Receive performance-based LIVE coaching, content positioning tips, and practical stream improvements.',
  },
  {
    icon: Shield,
    title: 'Live Ban Assistance',
    desc: 'Fast support for account flags and LIVE restrictions so you can recover access and keep momentum.',
  },
  {
    icon: Target,
    title: 'Campaigns & Event Perks',
    desc: 'Join exclusive TikTok events, bonus campaigns, and seasonal opportunities available to agency creators.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    desc: 'Understand what drives retention and gifting with structured reporting and ongoing strategy reviews.',
  },
  {
    icon: Users,
    title: 'Creator Community Access',
    desc: 'Connect with other creators in our private network for support, collaboration, and shared wins.',
  },
]

export const FeatureFlow: React.FC = () => {
  return (
    <section
      id="perks"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
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

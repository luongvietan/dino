"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

type AcceptStep = {
  step: string;
  title: string;
  description: string;
  color: string;
};

const acceptSteps: AcceptStep[] = [
  {
    step: "Step 1",
    title: "Open the TikTok App",
    description: "Launch the TikTok app on your mobile device.",
    color: "#052e16",
  },
  {
    step: "Step 2",
    title: "Tap the \u2630 menu icon",
    description: "Look for the hamburger menu (\u2630) in the top right on your profile.",
    color: "#14532d",
  },
  {
    step: "Step 3",
    title: "Tap TikTok Studio",
    description: "Find and select 'TikTok Studio' from the menu options.",
    color: "#166534",
  },
  {
    step: "Step 4",
    title: "Tap LIVE Center",
    description: "Navigate to the LIVE Center section in TikTok Studio.",
    color: "#15803d",
  },
  {
    step: "Step 5",
    title: "Tap Join Creator Network",
    description: "Look for and select 'Join Creator Network' option.",
    color: "#16a34a",
  },
  {
    step: "Step 6",
    title: "Tap How to Join",
    description: "Click on the 'How to Join' button or link.",
    color: "#22c55e",
  },
  {
    step: "Step 7",
    title: "You'll see the agency invite",
    description: "Your Dino agency invitation will be displayed.",
    color: "#4ade80",
  },
  {
    step: "Step 8",
    title: "Tap Accept \u2705",
    description: "Click the Accept button to officially join Dino!",
    color: "#86efac",
  },
];

type StepCardProps = {
  i: number;
  step: AcceptStep;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

function StepCard({ i, step, progress, range, targetScale }: StepCardProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 1]);

  return (
    <div
      ref={container}
      className="h-[74vh] md:h-[82vh] sticky top-24 md:top-20 flex items-center justify-center"
    >
      <motion.article
        style={{
          scale,
          top: `calc(14px + ${i * 14}px)`,
          backgroundColor: step.color,
        }}
        className="relative w-full max-w-3xl rounded-3xl border border-white/20 p-6 md:p-10 shadow-2xl origin-top"
      >
        <motion.div style={{ opacity: contentOpacity }} className="space-y-4 text-white">
          <p className="inline-flex rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            {step.step}
          </p>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">{step.title}</h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">{step.description}</p>
        </motion.div>
      </motion.article>
    </div>
  );
}

export function AcceptStepsStack() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative pb-6">
      {acceptSteps.map((step, i) => {
        const targetScale = 1 - (acceptSteps.length - i) * 0.03;
        return (
          <StepCard
            key={step.step}
            i={i}
            step={step}
            progress={scrollYProgress}
            range={[i * 0.1, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

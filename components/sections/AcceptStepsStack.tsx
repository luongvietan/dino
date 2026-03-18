import { getTranslations } from "next-intl/server";

type AcceptStep = {
  stepNumber: number;
  title: string;
  description: string;
  color: string;
};

const acceptSteps: AcceptStep[] = [
  {
    stepNumber: 1,
    title: "steps.accept.items.0.title",
    description: "steps.accept.items.0.description",
    color: "#052e16",
  },
  {
    stepNumber: 2,
    title: "steps.accept.items.1.title",
    description: "steps.accept.items.1.description",
    color: "#14532d",
  },
  {
    stepNumber: 3,
    title: "steps.accept.items.2.title",
    description: "steps.accept.items.2.description",
    color: "#166534",
  },
  {
    stepNumber: 4,
    title: "steps.accept.items.3.title",
    description: "steps.accept.items.3.description",
    color: "#15803d",
  },
  {
    stepNumber: 5,
    title: "steps.accept.items.4.title",
    description: "steps.accept.items.4.description",
    color: "#16a34a",
  },
  {
    stepNumber: 6,
    title: "steps.accept.items.5.title",
    description: "steps.accept.items.5.description",
    color: "#22c55e",
  },
  {
    stepNumber: 7,
    title: "steps.accept.items.6.title",
    description: "steps.accept.items.6.description",
    color: "#4ade80",
  },
  {
    stepNumber: 8,
    title: "steps.accept.items.7.title",
    description: "steps.accept.items.7.description",
    color: "#86efac",
  },
];

export async function AcceptStepsStack() {
  const t = await getTranslations();
  return (
    <div className="grid gap-4 md:gap-5 pb-6">
      {acceptSteps.map((step) => (
        <article
          key={step.stepNumber}
          style={{ backgroundColor: step.color }}
          className="w-full rounded-3xl border border-white/20 p-6 md:p-8 shadow-xl"
        >
          <div className="space-y-4 text-white">
            <p className="inline-flex rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              {t("steps.accept.stepLabel", { number: step.stepNumber })}
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">{t(step.title)}</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">{t(step.description)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

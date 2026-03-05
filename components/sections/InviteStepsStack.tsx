type InviteStep = {
  step: string;
  title: string;
  description: string;
  color: string;
};

const inviteSteps: InviteStep[] = [
  {
    step: "Step 1",
    title: "Go to your TikTok Profile",
    description:
      "Open TikTok and tap on your profile picture in the bottom right corner.",
    color: "#052e16",
  },
  {
    step: "Step 2",
    title: "Tap the menu icon",
    description:
      "Look for the hamburger menu icon in the top right or the little arrow.",
    color: "#14532d",
  },
  {
    step: "Step 3",
    title: "Select TikTok Studio",
    description: "Find and tap on 'TikTok Studio' from the menu options.",
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
    title: "Go to Join Creator Network",
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
    title: "Find Your Invitation Code!",
    description: "Your unique invitation code will be displayed right there!",
    color: "#4ade80",
  },
];

export function InviteStepsStack() {
  return (
    <div className="grid gap-4 md:gap-5 pb-6">
      {inviteSteps.map((step) => (
        <article
          key={step.step}
          style={{ backgroundColor: step.color }}
          className="w-full rounded-3xl border border-white/20 p-6 md:p-8 shadow-xl"
        >
          <div className="space-y-4 text-white">
            <p className="inline-flex rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              {step.step}
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">{step.title}</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

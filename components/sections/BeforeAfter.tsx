import Image from "next/image";
import { Check, X } from "lucide-react";

const results = [
  {
    label: "Before Support",
    title: "Appeal not approved",
    image: "/before.jpg",
    alt: "TikTok notice showing an appeal was not approved",
    Icon: X,
    iconClassName:
      "text-rose-600 bg-rose-100 dark:text-rose-300 dark:bg-rose-500/20",
  },
  {
    label: "After Support",
    title: "Suspension lifted",
    image: "/after.jpg",
    alt: "Confirmation message showing account suspension was lifted",
    Icon: Check,
    iconClassName:
      "text-emerald-600 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-500/20",
  },
];

export function BeforeAfter() {
  return (
    <section id="results" className="relative px-4 sm:px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
            Real Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black md:text-5xl">
            Real Support Outcomes
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            From appeal rejected to account restored with guided support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {results.map((item) => (
            <article
              key={item.label}
              className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 dark:bg-slate-900/70 dark:border-slate-700 shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${item.iconClassName}`}
                  >
                    <item.Icon className="h-3.5 w-3.5" />
                  </span>
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FooterPrivilege } from "@/components/layout/FooterPrivilege";
import { Header } from "@/components/layout/Header";
import { InviteStepsStack } from "@/components/sections/InviteStepsStack";
import Image from "next/image";

export default function InvitePage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-background-light dark:bg-background-dark">
        <section className="px-4 sm:px-6 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="max-w-6xl mx-auto grid gap-8 lg:gap-14 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-7 lg:pr-2">
              <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Invitation Code
              </p>

              <h1 className="max-w-2xl text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="block">How to Find Your</span>
                <span className="block">TikTok Invitation Code</span>
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Follow these quick steps in your TikTok app - it takes less than 10 seconds.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#step-guide"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-slate-950 hover:bg-primary/90 transition-colors"
                >
                  Show me how
                </a>
                <a
                  href="#see-how-it-works"
                  className="rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  See How It Works
                </a>
              </div>

              <div
                id="see-how-it-works"
                className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-900/55 p-5 md:p-6"
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Invite Code</h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Follow along with this quick tutorial to find your TikTok invitation code in seconds.
                </p>
                <a
                  href="#step-guide"
                  className="inline-flex text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Continue to step-by-step guide
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-700 bg-white/65 dark:bg-slate-900/45 p-3 sm:p-4 shadow-lg">
                <Image
                  src="/HOW TO GET INVITATION CODE.gif"
                  alt="How to accept TikTok invitation code tutorial"
                  width={600}
                  height={1000}
                  unoptimized
                  className="mx-auto h-[62vh] sm:h-[72vh] lg:h-[calc(100vh-9rem)] w-auto max-w-full rounded-2xl object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Tutorial preview from TikTok app.
              </p>
            </div>
          </div>
        </section>

        <section id="step-guide" className="px-4 sm:px-6 pt-8 pb-20 md:pb-24 bg-slate-950">
          <div className="max-w-6xl mx-auto mb-10 md:mb-14 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.18em]">
              Follow these steps in your TikTok app
            </p>
            <h2 className="mt-3 max-w-3xl mx-auto text-3xl md:text-5xl font-black tracking-tight text-white">
              Find Your Invitation Code
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed">
              Just 7 simple steps and you'll have your code in less than 10 seconds!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <InviteStepsStack />
          </div>
        </section>
      </main>

      <FooterPrivilege />
    </>
  );
}

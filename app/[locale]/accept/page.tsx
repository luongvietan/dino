import { FooterPrivilege } from "@/components/layout/FooterPrivilege";
import { Header } from "@/components/layout/Header";
import { PhoneMockup } from "@/components/PhoneMockup";
import { AcceptStepsStack } from "@/components/sections/AcceptStepsStack";
import { getTranslations } from "next-intl/server";

export default async function AcceptPage() {
  const t = await getTranslations("acceptPage");
  const backgroundStyle = {
    backgroundImage:
      "radial-gradient(circle at 12% 18%, rgba(34,197,94,0.18), transparent 28%), radial-gradient(circle at 82% 12%, rgba(59,130,246,0.16), transparent 32%), radial-gradient(circle at 50% 88%, rgba(236,72,153,0.14), transparent 30%), linear-gradient(135deg, #0b1220 0%, #05070d 50%, #0b1220 100%)",
    backgroundColor: "#05070d",
  };

  return (
    <>
      <Header />

      <main
        className="relative flex-1 bg-background-light dark:bg-background-dark overflow-hidden"
        style={backgroundStyle}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.05),transparent_24%)]" />
        <section className="relative overflow-hidden px-4 sm:px-6 pt-4 pb-12 md:pt-8 md:pb-16">
          <div className="relative z-10 max-w-6xl mx-auto grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-start">
            <div className="min-w-0 space-y-6 lg:col-span-7 lg:pr-2">
              <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t("badge")}
              </p>

              <h1 className="max-w-2xl text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                <span className="block">{t("titleLine1")}</span>
                <span className="block">{t("titleLine2")}</span>
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href="#step-guide"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-slate-950 hover:bg-primary/90 transition-colors text-center w-full sm:w-auto"
                >
                  {t("primaryLink")}
                </a>
                <a
                  href="#see-how-it-works"
                  className="rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-primary/50 hover:text-primary transition-colors text-center w-full sm:w-auto"
                >
                  {t("secondaryLink")}
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div
                  id="see-how-it-works"
                  className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-900/55 p-5 md:p-6"
                >
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("card1Title")}</h2>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t("card1Body")}
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-900/55 p-5 md:p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("card2Title")}</h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t("card2Body")}
                  </p>
                  <a
                    href="#step-guide"
                    className="inline-flex text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {t("card2Cta")}
                  </a>
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-24">
              <div className="phone-mockup-wrapper rounded-3xl bg-white/65 dark:bg-slate-900/45 px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <PhoneMockup
                  src="/HOW TO ACCEPT INVITATION CODE.gif"
                  alt={t("phoneAlt")}
                  imgClassName="rounded-2xl"
                />
              </div>
              <p className="mt-3 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {t("previewCaption")}
              </p>
            </div>
          </div>
        </section>

        <section id="step-guide" className="px-4 sm:px-6 pt-8 pb-20 md:pb-24 bg-slate-950">
          <div className="max-w-6xl mx-auto mb-10 md:mb-14 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.18em]">
              {t("stepsKicker")}
            </p>
            <h2 className="mt-3 max-w-3xl mx-auto text-3xl md:text-5xl font-black tracking-tight text-white">
              {t("stepsTitle")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed">
              {t("stepsSubtitle")}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <AcceptStepsStack />
          </div>

          <div className="max-w-4xl mx-auto mt-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">{t("congratsTitle")}</h3>
            <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed">
              {t("congratsBody")}
            </p>
          </div>
        </section>
      </main>

      <FooterPrivilege />
    </>
  );
}


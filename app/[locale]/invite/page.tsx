import { FooterPrivilege } from "@/components/layout/FooterPrivilege";
import { Header } from "@/components/layout/Header";
import { PhoneMockup } from "@/components/PhoneMockup";
import { InviteStepsStack } from "@/components/sections/InviteStepsStack";
import { FaDiscord } from "react-icons/fa";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/navigation";
import { locales, type AppLocale } from "@/src/i18n/routing";

const SITE_URL = "https://thedinonetwork.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: maybeLocale } = await params;
  const locale = locales.includes(maybeLocale as AppLocale)
    ? (maybeLocale as AppLocale)
    : ("en" as AppLocale);

  const t = await getTranslations({ locale, namespace: "invitePage" });
  const pathname = `/${locale}/invite`;
  const title = `${t("titleLine1")} ${t("titleLine2")}`.trim();

  return {
    title,
    description: t("subtitle"),
    alternates: {
      canonical: pathname,
      languages: {
        en: "/en/invite",
        "tl-PH": "/fil/invite",
        "x-default": "/en/invite",
      },
    },
    openGraph: {
      title,
      description: t("subtitle"),
      url: pathname,
      images: ["/hero.webp"],
    },
    metadataBase: new URL(SITE_URL),
  };
}

export default async function InvitePage() {
  const t = await getTranslations("invitePage");
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
        <section className="relative overflow-hidden px-4 sm:px-6 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="relative z-10 max-w-6xl mx-auto grid gap-8 lg:gap-14 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-7 lg:pr-2">
              <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t("badge")}
              </p>

              <h1 className="max-w-2xl text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
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

              <div
                id="see-how-it-works"
                className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-900/55 p-5 md:p-6"
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t("cardTitle")}</h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t("cardBody")}
                </p>
                <a
                  href="#step-guide"
                  className="inline-flex text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {t("cardCta")}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="phone-mockup-wrapper rounded-3xl bg-white/65 dark:bg-slate-900/45 px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <PhoneMockup
                  src="/HOW TO GET INVITATION CODE.gif"
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

        <section id="step-guide" className="px-4 sm:px-6 pt-10 md:pt-14 pb-20 md:pb-24 bg-slate-950">
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
            <InviteStepsStack />
          </div>

          <div className="max-w-4xl mx-auto mt-4 rounded-3xl border border-white/15 bg-white/[0.03] p-5 sm:p-6 md:p-8 text-white backdrop-blur-sm">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-tight inline-flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary">key</span>
                {t("whatToDoTitle")}
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed">
                {t("whatToDoBody")}
              </p>

              <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px]">description</span>
                  {t("applicationForm")}
                </Link>
                <a
                  href="https://discord.gg/DinoNetwork"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/10 px-5 py-3 text-sm font-bold text-violet-100 hover:bg-violet-500/20 transition-colors"
                >
                  <FaDiscord className="mr-2 text-[18px]" aria-hidden />
                  {t("discord")}
                </a>
              </div>

              <p className="mt-4 text-xs sm:text-sm font-semibold text-violet-300 inline-flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-base">near_me</span>
                {t("chooseMethod")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterPrivilege />
    </>
  );
}


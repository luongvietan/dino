"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";
import { useLocale, useTranslations } from "next-intl";

export type ApplyRegion = "usa-canada" | "philippines";

type FormData = {
  region: string;
  invitationCode: string;
  isUsOrCanada: string;
  firstName: string;
  lastName: string;
  dobMonth: string;
  dobYear: string;
  email: string;
  tiktokUsername: string;
  onlyTiktokAccount: string;
  streamingFrequency: string;
  contentNiche: string;
  contentNicheOther: string;
  discordUsername: string;
};

const initialFormData: FormData = {
  region: "",
  invitationCode: "",
  isUsOrCanada: "",
  firstName: "",
  lastName: "",
  dobMonth: "",
  dobYear: "",
  email: "",
  tiktokUsername: "",
  onlyTiktokAccount: "",
  streamingFrequency: "",
  contentNiche: "",
  contentNicheOther: "",
  discordUsername: "",
};

const REGION_LABELS: Record<ApplyRegion, string> = {
  "usa-canada": "USA & Canada",
  philippines: "Philippines",
};

/** TikTok direct sign-up link per region */
const TIKTOK_APPLY_LINK: Record<ApplyRegion, string> = {
  "usa-canada": "https://www.tiktok.com/t/ZMB3WNJJ9/",
  philippines: "https://www.tiktok.com/t/ZSux6Wsut/",
};

/** Inline "Required" message shown under a field when validation fails */
function RequiredMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-amber-600/90 px-3 py-2 text-sm font-medium text-white">
      <span className="material-symbols-outlined text-base shrink-0">warning</span>
      <span>{message}</span>
    </div>
  );
}

export function ApplicationForm({ region: regionProp }: { region?: ApplyRegion } = {}) {
  const t = useTranslations("applicationForm");
  const locale = useLocale();
  const [step, setStep] = useState(0); // 0 = Landing, 1 = Getting Started, 2-9 = Questions, 10 = Rejection, 11 = Success
  const [formData, setFormData] = useState<FormData>(() => ({
    ...initialFormData,
    ...(regionProp && {
      region: REGION_LABELS[regionProp],
      isUsOrCanada: REGION_LABELS[regionProp],
    }),
  }));
  const hasRegion = Boolean(regionProp);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData | "turnstile", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const updateForm = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
    setError("");
    setFieldErrors(prev => {
      const next = { ...prev };
      for (const key of Object.keys(fields) as (keyof FormData)[]) next[key] = "";
      return next;
    });
  };

  const nextStep = () => {
    setFieldErrors({});

    if (step === 2) {
      if (formData.invitationCode.length !== 7) {
        setFieldErrors({ invitationCode: t("validation.required") });
        setError(t("validation.invitationLength"));
        return;
      }
      if (hasRegion) {
        setError("");
        setStep(4);
        return;
      }
    }
    if (step === 3 && !hasRegion) {
      if (formData.isUsOrCanada === t("steps.no")) {
        setStep(10); // Rejection
        return;
      }
      if (!formData.isUsOrCanada) {
        setFieldErrors({ isUsOrCanada: t("validation.required") });
        setError(t("validation.selectOption"));
        return;
      }
    }
    if (step === 4) {
      const missing: Partial<Record<keyof FormData, string>> = {};
      if (!formData.firstName?.trim()) missing.firstName = t("validation.required");
      if (!formData.lastName?.trim()) missing.lastName = t("validation.required");
      if (!formData.dobMonth) missing.dobMonth = t("validation.required");
      if (!formData.dobYear?.trim()) missing.dobYear = t("validation.required");
      if (!formData.email?.trim()) missing.email = t("validation.required");
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        missing.email = t("validation.emailInvalid");
      }
      if (Object.keys(missing).length > 0) {
        setFieldErrors(missing);
        setError(t("validation.requiredFields"));
        return;
      }
    }
    if (step === 5) {
      if (!formData.tiktokUsername?.trim()) {
        setFieldErrors({ tiktokUsername: t("validation.required") });
        setError(t("validation.tiktokRequired"));
        return;
      }
    }
    if (step === 6) {
      if (!formData.onlyTiktokAccount) {
        setFieldErrors({ onlyTiktokAccount: t("validation.required") });
        setError(t("validation.selectOption"));
        return;
      }
    }
    if (step === 7) {
      if (!formData.streamingFrequency) {
        setFieldErrors({ streamingFrequency: t("validation.required") });
        setError(t("validation.selectOption"));
        return;
      }
    }
    if (step === 8) {
      if (!formData.contentNiche) {
        setFieldErrors({ contentNiche: t("validation.required") });
        setError(t("validation.selectOption"));
        return;
      }
      const otherOption = (t.raw("steps.nicheOptions") as string[]).slice(-1)[0];
      if (formData.contentNiche === otherOption && !formData.contentNicheOther?.trim()) {
        setFieldErrors({ contentNicheOther: t("validation.required") });
        setError(t("validation.describeNiche"));
        return;
      }
    }
    if (step === 9) {
      const missing: Partial<Record<keyof FormData | "turnstile", string>> = {};
      if (!formData.discordUsername?.trim()) missing.discordUsername = t("validation.required");
      if (!turnstileToken) missing.turnstile = t("validation.captchaRequired");
      if (Object.keys(missing).length > 0) {
        setFieldErrors(missing);
        setError(t("validation.completeAll"));
        return;
      }
      submitForm();
      return;
    }

    setError("");
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (step > 0 && step < 10) {
      setError("");
      setFieldErrors({});
      if (step === 4 && hasRegion) {
        setStep(2);
      } else {
        setStep(prev => prev - 1);
      }
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken, locale })
      });
      if (res.ok) {
        setStep(11); // Success
      } else {
        const data = await res.json();
        if (data?.errorCode && typeof data.errorCode === "string") {
          const knownErrorCodes = [
            "captcha_missing",
            "captcha_failed",
            "email_send_failed",
            "internal_error",
          ] as const;
          const errorCode = knownErrorCodes.includes(data.errorCode as (typeof knownErrorCodes)[number])
            ? (data.errorCode as (typeof knownErrorCodes)[number])
            : null;

          if (errorCode) {
            setError(t(`apiErrors.${errorCode}`));
          } else {
            setError(t("submission.genericError"));
          }
        } else {
          setError(data.error || t("submission.genericError"));
        }
      }
    } catch {
      setError(t("submission.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  const isGettingStartedStep = step === 1;

  return (
    <div
      className={`w-full relative ${
        isGettingStartedStep
          ? "max-w-4xl flex items-center justify-center py-1"
          : "max-w-2xl mt-12 mb-20"
      }`}
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black">{t("landing.title")}</h1>
              <h2 className="text-2xl text-slate-600 dark:text-slate-400">{t("landing.subtitle")}</h2>
              <p className="text-lg text-primary font-medium">{t("landing.tagline")}</p>
            </div>
            <button onClick={nextStep} className="bg-primary hover:bg-primary/90 text-background-dark px-12 py-4 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary/20">
              {t("landing.begin")}
            </button>
            <p className="text-sm text-slate-500">{t("landing.duration")}</p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="getting-started"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-3xl space-y-5 md:space-y-6 rounded-3xl border border-violet-400/20 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/5 to-transparent p-5 md:p-7 text-center"
          >
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-violet-300">
              {t("gettingStarted.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">{t("gettingStarted.title")}</h2>
            <p className="text-base md:text-lg text-slate-200">{t("gettingStarted.subtitle")}</p>
            <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
              {t("gettingStarted.body")}
            </p>

            <div className="grid gap-2 sm:grid-cols-2 max-w-xl mx-auto text-left">
              {(t.raw("gettingStarted.bullets") as string[]).map(item => (
                <p key={item} className="inline-flex items-center gap-2 text-sm md:text-base text-slate-100">
                  <span className="material-symbols-outlined text-violet-400 text-[20px]">check_circle</span>
                  {item}
                </p>
              ))}
            </div>

            <button
              onClick={nextStep}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-lime-300 px-8 py-3.5 text-base font-black text-slate-950 shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all"
            >
              {t("gettingStarted.continue")}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5">arrow_forward</span>
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.invitationCodeTitle")}</h2>
            <div className="space-y-3">
              <p className="text-slate-600 dark:text-slate-400">
                {t("steps.invitationCodePath")}
              </p>
              <a
                href="/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {t("steps.needHelp")}
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
            <input 
              type="text" 
              maxLength={7}
              placeholder={t("steps.invitationPlaceholder")} 
              value={formData.invitationCode}
              onChange={e => updateForm({ invitationCode: e.target.value.toUpperCase() })}
              className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-6 py-4 text-2xl font-mono uppercase focus:ring-0 transition-colors ${
                fieldErrors.invitationCode ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
              }`}
              autoFocus
            />
            <RequiredMessage message={fieldErrors.invitationCode} />

            <div className="flex flex-col items-center gap-3 pt-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t("steps.or")}</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm text-center">
                {t("steps.preferDirect")}{" "}
                <a
                  href={regionProp ? TIKTOK_APPLY_LINK[regionProp] : TIKTOK_APPLY_LINK["usa-canada"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                  {t("steps.clickHere")}
                </a>
              </p>
            </div>
          </motion.div>
        )}

        {step === 3 && !hasRegion && (
          <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.locationQuestion")}</h2>
            <div className="space-y-4">
              {([t("steps.yes"), t("steps.no")] as const).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => { updateForm({ isUsOrCanada: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.isUsOrCanada === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : fieldErrors.isUsOrCanada 
                    ? "border-red-500 dark:border-red-500 hover:border-red-500" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <RequiredMessage message={fieldErrors.isUsOrCanada} />
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.basicInfoTitle")}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t("steps.basicInfoSubtitle")}</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">{t("steps.firstName")}</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={e => updateForm({ firstName: e.target.value })}
                  className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-4 py-3 focus:ring-0 transition-colors ${
                    fieldErrors.firstName ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                  }`}
                />
                <RequiredMessage message={fieldErrors.firstName} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">{t("steps.lastName")}</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={e => updateForm({ lastName: e.target.value })}
                  className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-4 py-3 focus:ring-0 transition-colors ${
                    fieldErrors.lastName ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                  }`}
                />
                <RequiredMessage message={fieldErrors.lastName} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">{t("steps.dobMonth")}</label>
                <select 
                  value={formData.dobMonth}
                  onChange={e => updateForm({ dobMonth: e.target.value })}
                  className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-4 py-3 focus:ring-0 transition-colors ${
                    fieldErrors.dobMonth ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                  }`}
                >
                  <option value="">{t("steps.selectMonth")}</option>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <RequiredMessage message={fieldErrors.dobMonth} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">{t("steps.dobYear")}</label>
                <input 
                  type="number" 
                  placeholder={t("steps.yearPlaceholder")}
                  value={formData.dobYear}
                  onChange={e => updateForm({ dobYear: e.target.value })}
                  className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-4 py-3 focus:ring-0 transition-colors ${
                    fieldErrors.dobYear ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                  }`}
                />
                <RequiredMessage message={fieldErrors.dobYear} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500">{t("steps.email")}</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => updateForm({ email: e.target.value })}
                className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-4 py-3 focus:ring-0 transition-colors ${
                  fieldErrors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                }`}
              />
              <RequiredMessage message={fieldErrors.email} />
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.tiktokUsernameTitle")}</h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t("steps.niceToMeet", { name: formData.firstName || t("steps.niceToMeetFallback") })}
            </p>
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400 pointer-events-none">@</span>
                <input 
                  type="text" 
                  placeholder={t("steps.tiktokPlaceholder")} 
                  value={formData.tiktokUsername}
                  onChange={e => updateForm({ tiktokUsername: e.target.value.replace('@', '') })}
                  className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl pl-12 pr-6 py-4 text-2xl focus:ring-0 transition-colors ${
                    fieldErrors.tiktokUsername ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                  }`}
                  autoFocus
                />
              </div>
              <RequiredMessage message={fieldErrors.tiktokUsername} />
            </div>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div key="step6" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.onlyAccountTitle")}</h2>
            <div className="space-y-4">
              {([t("steps.yes"), t("steps.no")] as const).map(option => (
                <button
                  key={option}
                  onClick={() => { updateForm({ onlyTiktokAccount: option }); }}
                  type="button"
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.onlyTiktokAccount === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : fieldErrors.onlyTiktokAccount 
                    ? "border-red-500 dark:border-red-500 hover:border-red-500" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <RequiredMessage message={fieldErrors.onlyTiktokAccount} />
          </motion.div>
        )}

        {step === 7 && (
          <motion.div key="step7" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.liveFrequencyTitle")}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t("steps.liveFrequencySubtitle")}</p>
            <div className="space-y-4">
              {(t.raw("steps.liveFrequencyOptions") as string[]).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => { updateForm({ streamingFrequency: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.streamingFrequency === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : fieldErrors.streamingFrequency 
                    ? "border-red-500 dark:border-red-500 hover:border-red-500" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <RequiredMessage message={fieldErrors.streamingFrequency} />
          </motion.div>
        )}

        {step === 8 && (
          <motion.div key="step8" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.nicheTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(t.raw("steps.nicheOptions") as string[]).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => { updateForm({ contentNiche: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.contentNiche === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : fieldErrors.contentNiche 
                    ? "border-red-500 dark:border-red-500 hover:border-red-500" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {formData.contentNiche === (t.raw("steps.nicheOptions") as string[]).slice(-1)[0] && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">{t("steps.nicheOtherLabel")}</label>
                <input
                  type="text"
                  placeholder={t("steps.nicheOtherPlaceholder")}
                  value={formData.contentNicheOther}
                  onChange={e => updateForm({ contentNicheOther: e.target.value })}
                  className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-4 py-3 focus:ring-0 transition-colors ${
                    fieldErrors.contentNicheOther ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                  }`}
                />
                <RequiredMessage message={fieldErrors.contentNicheOther} />
              </div>
            )}
            <RequiredMessage message={fieldErrors.contentNiche} />
          </motion.div>
        )}

        {step === 9 && (
          <motion.div key="step9" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">{t("steps.discordTitle")}</h2>
            <p className="text-slate-600 dark:text-slate-400">{t("steps.discordSubtitle")}</p>
            <div className="space-y-2">
              <input 
                type="text" 
                placeholder={t("steps.discordPlaceholder")} 
                value={formData.discordUsername}
                onChange={e => updateForm({ discordUsername: e.target.value })}
                className={`w-full bg-white dark:bg-slate-800 border-2 rounded-xl px-6 py-4 text-2xl focus:ring-0 transition-colors ${
                  fieldErrors.discordUsername ? "border-red-500 focus:border-red-500" : "border-slate-200 dark:border-slate-700 focus:border-primary"
                }`}
                autoFocus
              />
              <RequiredMessage message={fieldErrors.discordUsername} />
            </div>
            
            <div className="pt-4 flex flex-col items-center gap-2">
              <Turnstile 
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} // Use a fallback for dev
                onSuccess={(token) => { setTurnstileToken(token); setFieldErrors(prev => ({ ...prev, turnstile: "" })); }}
              />
              <RequiredMessage message={fieldErrors.turnstile} />
            </div>
          </motion.div>
        )}

        {step === 10 && (
          <motion.div key="step10" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8 py-12">
            <span className="material-symbols-outlined text-[80px] text-red-500">error</span>
            <h2 className="text-3xl font-bold">{t("steps.rejectionTitle")}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              {t("steps.rejectionBody")}
            </p>
          </motion.div>
        )}

        {step === 11 && (
          <motion.div key="step11" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8 py-12">
            <span className="text-6xl">🎉</span>
            <h2 className="text-4xl font-bold text-primary">{t("steps.successTitle")}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              {t("steps.successBody")}
            </p>
            <div className="pt-4">
              <a 
                href="https://discord.gg/DinoNetwork" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#5865F2]/20"
              >
                <span className="material-symbols-outlined">forum</span>
                {t("steps.joinDiscord")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      {step > 1 && step < 10 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 z-10"
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={prevStep}
                disabled={isSubmitting}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
                aria-label={t("navFooter.backA11y")}
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="text-sm font-medium text-slate-500">
                {t("navFooter.question", {
                  current: hasRegion ? (step === 2 ? 1 : step - 2) : step - 1,
                  total: hasRegion ? 7 : 8,
                })}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {error && <span className="text-red-500 text-sm font-medium animate-pulse">{error}</span>}
              <button 
                onClick={nextStep}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-lg font-bold text-lg transition-all flex items-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                ) : (
                  step === 9 ? t("navFooter.submit") : t("navFooter.next")
                )}
                {step !== 9 && !isSubmitting && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

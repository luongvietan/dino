"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";

type FormData = {
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
  discordUsername: string;
};

const initialFormData: FormData = {
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
  discordUsername: "",
};

export function ApplicationForm() {
  const [step, setStep] = useState(0); // 0 = Landing, 1-8 = Questions, 9 = Rejection, 10 = Success
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const updateForm = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
    setError("");
  };

  const nextStep = () => {
    // Validation
    if (step === 1) {
      if (formData.invitationCode.length !== 7) {
        setError("Invitation code must be exactly 7 characters long.");
        return;
      }
    }
    if (step === 2) {
      if (formData.isUsOrCanada === "No") {
        setStep(9); // Rejection
        return;
      } else if (!formData.isUsOrCanada) {
        setError("Please select an option.");
        return;
      }
    }
    if (step === 3) {
      if (!formData.firstName || !formData.lastName || !formData.dobMonth || !formData.dobYear || !formData.email) {
        setError("Please fill out all fields.");
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError("Please enter a valid email address.");
        return;
      }
    }
    if (step === 4 && !formData.tiktokUsername) {
      setError("Please enter your TikTok username.");
      return;
    }
    if (step === 5 && !formData.onlyTiktokAccount) {
      setError("Please select an option.");
      return;
    }
    if (step === 6 && !formData.streamingFrequency) {
      setError("Please select an option.");
      return;
    }
    if (step === 7 && !formData.contentNiche) {
      setError("Please select an option.");
      return;
    }
    if (step === 8) {
      if (!formData.discordUsername) {
        setError("Please enter your Discord username.");
        return;
      }
      if (!turnstileToken) {
        setError("Please complete the captcha.");
        return;
      }
      // Submit
      submitForm();
      return;
    }
    
    setError("");
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (step > 0 && step < 9) {
      setError("");
      setStep(prev => prev - 1);
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken })
      });
      if (res.ok) {
        setStep(10); // Success
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="w-full max-w-2xl mt-12 mb-20 relative">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black">Creator Application</h1>
              <h2 className="text-2xl text-slate-600 dark:text-slate-400">Welcome to the Dino Family</h2>
              <p className="text-lg text-primary font-medium">This is where your future starts.</p>
            </div>
            <button onClick={nextStep} className="bg-primary hover:bg-primary/90 text-background-dark px-12 py-4 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary/20">
              Begin
            </button>
            <p className="text-sm text-slate-500">Takes 1 minute</p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">1. Invitation Code</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Profile → Menu → TikTok Studio → Live Center → Tools and Resources → Join Creator Network → How to Join
            </p>
            <input 
              type="text" 
              maxLength={7}
              placeholder="7 characters" 
              value={formData.invitationCode}
              onChange={e => updateForm({ invitationCode: e.target.value.toUpperCase() })}
              className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-6 py-4 text-2xl font-mono uppercase focus:border-primary focus:ring-0 transition-colors"
              autoFocus
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">2. Are you located in the United States or Canada?</h2>
            <div className="space-y-4">
              {["Yes", "No"].map(option => (
                <button
                  key={option}
                  onClick={() => { updateForm({ isUsOrCanada: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.isUsOrCanada === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">3. Basic Information</h2>
            <p className="text-slate-600 dark:text-slate-400">Hey! 🦖 Please answer a few quick questions so we can learn more about you.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={e => updateForm({ firstName: e.target.value })}
                  className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-primary focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">Last Name</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={e => updateForm({ lastName: e.target.value })}
                  className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-primary focus:ring-0"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">Date of Birth (Month)</label>
                <select 
                  value={formData.dobMonth}
                  onChange={e => updateForm({ dobMonth: e.target.value })}
                  className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-primary focus:ring-0"
                >
                  <option value="">Select Month</option>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">Date of Birth (Year)</label>
                <input 
                  type="number" 
                  placeholder="YYYY"
                  value={formData.dobYear}
                  onChange={e => updateForm({ dobYear: e.target.value })}
                  className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-primary focus:ring-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500">Email Address</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => updateForm({ email: e.target.value })}
                className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:border-primary focus:ring-0"
              />
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">4. What is your TikTok username?</h2>
            <p className="text-slate-600 dark:text-slate-400">Nice to meet you, {formData.firstName || "there"}</p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">@</span>
              <input 
                type="text" 
                placeholder="dinonetworkus" 
                value={formData.tiktokUsername}
                onChange={e => updateForm({ tiktokUsername: e.target.value.replace('@', '') })}
                className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-6 py-4 text-2xl focus:border-primary focus:ring-0 transition-colors"
                autoFocus
              />
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">5. Is this your only TikTok account?</h2>
            <div className="space-y-4">
              {["Yes", "No"].map(option => (
                <button
                  key={option}
                  onClick={() => { updateForm({ onlyTiktokAccount: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.onlyTiktokAccount === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div key="step6" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">6. How often do you go LIVE on TikTok?</h2>
            <p className="text-slate-600 dark:text-slate-400">We verify activity on our end.</p>
            <div className="space-y-4">
              {["Daily", "Weekly", "Monthly", "I do not go LIVE at all"].map(option => (
                <button
                  key={option}
                  onClick={() => { updateForm({ streamingFrequency: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.streamingFrequency === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 7 && (
          <motion.div key="step7" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">7. What niche do you target with your content?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Gaming", "Battler", "Musician", "Dancer", "Fitness"].map(option => (
                <button
                  key={option}
                  onClick={() => { updateForm({ contentNiche: option }); }}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl font-medium ${
                    formData.contentNiche === option 
                    ? "border-primary bg-primary/10 text-primary" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 8 && (
          <motion.div key="step8" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <h2 className="text-3xl font-bold">8. Discord Username</h2>
            <p className="text-slate-600 dark:text-slate-400">Enter your Discord username (example: username#1234)</p>
            <input 
              type="text" 
              placeholder="username" 
              value={formData.discordUsername}
              onChange={e => updateForm({ discordUsername: e.target.value })}
              className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-6 py-4 text-2xl focus:border-primary focus:ring-0 transition-colors"
              autoFocus
            />
            
            <div className="pt-4 flex justify-center">
              <Turnstile 
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} // Use a fallback for dev
                onSuccess={(token) => setTurnstileToken(token)}
              />
            </div>
          </motion.div>
        )}

        {step === 9 && (
          <motion.div key="step9" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8 py-12">
            <span className="material-symbols-outlined text-[80px] text-red-500">error</span>
            <h2 className="text-3xl font-bold">Application Unsuccessful</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Sorry, but you do not qualify for our LIVE Agency. We are only accepting creators based in the United States or Canada.
            </p>
          </motion.div>
        )}

        {step === 10 && (
          <motion.div key="step10" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8 py-12">
            <span className="text-6xl">🎉</span>
            <h2 className="text-4xl font-bold text-primary">Thank you so much for your application!</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Join our Discord server and open an Application Ticket once the form is completed.
            </p>
            <div className="pt-4">
              <a 
                href="https://discord.gg/DinoNetwork" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#5865F2]/20"
              >
                <span className="material-symbols-outlined">forum</span>
                Join Discord Server
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      {step > 0 && step < 9 && (
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
              >
                <span className="material-symbols-outlined">expand_less</span>
              </button>
              <div className="text-sm font-medium text-slate-500">
                Step {step} of 8
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
                  step === 8 ? "Submit" : "Next"
                )}
                {step !== 8 && !isSubmitting && <span className="material-symbols-outlined">expand_more</span>}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

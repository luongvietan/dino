"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCreatorPathwayOpen, setIsMobileCreatorPathwayOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileCreatorPathwayOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-2 sm:top-4 z-50 w-full px-3 sm:px-4">
      <div className="relative max-w-7xl mx-auto">
        <div className="h-14 sm:h-16 flex items-center justify-between rounded-2xl sm:rounded-full border border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 sm:px-6 shadow-sm">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Dino Network Logo" width={68} height={68} className="object-contain w-14 h-14 sm:w-18 sm:h-18" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1">
                Creator Pathway
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[28rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden p-3"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/invite" className="block rounded-lg px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Invitation Code</p>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-snug">
                          Learn how to get your invitation code
                        </p>
                      </Link>
                      <Link href="/accept" className="block rounded-lg px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Accept Invitation</p>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-snug">
                          Learn how to accept an invitation
                        </p>
                      </Link>
                    </div>
                    <Link
                      href="/join"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-primary/90 transition-colors"
                    >
                      Getting Started
                      <span className="material-symbols-outlined text-base">chevron_right</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href={{ pathname: "/", hash: "why-join" }}
            >
              Why Join
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href={{ pathname: "/", hash: "testimonials" }}
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link 
              href="/join" 
              className="inline-flex bg-primary hover:bg-primary/90 text-background-dark px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-lg shadow-primary/20"
            >
              Join Now
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              <span className="material-symbols-outlined text-xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-navigation-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 shadow-sm"
            >
              <div className="flex flex-col gap-1">
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
                  href="/"
                >
                  Home
                </Link>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
                  <button
                    type="button"
                    onClick={() => setIsMobileCreatorPathwayOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-base font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <span>Creator Pathway</span>
                    <span className="material-symbols-outlined text-base">
                      {isMobileCreatorPathwayOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {isMobileCreatorPathwayOpen && (
                    <div className="pb-2">
                      <Link onClick={() => setIsMobileMenuOpen(false)} className="block px-7 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" href="/invite">Invitation Code</Link>
                      <Link onClick={() => setIsMobileMenuOpen(false)} className="block px-7 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" href="/accept">Accept Invitation</Link>
                    </div>
                  )}
                </div>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
                  href={{ pathname: "/", hash: "why-join" }}
                >
                  Why Join
                </Link>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
                  href={{ pathname: "/", hash: "testimonials" }}
                >
                  Testimonials
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

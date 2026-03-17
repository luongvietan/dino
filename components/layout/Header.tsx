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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
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
            <Image src="/logo.jpeg" alt="Dino Network Logo" width={50} height={50} className="object-contain sm:w-14 sm:h-14" />
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
                    className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden py-2"
                  >
                    <Link href="/apply" className="block px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Onboarding</Link>
                    <Link href="/invite" className="block px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Invitation Code</Link>
                    <Link href="/accept" className="block px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Accept Invitation</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              href={{ pathname: "/", hash: "perks" }}
            >
              Perks
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
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-background-dark px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20"
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
                <Link onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/">Home</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/apply">Onboarding</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/invite">Invitation Code</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/accept">Accept Invitation</Link>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  href={{ pathname: "/", hash: "perks" }}
                >
                  Perks
                </Link>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  href={{ pathname: "/", hash: "testimonials" }}
                >
                  Testimonials
                </Link>
              </div>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href="/join"
                className="mt-3 inline-flex w-full items-center justify-center bg-primary hover:bg-primary/90 text-background-dark px-5 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20"
              >
                Join Now
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

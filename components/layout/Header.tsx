"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between rounded-full border border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.webp" alt="Dino Network Logo" width={40} height={40} className="object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
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
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden py-2"
                >
                  <Link href="/apply" className="block px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Getting Started</Link>
                  <Link href="/apply" className="block px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Invitation Code</Link>
                  <Link href="/apply" className="block px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Accept Invitation</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/#perks">Perks</Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/#testimonials">Testimonials</Link>
        </nav>
        <Link 
          href="/apply" 
          className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}

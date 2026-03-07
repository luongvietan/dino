import Link from "next/link";
import Image from "next/image";
import { MeshGradientBackground } from "@/components/ui/MeshGradientBackground";

export const FooterPrivilege = () => {
  return (
    <footer className="relative overflow-hidden font-display bg-gradient-to-b from-[#0f172a] via-[#0a1222] to-[#03050b] text-white pt-12 md:pt-16 pb-8 md:pb-10 px-4 sm:px-6 md:px-8 border-t border-white/15 rounded-t-[2rem] md:rounded-t-[3.5rem] min-h-[440px] md:min-h-[540px]">
      <MeshGradientBackground className="opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/20 via-primary/8 to-transparent blur-2xl" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Official TikTok LIVE Partner
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.03em] mt-5 md:mt-6 mb-3 md:mb-4">
            Dino Network.
          </h2>
          <div className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-sm overflow-hidden">
              <Image
                src="/logo.webp"
                alt="Dino Network logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base sm:text-xl md:text-2xl font-semibold tracking-tight text-slate-200">
              TikTok LIVE Partner
            </span>
          </div>
        </div>

        <div className="space-y-6 md:space-y-7 md:mt-6">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.03em] text-slate-300">
            Built for <span className="text-primary">LIVE</span> Creators.
          </h2>
          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Trusted by creators across the USA and Canada to grow faster on
            TikTok LIVE with expert support, strategic campaigns, and a
            community that backs you every day.
          </p>
          <Link
            href="/apply"
            className="inline-flex w-full sm:w-auto items-center justify-center bg-[#b9e43a] hover:bg-[#c6f04a] text-black px-6 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-colors sm:min-w-[245px]"
          >
            Join the Dino Family
          </Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 pt-3 md:pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-slate-500 gap-1 md:gap-4">
        <p className="text-center md:text-left">© 2026 DINO NETWORK</p>
        <p className="text-center md:text-left">All Rights Reserved</p>
        <p className="text-center md:text-left">USA & Canada Official TikTok LIVE Partner Agency</p>
      </div>
    </footer>
  );
};

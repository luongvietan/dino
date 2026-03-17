import Link from "next/link";
import Image from "next/image";

export const FooterPrivilege = () => {
  const backgroundStyle = {
    backgroundImage:
      "radial-gradient(circle at 14% 22%, rgba(34,197,94,0.16), transparent 28%), radial-gradient(circle at 86% 18%, rgba(59,130,246,0.14), transparent 30%), radial-gradient(circle at 48% 90%, rgba(236,72,153,0.12), transparent 30%), linear-gradient(180deg, #0b1220 0%, #05070d 55%, #03050b 100%)",
    backgroundColor: "#05070d",
  };

  return (
    <footer
      className="relative overflow-hidden font-display text-white pt-12 md:pt-16 pb-8 md:pb-10 px-4 sm:px-6 md:px-8 border-t border-white/15 rounded-t-[2rem] md:rounded-t-[3.5rem] min-h-[440px] md:min-h-[540px] shadow-[0_-20px_120px_rgba(5,7,13,0.45)]"
      style={backgroundStyle}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary/20 via-primary/8 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_70%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">
        <div>
          <div className="mb-4">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3">
              Find Us on Social Media
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.tiktok.com/@dinonetworkus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors text-sm"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </span>
                @dinonetworkus
              </a>
              <a
                href="https://discord.gg/dinonetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors text-sm"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </span>
                discord.gg/dinonetwork
              </a>
            </div>
          </div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Official TikTok LIVE Partner
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.03em] mt-5 md:mt-6 mb-3 md:mb-4">
            Dino Network.
          </h2>
          <div className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-sm overflow-hidden">
              <Image
                src="/logo.jpeg"
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

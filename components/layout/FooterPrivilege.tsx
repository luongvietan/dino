import Link from "next/link";
import Image from "next/image";

export const FooterPrivilege = () => {
  return (
    <footer className="font-display bg-white dark:bg-zinc-950 text-black dark:text-white py-20 px-8 border-t border-gray-100 dark:border-zinc-900 rounded-t-[3.5rem] transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div>
          <h2 className="text-7xl font-light tracking-tighter mb-4">
            Dino Network.
          </h2>
          <div className="mt-16 flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm overflow-hidden border border-gray-200 dark:border-zinc-800">
              <Image
                src="/logo.webp"
                alt="Dino Network logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              TikTok LIVE Partner
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-7xl font-light tracking-tighter text-gray-400 dark:text-zinc-700">
            Built for Creators.
          </h2>
          <p className="max-w-md text-gray-500 dark:text-zinc-400 font-light leading-relaxed">
            We help creators in the USA and Canada grow faster on TikTok LIVE
            with expert coaching, weekly campaigns, and dedicated support.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center bg-[#b9e43a] hover:bg-[#c6f04a] text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-[0.16em] transition-colors min-w-[245px]"
          >
            Join the Dino Family
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-gray-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 dark:text-zinc-600">
        <p>© 2026 DINO NETWORK</p>
        <p>ALL RIGHTS RESERVED</p>
        <p>OFFICIAL TIKTOK LIVE PARTNER AGENCY</p>
      </div>
    </footer>
  );
};

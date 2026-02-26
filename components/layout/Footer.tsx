import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-16 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="Dino Network Logo" width={32} height={32} className="object-contain" />
            <h2 className="text-lg font-bold">Dino Network</h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            The premier destination for TikTok LIVE creators in North America. Professionalism, growth, and community.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link className="hover:text-primary transition-colors" href="#">Our Creators</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Success Stories</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/#perks">Agency Perks</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Creator Agreement</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <p className="text-sm text-slate-500 mb-4">Questions? Reach out to our team.</p>
          <a className="text-primary font-bold" href="mailto:hello@dinonetwork.live">hello@dinonetwork.live</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 font-medium">
        © 2024 Dino Network. All rights reserved. TikTok is a trademark of ByteDance Ltd.
      </div>
    </footer>
  );
}

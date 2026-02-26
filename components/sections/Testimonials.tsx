"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    username: "@huntski0",
    followers: "Gaming Streamer",
    quote: "Hey guys! My name is Hunter, my TikTok is @hunt2active. I stream Fortnite and I am a fairly new streamer to TikTok and have been on my journey since July. I've been a member of Dino Network for 2 months now and I have nothing but positive feedback since being a member of the best agency on the app. Dino has helped me with more than just TikTok questions, a genuine agency and person that will talk to you about anything and everything and is nothing but supportive. Dino offers so much more than anyone could ask for and joining was the best decision I've made since clicking that go live button! The community we have and the people I've met through this is incredible! I would highly recommend Dino Network to anyone new to the app or looking for an agency! DINO ON TOP",
    img: "/hunt.webp",
    avatarSize: "110%",
    avatarPosition: "center 105%",
    url: "https://www.tiktok.com/@huntski0"
  },
  {
    username: "@jona_breton",
    followers: "Live Battler",
    quote: "Hey guys! My name is Jonathan and my TikTok is @jona_breton. I do Banter Battles on TikTok and sometimes stream games on here, still fairly new to my streaming journey. I've been with Dino Network for a little over a month now and honestly have nothing but positive feedback. The community Dino has built is something special, any questions or concerns I've ever had, Dino has been there to answer. We get 1 on 1 support when we need it, a whole discord so we can communicate with others in the agency and so much more! I would 100 percent recommend Dino Network to anyone who's new to streaming and wants to join an amazing community! You won't regret it!",
    img: "/jona.webp",
    avatarSize: "110%",
    avatarPosition: "center",
    url: "https://www.tiktok.com/@jona_breton"
  },
  {
    username: "@billyswilly",
    followers: "Gaming Streamer",
    quote: "* Yurrr wsg guys, this is Billy (@billyswilly_). l joined Dino Network because they're U.S.based and I saw other real creators already in the family, so I knew it was legit. After joining, I realized they're trustworthy and really focused on helping you grow. I don't regret it one bit. The community is super supportive. They give 1-on-1 help, assist with getting a stream key, and have a Discord full of guides and resources. Dino has helped me a lot, and this agency honestly stands out. From quick personal support to and even picking creators for TikTok events—no one else is doing that. It's more than an agency, it's a community. I love Dino Network and will be with them till the end. I have no regrets and 100% recommend them! Big shoutout to DINO NETWORK!",
    img: "/billy.webp",
    avatarSize: "110%",
    avatarPosition: "center",
    url: "https://www.tiktok.com/@billyswilly"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary/5 py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-black">The Dino Family Speaks</h2>
          <p className="text-slate-600 dark:text-slate-400">
            See what creators say about being part of a network that truly supports them.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 aspect-square shrink-0 rounded-full bg-slate-200 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${t.img}')`,
                      backgroundSize: t.avatarSize,
                      backgroundPosition: t.avatarPosition,
                    }}
                  ></div>
                </div>
                <div>
                  <Link href={t.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition-colors">
                    {t.username}
                  </Link>
                  <p className="text-xs text-primary font-bold">{t.followers}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic">&quot;{t.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

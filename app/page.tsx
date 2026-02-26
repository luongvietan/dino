import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WhatWeProvide } from "@/components/sections/WhatWeProvide";
import { StandOut } from "@/components/sections/StandOut";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <VideoSection />
        <WhyChooseUs />
        <WhatWeProvide />
        <StandOut />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

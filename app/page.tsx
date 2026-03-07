import { Header } from "@/components/layout/Header";
import { FooterPrivilege } from "@/components/layout/FooterPrivilege";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeatureFlow } from "@/components/sections/FeatureFlow";
import { StandOut } from "@/components/sections/StandOut";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <VideoSection />
        <WhyChooseUs />
        <FeatureFlow />
        <StandOut />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterPrivilege />
    </>
  );
}

import Community from "@/components/Community";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowToOpen from "@/components/HowToOpen";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import WhosWho from "@/components/WhosWho";
import WhyArihant from "@/components/WhyArihant";
import WhyFamilies from "@/components/WhyFamilies";
import GreenStrip from "@/components/GreenStrip";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-x-clip focus:outline-none">
        <Hero />
        <GreenStrip />
        <WhyFamilies />
        <Steps />
        <WhyArihant />
        <Stats />
        <WhosWho />
        <Testimonials />
        <Community />
        <HowToOpen />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

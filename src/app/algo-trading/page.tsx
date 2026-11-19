import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AlgoLeadForm from "@/components/algo/AlgoLeadForm";
import AlgoTestimonials from "@/components/algo/AlgoTestimonials";
import AlgoBanner from "@/components/AlgoBanner";

export const metadata: Metadata = {
  title: "Arihant Capital - Master the art of Algo Trading",
  description:
    "Unlock the secrets of the stock market with Masterclass by Arihant Capital — your destination for mastering algorithmic trading.",
};

export default function AlgoTradingPage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="relative overflow-x-clip focus:outline-none">
        <AlgoBanner/>
        <div className="container-page relative lg:pb-[160px]">
          <AlgoTestimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}

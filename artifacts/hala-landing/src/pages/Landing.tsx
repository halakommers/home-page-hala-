import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyHala from "@/components/WhyHala";
import ServicesGrid from "@/components/ServicesGrid";
import ForWhom from "@/components/ForWhom";
import OrderJourney from "@/components/OrderJourney";
import Stats from "@/components/Stats";
import GrowthSupport from "@/components/GrowthSupport";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyHala />
        <ServicesGrid />
        <ForWhom />
        <OrderJourney />
        <Stats />
        <GrowthSupport />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
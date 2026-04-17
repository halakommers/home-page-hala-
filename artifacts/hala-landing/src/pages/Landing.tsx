import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyHala from "@/components/WhyHala";
import ServicesGrid from "@/components/ServicesGrid";
import ForWhom from "@/components/ForWhom";
import OrderJourney from "@/components/OrderJourney";
import DashboardShowcase from "@/components/DashboardShowcase";
import Stats from "@/components/Stats";
import GrowthSupport from "@/components/GrowthSupport";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import StructuredData, { organizationSchema, websiteSchema, serviceSchema } from "@/components/StructuredData";
import { useSEO } from "@/hooks/useSEO";

export default function Landing() {
  useSEO({
    title: "شريكك التشغيلي للتجارة الإلكترونية في الخليج",
    description: "هلا كوميرس — شريك التشغيل المتكامل للتجارة الإلكترونية في الخليج. توريد، تخزين، تأكيد طلبات، شحن، وتحصيل نقدي في السعودية والإمارات والكويت والبحرين وقطر وعُمان.",
    keywords: "تجارة إلكترونية خليج, شحن السعودية, تخزين منتجات, تأكيد طلبات COD, فولفيلمنت, هلا كوميرس, e-commerce fulfillment Saudi Arabia, فولفيلمنت الخليج",
    canonical: "/",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground w-full overflow-x-hidden">
      <StructuredData schema={[organizationSchema, websiteSchema, serviceSchema]} id="landing-schema" />
      <Navbar />
      <main>
        <Hero />
        <SectionCTA />
        <TrustBar />
        <WhyHala />
        <SectionCTA />
        <ServicesGrid />
        <SectionCTA />
        <ForWhom />
        <SectionCTA />
        <OrderJourney />
        <DashboardShowcase />
        <SectionCTA />
        <Stats />
        <GrowthSupport />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}
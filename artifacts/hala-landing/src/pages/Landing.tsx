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
import StructuredData, { faqSchema, organizationSchema, serviceSchema, websiteSchema } from "@/components/StructuredData";
import { useSEO } from "@/hooks/useSEO";

export default function Landing() {
  useSEO({
    title: "فولفيلمنت وتشغيل تجارة إلكترونية في السعودية والخليج",
    description: "هلا كوميرس تساعد البائعين على تشغيل متاجرهم في السعودية والخليج: توريد من الصين، تخزين، تغليف، تأكيد طلبات COD، شحن، تحصيل، ولوحة تحكم عربية.",
    keywords: "فولفيلمنت السعودية, فولفيلمنت الخليج, تشغيل متجر إلكتروني, تخزين وشحن للمتاجر, تأكيد طلبات COD, شحن الدفع عند الاستلام, تحصيل نقدي, هلا كوميرس, ecommerce fulfillment Saudi Arabia, logistics GCC",
    canonical: "/",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground w-full overflow-x-hidden">
      <StructuredData schema={[organizationSchema, websiteSchema, serviceSchema, faqSchema]} id="landing-schema" />
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

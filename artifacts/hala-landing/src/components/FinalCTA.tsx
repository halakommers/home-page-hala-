import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary to-[#1E1A4D]">
      {/* Decorative background dot pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#E85D1F 2px, transparent 2px)",
          backgroundSize: "32px 32px"
        }}
      ></div>

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-[32px] md:text-[48px] font-extrabold text-white leading-[1.2] mb-6 max-w-3xl">
            جاهز تبدأ التوسع في الخليج؟
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-white/80 leading-[1.7] max-w-[600px] mb-10">
            احجز استشارة مجانية مع فريق هلا، واحصل على خطة تشغيل مخصصة لنشاطك خلال 24 ساعة.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-accent text-white hover:bg-accent/90 text-[16px] font-bold h-14 px-8 rounded-[10px]" data-testid="button-cta-primary">
              احجز استشارة مجانية
            </Button>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white text-[16px] font-bold h-14 px-8 rounded-[10px]" data-testid="button-cta-secondary">
              اطلب عرض أسعار
            </Button>
          </div>
          
          <div className="text-[13px] text-white/60 font-medium flex items-center justify-center gap-2">
            <span>بدون التزام</span>
            <span className="text-white/30">•</span>
            <span>إلغاء في أي وقت</span>
            <span className="text-white/30">•</span>
            <span>نرد خلال 24 ساعة</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
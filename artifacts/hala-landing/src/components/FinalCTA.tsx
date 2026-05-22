import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CommerceBackdrop from "@/components/CommerceBackdrop";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section className="section-surface py-14 md:py-28 relative bg-primary">
      <CommerceBackdrop variant="deep" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center px-2 py-6 md:px-12 md:py-12"
        >
          <h2 className="text-[30px] md:text-[46px] font-bold text-white leading-[1.25] mb-5 max-w-3xl">
            جاهز تشغّل متجرك في الخليج بدون متابعة كل تفصيلة؟
          </h2>
          
          <p className="text-[17px] md:text-[19px] text-white/78 leading-[1.8] max-w-[600px] mb-8">
            افتح حساب بائع الآن، أو احجز مكالمة قصيرة لتحصل على تصور واضح للتوريد، التخزين، تأكيد الطلبات، الشحن، والتحصيل المناسب لنشاطك.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7 w-full sm:w-auto">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-cta-primary">
              <Button className="conversion-button w-full bg-accent text-white hover:bg-accent/90 text-[16px] font-semibold h-13 px-8 rounded-lg">
                افتح حساب بائع مجاناً
                <ArrowLeft size={18} />
              </Button>
            </a>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-cta-secondary">
              <Button variant="outline" className="w-full bg-transparent border border-white/28 text-white hover:bg-white/10 hover:text-white text-[16px] font-semibold h-13 px-8 rounded-lg">
                احجز مكالمة تشغيل مجانية
              </Button>
            </a>
          </div>
          
          <div className="text-[13px] text-white/60 font-medium flex items-center justify-center gap-2">
            <span>مكالمة مجانية</span>
            <span className="text-white/30">•</span>
            <span>بدون التزام في الاستشارة</span>
            <span className="text-white/30">•</span>
            <span>نرد خلال 24 ساعة</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

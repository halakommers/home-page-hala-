import { motion } from "framer-motion";
import CommerceBackdrop from "@/components/CommerceBackdrop";

export default function WhyHala() {
  return (
    <section className="section-surface py-14 md:py-24 bg-background relative">
      <CommerceBackdrop variant="light" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="brand-card rounded-2xl px-5 py-10 md:px-10 md:py-14 flex flex-col items-center text-center relative overflow-hidden"
        >
          <span className="brand-pill text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2 relative">هلا أكثر من شركة شحن أو مستودع</span>
          
          <h2 className="text-[27px] md:text-[42px] font-bold text-foreground leading-[1.25] mb-5 max-w-3xl relative">
            كل ما يحدث بعد الإعلان والبيع، نرتبه لك في مسار واحد
          </h2>
          
          <p className="text-[17px] md:text-[18px] text-muted-foreground leading-[1.85] max-w-[760px] relative">
            بدل ما تتابع مورد، ومخزن، وفريق تأكيد، وشركة شحن، وحسابات التحصيل كل يوم، هلا كوميرس تجمعها في تشغيل واحد واضح: من المصنع في الصين إلى مستودعات الخليج، ثم إلى يد العميل، ثم إلى تسوية مستحقاتك.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

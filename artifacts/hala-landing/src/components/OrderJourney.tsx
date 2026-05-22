import { motion } from "framer-motion";
import CommerceBackdrop from "@/components/CommerceBackdrop";

export default function OrderJourney() {
  const steps = [
    { title: "نحدد مسار التشغيل", desc: "نراجع المنتج والسوق وطريقة الدفع والكميات المطلوبة" },
    { title: "نجهز المخزون", desc: "نرتب التوريد أو الاستلام والتخزين والفحص داخل الخليج" },
    { title: "نؤكد الطلبات", desc: "نتواصل مع العميل لتقليل الطلبات غير الجادة قبل الشحن" },
    { title: "نغلف ونشحن", desc: "نجهز الطلب ونسلمه لشركة الشحن المناسبة" },
    { title: "نتابع التسليم", desc: "تتبّع لحظي لحالة الطلبات والمرتجعات من لوحة التحكم" },
    { title: "نرتب التحصيل", desc: "تسويات واضحة للطلبات المسلّمة حسب المواعيد المتفق عليها" }
  ];

  return (
    <section id="how-it-works" className="section-surface py-14 md:py-28 bg-secondary scroll-mt-20">
      <CommerceBackdrop variant="warm" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="brand-pill inline-block text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2">كيف يبدأ التشغيل؟</span>
          <h2 className="text-[27px] md:text-[44px] font-bold text-foreground leading-[1.25] md:leading-[1.2] px-2">
            رحلة واضحة من أول منتج إلى أول تسوية مالية
          </h2>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-accent/40 -z-0"></div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="brand-card lg:bg-transparent lg:border-transparent lg:shadow-none rounded-2xl p-4 lg:p-0 flex flex-row lg:flex-col items-center gap-4 flex-1 relative text-right lg:text-center"
              >
                {/* Number Badge */}
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-lg lg:text-xl font-bold text-white shadow-md flex-shrink-0 relative z-10
                  ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
                >
                  {index + 1}
                </div>

                {/* Mobile connector dot trail (between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden absolute top-[58px] left-1/2 -translate-x-1/2 flex-col items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                    <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                    <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                  </div>
                )}
                
                {/* Text Content */}
                <div className="mt-0 px-0 lg:px-4">
                  <h3 className="text-[18px] font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.7] max-w-[260px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

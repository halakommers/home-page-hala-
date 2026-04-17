import { motion } from "framer-motion";

export default function OrderJourney() {
  const steps = [
    { title: "التوريد", desc: "نوفّر منتجاتك من المصدر مباشرة" },
    { title: "التخزين", desc: "نستلم ونفحص ونجهّز في مستودعاتنا الخليجية" },
    { title: "تأكيد الطلب", desc: "فريقنا يتصل بعميلك خلال ساعتين" },
    { title: "التغليف والتجهيز", desc: "نغلّف بهويتك ونسلّم لشركة الشحن" },
    { title: "الشحن والتسليم", desc: "تتبّع لحظي وتنبيهات للعميل" },
    { title: "التحصيل والتسوية", desc: "نحصّل ونحوّل لحسابك في موعد ثابت" }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-32 bg-secondary scroll-mt-20 overflow-hidden">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">رحلة الطلب</span>
          <h2 className="text-[26px] md:text-[44px] font-bold text-foreground leading-[1.25] md:leading-[1.2] px-2">
            من الصين إلى يد عميلك — في 6 خطوات منظمة
          </h2>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-accent/40 -z-0"></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 lg:gap-4 flex-1 relative"
              >
                {/* Number Badge */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md flex-shrink-0 relative z-10
                  ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
                >
                  {index + 1}
                </div>

                {/* Mobile connector dot trail (between steps) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[58px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                    <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                    <span className="w-1 h-1 rounded-full bg-accent/40"></span>
                  </div>
                )}
                
                {/* Text Content */}
                <div className="text-center mt-1 lg:mt-0 px-4">
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
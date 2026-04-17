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
        <div className="text-center mb-20">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">رحلة الطلب</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2]">
            من الصين إلى يد عميلك — في 6 خطوات منظمة
          </h2>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-accent/40 -z-0"></div>
          
          {/* Mobile connecting line */}
          <div className="lg:hidden absolute top-[28px] bottom-[28px] right-[27px] w-[2px] border-r-2 border-dashed border-accent/40 -z-0"></div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-4 flex-1"
              >
                {/* Number Badge */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md flex-shrink-0
                  ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
                >
                  {index + 1}
                </div>
                
                {/* Text Content */}
                <div className="lg:text-center mt-1 lg:mt-0">
                  <h3 className="text-[18px] font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] max-w-[200px] lg:mx-auto">
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
import { motion } from "framer-motion";
import CommerceBackdrop from "@/components/CommerceBackdrop";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "متجر عناية كان يعاني من طلبات COD كثيرة لا تكتمل. بعد تنظيم التأكيد خلال أول ساعتين، ارتفعت نسبة التأكيد من 38% إلى 69% خلال أول 45 يوم.",
      author: "متجر عناية",
      role: "جدة — تم إخفاء الاسم حفاظاً على الخصوصية",
      initials: "ع"
    },
    {
      quote: "براند منتجات منزلية نقل مخزونه داخل السعودية بدلاً من الشحن الخارجي لكل طلب. متوسط التسليم انخفض من 9 أيام إلى 3 أيام، والمرتجعات قلت بوضوح.",
      author: "براند منتجات منزلية",
      role: "السعودية — نموذج من واقع التشغيل",
      initials: "م"
    },
    {
      quote: "مسوق منتج واحد بدأ باختبار صغير، ثم وصل إلى أكثر من 300 طلب شهرياً بعد ضبط التوريد والتخزين والتأكيد والتحصيل في مسار واحد.",
      author: "مسوق منتج واحد",
      role: "الخليج — قصة نجاح تشغيلية",
      initials: "ن"
    }
  ];

  return (
    <section className="section-surface py-14 md:py-28 bg-secondary">
      <CommerceBackdrop variant="warm" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="brand-pill inline-block text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2">دليل من واقع التشغيل</span>
          <h2 className="text-[27px] md:text-[44px] font-bold text-foreground leading-[1.22] max-w-3xl mx-auto">
            أمثلة على مشاكل تشغيلية نحلها للبائعين
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm flex flex-col"
            >
              <div className="text-accent text-4xl font-serif mb-4 opacity-50">"</div>
              <p className="text-[17px] text-foreground leading-[1.7] italic mb-8 flex-grow">
                {item.quote}
              </p>
              
              <div className="h-px w-full bg-border mb-6"></div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                  {item.initials}
                </div>
                <div>
                  <div className="font-bold text-[15px] text-foreground">{item.author}</div>
                  <div className="text-[13px] text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

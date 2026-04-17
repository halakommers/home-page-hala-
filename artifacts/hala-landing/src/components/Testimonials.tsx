import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "كنت أعاني من نسبة تأكيد 35%، بعد 60 يوم مع هلا وصلت لـ 72%. الفرق في وقت الاتصال وأسلوب الفريق.",
      author: "محمد العتيبي",
      role: "صاحب متجر — الرياض",
      initials: "م"
    },
    {
      quote: "أول مرة أشحن بدون صداع. التتبع اللحظي والتحويل في أسبوع غيّر طريقة إدارتي لمخزوني.",
      author: "سارة المطيري",
      role: "صاحبة براند عناية — جدة",
      initials: "س"
    },
    {
      quote: "من 10 طلبات لـ 300 طلب شهرياً بنفس الشريك. هلا معي من البداية.",
      author: "فيصل الشمري",
      role: "مسوّق ديجيتال — الكويت",
      initials: "ف"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-secondary">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">آراء البائعين</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2] max-w-2xl mx-auto">
            بائعون رفعوا نسبة تسليمهم معنا بأكثر من الضعف
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
              className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col"
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
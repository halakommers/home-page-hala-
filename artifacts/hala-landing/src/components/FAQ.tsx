import { motion } from "framer-motion";
import CommerceBackdrop from "@/components/CommerceBackdrop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "هل هلا كوميرس مناسبة للمتاجر الصغيرة؟",
      a: "نعم. يمكنك البدء بكميات صغيرة ثم زيادة التشغيل تدريجياً حسب الطلبات والمخزون. الهدف أن تبدأ بمسار واضح قبل أن تكبر الفوضى."
    },
    {
      q: "ما الفرق بين هلا كوميرس وشركة الشحن؟",
      a: "شركة الشحن تنقل الطرد فقط. هلا كوميرس تدير التوريد، التخزين، التغليف، تأكيد الطلبات، الشحن، التحصيل، والمتابعة من لوحة واحدة."
    },
    {
      q: "هل أحتاج مخزوناً كبيراً للبدء؟",
      a: "لا. يمكنك البدء بكميات صغيرة ونساعدك في التوريد التدريجي حسب نمو طلبات متجرك."
    },
    {
      q: "هل تقدمون فولفيلمنت في السعودية فقط؟",
      a: "نخدم البائعين في السعودية وباقي أسواق الخليج: الإمارات، الكويت، قطر، البحرين، وعُمان، مع تركيز قوي على احتياجات الدفع عند الاستلام."
    },
    {
      q: "كيف أبدأ معكم؟",
      a: "افتح حساب بائع أو احجز مكالمة تشغيل مجانية. نراجع نشاطك والمنتج والسوق، ثم نقترح مساراً مناسباً للتوريد أو التخزين أو الشحن والتحصيل."
    },
    {
      q: "هل تساعدون في بناء البراند من الصفر؟",
      a: "نعم. من الهوية البصرية، إلى التغليف، إلى تجربة العميل — نمشي معك خطوة بخطوة."
    },
    {
      q: "هل توفّرون دعماً إعلانياً؟",
      a: "نعم. نوفّر استشارة في حملات تيك توك وسناب شات بما يناسب طبيعة منتجك وسوقك المستهدف."
    },
    {
      q: "متى أستلم مستحقاتي المالية؟",
      a: "نحوّل لك مستحقات الطلبات المسلَّمة في مواعيد ثابتة ومنظمة (عادة كل 7 أيام عمل) — وفق ما يُتفق عليه في عقدك معنا."
    },
    {
      q: "ما تكلفة الخدمة؟",
      a: "التكلفة تختلف حسب طبيعة منتجك وحجم طلباتك وطريقة التشغيل المطلوبة. احجز مكالمة مجانية مع فريقنا للحصول على تصور أوضح قبل اتخاذ القرار."
    }
  ];

  return (
    <section id="faq" className="section-surface py-14 md:py-28 bg-white scroll-mt-20">
      <CommerceBackdrop variant="light" />
      <div className="container max-w-[820px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="brand-pill inline-block text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2">أسئلة شائعة</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2]">
            إجابات مباشرة قبل ما تبدأ تشغيل متجرك
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border px-2">
                <AccordionTrigger className="text-[16px] md:text-[18px] font-bold text-right hover:no-underline hover:text-accent transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] md:text-[16px] text-muted-foreground leading-[1.7] pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

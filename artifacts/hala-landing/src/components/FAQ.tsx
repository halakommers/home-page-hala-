import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "هل هلا مناسبة للمتاجر الصغيرة؟",
      a: "نعم. لا يوجد حد أدنى للطلبات. نعمل مع تجار يبدأون بـ 10 طلبات شهرياً، ومع براندات تشحن آلاف الطلبات. منظومتنا تكبر معك."
    },
    {
      q: "ما الفرق بينكم وبين شركة شحن عادية؟",
      a: "شركة الشحن تنقل الطرد فقط. هلا تتولى المنظومة كاملة: التوريد، التخزين، التأكيد، الشحن، والتحصيل — مع لوحة تحكم واحدة."
    },
    {
      q: "هل أحتاج مخزوناً كبيراً للبدء؟",
      a: "لا. يمكنك البدء بكميات صغيرة ونساعدك في التوريد التدريجي حسب نمو طلبات متجرك."
    },
    {
      q: "هل تخدمون السعودية فقط؟",
      a: "لا. نخدم كل دول الخليج (السعودية، الإمارات، الكويت، قطر، البحرين، عُمان)، مع تركيز خاص على السوق السعودي."
    },
    {
      q: "كيف أبدأ معكم؟",
      a: "ثلاث خطوات: احجز استشارة مع فريقنا ← نفهم نشاطك ونحدّد لك الحل المناسب ← نبدأ التشغيل بشكل منظم خلال أيام."
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
      a: "التكلفة تختلف حسب طبيعة منتجك وحجم طلباتك. احجز استشارة مجانية مع فريقنا للحصول على عرض أسعار يناسب نشاطك."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">أسئلة شائعة</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2]">
            أسئلة يسألها كل بائع قبل البدء معنا
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
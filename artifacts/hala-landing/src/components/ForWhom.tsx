import { motion } from "framer-motion";
import { Store, Megaphone, Target, Focus, Users } from "lucide-react";
import CommerceBackdrop from "@/components/CommerceBackdrop";

export default function ForWhom() {
  const audiences = [
    {
      icon: Store,
      title: "متاجر Shopify / Salla / Zid",
      desc: "لديك متجر وتريد تشغيل الطلبات والمخزون والتحصيل من مكان واحد"
    },
    {
      icon: Megaphone,
      title: "المسوّقون والـ Dropshippers",
      desc: "تختبر منتجات وتحتاج تنفيذ سريع بدون ربط يومك بالشحن"
    },
    {
      icon: Target,
      title: "البراندات الناشئة",
      desc: "تريد تجربة عميل مرتبة من أول طلب حتى إعادة الشراء"
    },
    {
      icon: Focus,
      title: "المتاجر بمنتج واحد",
      desc: "تحتاج تأكيد COD وتحصيل واضح حتى لا يأكل التشغيل هامشك"
    },
    {
      icon: Users,
      title: "الـ Affiliates ومنشئو المحتوى",
      desc: "لديك جمهور أو ترافيك، وتحتاج جهة تتولى ما بعد البيع"
    }
  ];

  return (
    <section id="for-whom" className="section-surface py-14 md:py-28 bg-white scroll-mt-20">
      <CommerceBackdrop variant="light" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10 md:mb-12 text-center md:text-right">
          <span className="brand-pill inline-block text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2">لمن هلا؟</span>
          <h2 className="text-[27px] md:text-[44px] font-bold text-foreground leading-[1.22] max-w-3xl mx-auto md:mx-0">
            لو تبيع أونلاين وتخسر وقتك في التشغيل، هلا مناسبة لك
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {audiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-secondary rounded-2xl p-5 md:p-6 flex flex-col justify-center border border-transparent hover:border-border transition-colors min-h-[172px]"
              >
                <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-sm mb-4">
                  <item.icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold text-foreground mb-2 leading-tight">{item.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

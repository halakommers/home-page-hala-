import { motion } from "framer-motion";
import { Store, Megaphone, Target, Focus, Users } from "lucide-react";

export default function ForWhom() {
  const audiences = [
    {
      icon: Store,
      title: "متاجر Shopify / Salla / Zid",
      desc: "تركّز على البيع، نحن ننفّذ"
    },
    {
      icon: Megaphone,
      title: "المسوّقون والـ Dropshippers",
      desc: "مخزون جاهز، تنفيذ سريع، تحصيل منظم"
    },
    {
      icon: Target,
      title: "البراندات الناشئة",
      desc: "تجربة عميل قوية من أول طلب"
    },
    {
      icon: Focus,
      title: "المتاجر بمنتج واحد",
      desc: "تشغيل لا يأكل هامش ربحك"
    },
    {
      icon: Users,
      title: "الـ Affiliates ومنشئو المحتوى",
      desc: "لديك جمهور، نحن نتولى الباقي"
    }
  ];

  return (
    <section id="for-whom" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="mb-12 text-center md:text-right">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">لمن هلا؟</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2] max-w-2xl mx-auto md:mx-0">
            سواء كنت تبدأ من الصفر أو تتوسّع — هلا مبنية لك
          </h2>
        </div>

        {/* Scrollable Container on Mobile */}
        <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex flex-nowrap md:flex-wrap lg:flex-nowrap gap-4 w-max md:w-auto">
            {audiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-[260px] md:w-[calc(33.33%-16px)] lg:w-[240px] flex-shrink-0 bg-secondary rounded-2xl p-6 flex flex-col justify-center border border-transparent hover:border-border transition-colors"
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
      </div>
      
      {/* Hide Scrollbar CSS injection */}
      <style dangerouslySetInlineStyle={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
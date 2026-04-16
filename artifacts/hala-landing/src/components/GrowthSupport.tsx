import { motion } from "framer-motion";
import { Clock, LineChart, Paintbrush, Wallet } from "lucide-react";

export default function GrowthSupport() {
  const features = [
    {
      icon: Clock,
      title: "تشغيل احترافي يحرّر وقتك",
      desc: "تركّز على المنتج والتسويق، ونحن نتولى التنفيذ.",
      color: "purple"
    },
    {
      icon: LineChart,
      title: "دعم إعلاني (تيك توك وسناب شات)",
      desc: "استشارة في إطلاق حملاتك على المنصات الأكثر تأثيراً في الخليج.",
      color: "orange"
    },
    {
      icon: Paintbrush,
      title: "بناء البراند من الصفر",
      desc: "هوية بصرية، تغليف، تجربة عميل — نساعدك تبني براند يبقى في ذاكرة العميل.",
      color: "purple"
    },
    {
      icon: Wallet,
      title: "حلول دعم مالي للتوسع",
      desc: "نوفّر مرونة في إدارة المخزون والتدفق النقدي تساعدك على التوسع بأمان.",
      color: "orange"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">أكثر من مجرد تشغيل</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2]">
            هلا ليست خدمة تشغيل فقط — هلا منصة نمو
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-2xl p-8 border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm ${
                feature.color === 'orange' ? 'bg-[#FFE8D9] text-accent' : 'bg-primary/10 text-primary'
              }`}>
                <feature.icon size={24} strokeWidth={2} />
              </div>
              
              <h3 className="text-[20px] font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.6] mb-6 flex-grow">
                {feature.desc}
              </p>
              
              <a href="#contact" className="text-accent font-bold text-[14px] flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                معرفة المزيد ←
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Package, Warehouse, PhoneCall, Truck, Banknote, LayoutDashboard } from "lucide-react";
import CommerceBackdrop from "@/components/CommerceBackdrop";

export default function ServicesGrid() {
  const services = [
    {
      icon: Package,
      title: "توريد منتجات من الصين",
      desc: "نساعدك في الوصول للمورد المناسب ونرتب الشحن الدولي والجمارك حتى يصل المخزون لمستودعات التشغيل.",
      result: "منتج جاهز للبيع بدون متابعة يومية مع الموردين",
      color: "orange"
    },
    {
      icon: Warehouse,
      title: "تخزين وتغليف للمتاجر",
      desc: "مخزون منظم داخل الخليج، وتجهيز وتغليف يحمي المنتج ويحافظ على صورة البراند عند التسليم.",
      result: "طلبات أسرع وتجربة عميل أفضل",
      color: "purple"
    },
    {
      icon: PhoneCall,
      title: "تأكيد طلبات COD",
      desc: "فريق يتواصل مع العميل قبل الشحن لتأكيد العنوان والنية الشرائية وتقليل الطلبات الوهمية والمرتجعة.",
      result: "شحن أقل للطلبات غير الجادة",
      color: "orange"
    },
    {
      icon: Truck,
      title: "شحن وتوصيل داخل الخليج",
      desc: "اختيار شركة الشحن المناسبة لكل طلب، مع متابعة الحالة وتتبّع يساعدك تعرف أين يقف كل طرد.",
      result: "وضوح أكبر في التسليم والمرتجعات",
      color: "purple"
    },
    {
      icon: Banknote,
      title: "تحصيل الدفع عند الاستلام",
      desc: "نتابع التحصيل النقدي للطلبات المسلّمة، ونرتب التسويات في مواعيد واضحة حسب الاتفاق.",
      result: "تدفق نقدي مفهوم بدل أرقام مشتتة",
      color: "orange"
    },
    {
      icon: LayoutDashboard,
      title: "لوحة تحكم عربية",
      desc: "تابع الطلبات والمخزون والتحصيل والأداء من شاشة واحدة بدل ملفات ورسائل ومتابعات متفرقة.",
      result: "قرارات أسرع بناء على بيانات واضحة",
      color: "purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="section-surface py-14 md:py-28 bg-secondary scroll-mt-20 relative">
      <CommerceBackdrop variant="warm" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="brand-pill text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2">خدمات فولفيلمنت التجارة الإلكترونية</span>
          <h2 className="text-[27px] md:text-[42px] font-bold text-foreground leading-[1.25] mb-4 max-w-3xl">
            من توريد المنتج إلى تحصيل قيمته، كل خطوة لها صاحب
          </h2>
          <p className="text-[17px] text-muted-foreground leading-[1.75] max-w-[600px]">
            مناسب للبائعين الذين يريدون التوسع في السعودية والخليج بدون بناء فريق عمليات كامل من اليوم الأول.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="brand-card rounded-2xl p-5 md:p-6 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group text-right min-h-[238px]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${
                service.color === 'orange' ? 'bg-accent' : 'bg-primary'
              }`}></div>
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                service.color === 'orange' ? 'bg-[#FFE8D9] text-accent' : 'bg-primary/10 text-primary'
              }`}>
                <service.icon size={23} strokeWidth={2} />
              </div>
              
              <h3 className="text-[19px] font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-[15px] md:text-[16px] text-muted-foreground leading-[1.75]">
                {service.desc}
              </p>
              <div className="mt-5 rounded-xl bg-secondary px-3 py-2 text-[13px] font-bold leading-[1.6] text-primary">
                {service.result}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

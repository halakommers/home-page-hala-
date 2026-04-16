import { motion } from "framer-motion";
import { Package, Warehouse, PhoneCall, Truck, Banknote, LayoutDashboard } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Package,
      title: "التوريد والاستيراد",
      desc: "نوفّر لك منتجاتك من المصدر بأسعار تنافسية، ونتولى الجمارك والشحن الدولي حتى مستودعاتنا.",
      color: "orange"
    },
    {
      icon: Warehouse,
      title: "التخزين والتغليف",
      desc: "مستودعات منظمة في قلب السوق، مع تغليف احترافي يحمي منتجك ويعكس هوية براندك.",
      color: "purple"
    },
    {
      icon: PhoneCall,
      title: "تأكيد الطلبات",
      desc: "فريق سعودي/خليجي يتحدث لهجة عميلك، يؤكد الطلب قبل الشحن، ويرفع نسبة التسليم الفعلي.",
      color: "orange"
    },
    {
      icon: Truck,
      title: "الشحن داخل الخليج",
      desc: "شراكات مع كبرى شركات الشحن، مع مرونة اختيار الأنسب لكل طلب وتتبّع لحظي للعميل.",
      color: "purple"
    },
    {
      icon: Banknote,
      title: "تحصيل الأموال (COD)",
      desc: "نتولى التحصيل من العميل، ونحوّل لك مستحقاتك في مواعيد ثابتة وواضحة.",
      color: "orange"
    },
    {
      icon: LayoutDashboard,
      title: "لوحة تحكم وتقارير",
      desc: "ترى كل طلب، ومخزونك، ومعدل التحصيل، وأداء كل منتج — في مكان واحد، بالعربي.",
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
    <section id="services" className="py-24 md:py-32 bg-secondary scroll-mt-20">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4">خدماتنا المتكاملة</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2] mb-4">
            ست خدمات. شريك واحد. تشغيل بلا تعقيد.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-[1.75] max-w-[600px]">
            بدلاً من إدارة خمس شركات مختلفة، تدير علاقة واحدة فقط.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                service.color === 'orange' ? 'bg-[#FFE8D9] text-accent' : 'bg-secondary text-primary'
              }`}>
                <service.icon size={28} strokeWidth={2} />
              </div>
              
              <h3 className="text-[20px] font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.6]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
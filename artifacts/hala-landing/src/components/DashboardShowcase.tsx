import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Receipt,
  BarChart3,
  ShoppingBag,
  FileText,
  CheckCircle2,
} from "lucide-react";

import dashOverviewLg from "@/assets/dashboards/dash_10.15.55_lg.webp";
import dashOverviewSm from "@/assets/dashboards/dash_10.15.55_sm.webp";
import dashOrdersLg from "@/assets/dashboards/dash_10.16.16_lg.webp";
import dashOrdersSm from "@/assets/dashboards/dash_10.16.16_sm.webp";
import dashFinanceLg from "@/assets/dashboards/dash_10.16.33_lg.webp";
import dashFinanceSm from "@/assets/dashboards/dash_10.16.33_sm.webp";
import dashAnalyticsLg from "@/assets/dashboards/dash_10.17.32_lg.webp";
import dashAnalyticsSm from "@/assets/dashboards/dash_10.17.32_sm.webp";
import dashProductsLg from "@/assets/dashboards/dash_10.17.57_lg.webp";
import dashProductsSm from "@/assets/dashboards/dash_10.17.57_sm.webp";
import dashInvoiceLg from "@/assets/dashboards/dash_10.19.08_lg.webp";
import dashInvoiceSm from "@/assets/dashboards/dash_10.19.08_sm.webp";

const tabs = [
  {
    id: "overview",
    icon: LayoutDashboard,
    title: "نظرة عامة",
    label: "اللوحة الرئيسية",
    desc: "كل أرقام نشاطك في شاشة واحدة — الطلبات، التأكيدات، الاستلام، والأداء المالي لحظياً.",
    imageLg: dashOverviewLg, imageSm: dashOverviewSm,
    highlights: ["نسبة التأكيد لكل المنتجات", "الرصيد المتاح وقيد المعالجة", "أداء الأرباح بالرسم البياني"],
  },
  {
    id: "orders",
    icon: Package,
    title: "إدارة الطلبات",
    label: "كل طلب وحالته",
    desc: "تابع كل طلب لحظياً مع عدد المحاولات، حالة التأكيد، طريقة الدفع، وعنوان العميل الكامل.",
    imageLg: dashOrdersLg, imageSm: dashOrdersSm,
    highlights: ["تصفية متقدّمة بالحالة والدولة", "تصدير Excel للطلبات", "محاولات التواصل لكل عميل"],
  },
  {
    id: "finance",
    icon: Receipt,
    title: "السجل المالي",
    label: "فواتير ومعاملات",
    desc: "سجل مالي كامل لكل فاتورة وكل معاملة — تواريخ، صافي المبلغ، إجمالي المدين والدائن.",
    imageLg: dashFinanceLg, imageSm: dashFinanceSm,
    highlights: ["فواتير أسبوعية تلقائية", "تتبع كل المعاملات المالية", "حسابات بنكية متعددة"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "لوحة التحليلات",
    label: "أداء متجرك بالأرقام",
    desc: "نظرة شاملة على أداء متجرك — معدلات التأكيد والتسليم، أسباب الإلغاء والإرجاع، وكل المؤشرات.",
    imageLg: dashAnalyticsLg, imageSm: dashAnalyticsSm,
    highlights: ["مقارنة بالفترة السابقة", "أهم أسباب الإلغاء والإرجاع", "حالات الطلب اليومية"],
  },
  {
    id: "products",
    icon: ShoppingBag,
    title: "منتجات هلا شير",
    label: "قسم منتجات جاهزة",
    desc: "اختر من مئات المنتجات الجاهزة في مخزون هلا — اربطها بمتجرك في ثوانٍ وابدأ البيع فوراً.",
    imageLg: dashProductsLg, imageSm: dashProductsSm,
    highlights: ["+132 منتج جاهز للبيع", "أسعار تنافسية وشحن سريع", "تشغيل بدون مخاطر مخزون"],
  },
  {
    id: "invoice",
    icon: FileText,
    title: "تفاصيل الفاتورة",
    label: "شفافية كاملة",
    desc: "كل بند من بنود الفاتورة موضّح بالتفصيل — رسوم الطلبات المؤكدة، التوصيل، المرتجعات، وصافي المبلغ.",
    imageLg: dashInvoiceLg, imageSm: dashInvoiceSm,
    highlights: ["تفصيل كل رسم على حدة", "تنزيل PDF بضغطة زر", "تواريخ بداية ونهاية واضحة"],
  },
];

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [loadedTabs, setLoadedTabs] = useState<Set<string>>(new Set([tabs[0].id]));
  const sectionRef = useRef<HTMLElement>(null);
  const active = tabs.find(t => t.id === activeTab)!;

  // Programmatically preload an image into the browser cache, then mark it loaded
  const preload = (id: string) => {
    if (typeof window === "undefined") return;
    setLoadedTabs(prev => {
      if (prev.has(id)) return prev;
      const tab = tabs.find(t => t.id === id);
      if (tab) {
        const isWide = window.matchMedia("(min-width: 768px)").matches;
        const url = isWide ? tab.imageLg : tab.imageSm;
        const img = new Image();
        img.src = url;
      }
      return new Set([...prev, id]);
    });
  };

  // Preload neighbors of active tab so switching is instant
  useEffect(() => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    const neighbors = [tabs[idx - 1]?.id, tabs[idx + 1]?.id].filter(Boolean) as string[];
    neighbors.forEach(preload);
  }, [activeTab]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={sectionRef}
      id="dashboard"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#F8F6FC] via-white to-[#F8F6FC]"
      dir="rtl"
      style={{ position: "relative" }}
    >
      <motion.div
        style={{ y: blobY }}
        className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: blobY }}
        className="absolute bottom-10 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />

      <div className="container max-w-[1280px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[680px] mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-[13px] px-4 py-1.5 rounded-full mb-4">
            <LayoutDashboard size={14} />
            لوحة تحكم هلا
          </span>
          <h2 className="text-[30px] md:text-[44px] font-extrabold text-primary leading-[1.2] mb-4">
            كل تشغيلك في
            <span className="text-accent"> شاشة واحدة</span>
          </h2>
          <p className="text-[16px] md:text-[17px] text-primary/65 leading-[1.9]">
            نظام متكامل بناه فريقنا داخلياً ليعطيك سيطرة كاملة على كل طلب، كل ريال، وكل منتج — بدون تعقيد وبشفافية كاملة.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map(tab => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => preload(tab.id)}
                onTouchStart={() => preload(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] md:text-[14px] font-bold transition-all duration-300 ${
                  isActive
                    ? "text-white shadow-lg shadow-primary/20"
                    : "text-primary/60 hover:text-primary hover:bg-primary/5"
                }`}
                data-testid={`dashboard-tab-${tab.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="dashboard-tab-bg"
                    className="absolute inset-0 bg-gradient-to-br from-primary to-[#1E1A4D] rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <tab.icon size={15} className="relative z-10" />
                <span className="relative z-10">{tab.title}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block text-accent font-bold text-[13px] mb-2">
                  {active.label}
                </span>
                <h3 className="text-[24px] md:text-[28px] font-extrabold text-primary mb-4 leading-[1.3]">
                  {active.title}
                </h3>
                <p className="text-[15px] text-primary/70 leading-[1.95] mb-6">
                  {active.desc}
                </p>
                <ul className="space-y-3">
                  {active.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex gap-3 items-start"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-0.5">
                        <CheckCircle2 size={12} />
                      </span>
                      <span className="text-[14px] text-primary/80 leading-[1.7]">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-8 lg:order-1">
            <motion.div style={{ y }} className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-accent/20 via-primary/15 to-accent/10 rounded-[32px] blur-2xl opacity-60" />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[16px] md:rounded-[20px] overflow-hidden bg-white border border-[#E8E5F2] shadow-[0_30px_80px_-20px_rgba(45,38,105,0.35)]"
              >
                <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-[#F4F2F8] to-[#ECE9F2] border-b border-[#E8E5F2]" dir="ltr">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 bg-white/70 text-[11px] text-primary/50 px-3 py-0.5 rounded-md font-mono">
                    🔒 seller.halakommers.com
                  </div>
                  <div className="w-12" />
                </div>

                <div className="relative bg-white aspect-[16/12] md:aspect-[16/11] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {tabs.map(tab => (
                      tab.id === active.id && loadedTabs.has(tab.id) && (
                        <motion.picture
                          key={tab.id}
                          initial={{ opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0"
                        >
                          <source media="(min-width: 768px)" srcSet={tab.imageLg} />
                          <img
                            src={tab.imageSm}
                            alt={tab.title}
                            width="1280"
                            height="817"
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                          />
                        </motion.picture>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -30, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                className="hidden md:flex absolute -top-4 -left-4 items-center gap-2 bg-white shadow-xl border border-[#E8E5F2] rounded-2xl px-4 py-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-primary/50 leading-none mb-0.5">طلب جديد</p>
                  <p className="text-[12px] font-bold text-primary leading-none">تم التأكيد ✓</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 30, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, type: "spring", stiffness: 200 }}
                className="hidden md:flex absolute -bottom-4 -right-4 items-center gap-2 bg-white shadow-xl border border-[#E8E5F2] rounded-2xl px-4 py-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                  <BarChart3 size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] text-primary/50 leading-none mb-0.5">معدل التأكيد</p>
                  <p className="text-[12px] font-bold text-primary leading-none">68% ↑</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { num: "6", label: "أقسام رئيسية" },
            { num: "24/7", label: "وصول لحظي" },
            { num: "PDF", label: "تنزيل التقارير" },
            { num: "تكامل", label: "Salla / Zid / Shopify" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className="bg-white border border-[#E8E5F2] rounded-2xl px-4 md:px-5 py-4 text-center md:text-right hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="text-[20px] md:text-[24px] font-extrabold text-accent leading-none mb-1.5">{stat.num}</p>
              <p className="text-[12px] md:text-[13px] text-primary/65 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

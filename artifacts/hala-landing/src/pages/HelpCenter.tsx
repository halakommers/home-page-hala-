import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  BookOpen,
  Boxes,
  DollarSign,
  CheckCircle2,
  ShieldCheck,
  Calculator,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const categories = [
  { id: "intro", icon: BookOpen, label: "التعريف بهلا", color: "bg-primary/10 text-primary" },
  { id: "services", icon: Boxes, label: "الخدمات", color: "bg-accent/10 text-accent" },
  { id: "pricing", icon: DollarSign, label: "الأسعار", color: "bg-green-50 text-green-700" },
  { id: "steps", icon: CheckCircle2, label: "مراحل العمل", color: "bg-blue-50 text-blue-700" },
  { id: "products", icon: ShieldCheck, label: "سياسة المنتجات", color: "bg-purple-50 text-purple-700" },
  { id: "calculator", icon: Calculator, label: "حساب التسعير", color: "bg-orange-50 text-orange-700" },
];

export default function HelpCenter() {
  useSEO({
    title: "مركز المساعدة | هلا كوميرس",
    description: "كل ما تحتاج معرفته قبل وأثناء العمل مع هلا كوميرس — الخدمات، الأسعار، مراحل العمل، سياسة المنتجات، وكيف تحسب تسعيرك.",
    keywords: "مركز مساعدة هلا, أسئلة شائعة, خدمات الفولفيلمنت, أسعار الشحن, سياسة المنتجات",
    canonical: "https://halacommerce.com/help",
  });

  return (
    <div className="min-h-screen bg-[#F8F6FC] font-cairo" dir="rtl">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#F8F6FC] border-b border-[#E8E5F2]">
        <div className="container max-w-[1100px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              <BookOpen size={15} />
              مركز المساعدة
            </span>
            <h1 className="text-[32px] md:text-[52px] font-extrabold text-primary leading-[1.2] mb-4">
              كل ما تحتاج معرفته
              <br />
              <span className="text-accent">قبل وأثناء العمل معنا</span>
            </h1>
            <p className="text-[17px] text-primary/65 max-w-[580px] mx-auto leading-[1.9]">
              دليل شامل عن هلا كوميرس — خدماتنا، أسعارنا، مراحل العمل، وكيف تحسب هامش ربحك بدقة.
            </p>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-[14px] transition-all hover:scale-105 ${cat.color} border border-transparent hover:border-current/20`}
              >
                <cat.icon size={15} />
                {cat.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[860px] mx-auto px-6 py-16 space-y-16">

        {/* ───────────────── Section 1: التعريف ───────────────── */}
        <Section id="intro" icon={BookOpen} title="القسم الأول: التعريف بهلا كوميرس" color="text-primary">
          <Accordion type="multiple" className="space-y-3">

            <Item value="what">
              <Q>ما هي هلا كوميرس؟</Q>
              <A>
                <p className="mb-3">هلا كوميرس شريك تشغيلي متكامل للتجارة الإلكترونية في السعودية والخليج. نحن لسنا شركة شحن — نحن <strong>منظومة كاملة</strong> تربط بين خمس خدمات حيوية:</p>
                <ol className="list-decimal list-inside space-y-1.5 text-primary/75 mr-2">
                  <li>التوريد والاستيراد من الصين ومصر وأي مصدر تختاره</li>
                  <li>التخزين والتغليف في مستودعاتنا الخليجية</li>
                  <li>تأكيد الطلبات عبر فريق بلهجة محلية</li>
                  <li>الشحن مع كبرى شركات الشحن</li>
                  <li>التحصيل والتسوية المالية وتحويل مستحقاتك</li>
                </ol>
                <p className="mt-3 text-primary/70">دورنا الأساسي: نحرّرك من تعقيدات التشغيل حتى تركّز على ما يهمّك فعلاً — <strong>النمو والتسويق</strong>.</p>
              </A>
            </Item>

            <Item value="diff">
              <Q>ما الفرق بين هلا وشركة شحن عادية؟</Q>
              <A>
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="p-3 text-right font-bold border border-[#E8E5F2]">العنصر</th>
                        <th className="p-3 text-center font-bold border border-[#E8E5F2]">شركة شحن عادية</th>
                        <th className="p-3 text-center font-bold border border-[#E8E5F2] text-accent">هلا كوميرس</th>
                      </tr>
                    </thead>
                    <tbody className="text-primary/70">
                      {[
                        ["نقل الطرد من A إلى B", "✅", "✅"],
                        ["توريد المنتج من المصدر", "❌", "✅"],
                        ["تخزين المخزون", "❌ (أو رسوم منفصلة)", "✅"],
                        ["تأكيد الطلبات بفريق محلي", "❌", "✅"],
                        ["اختيار شركة الشحن المناسبة", "❌ (شركة واحدة)", "✅ (عدة شركات)"],
                        ["تحصيل COD", "جزئياً", "✅"],
                        ["التسوية المالية المنظمة", "❌", "✅"],
                        ["لوحة تحكم موحّدة", "❌", "✅"],
                        ["نقطة تواصل واحدة", "❌", "✅"],
                      ].map(([label, a, b]) => (
                        <tr key={label} className="border-b border-[#E8E5F2]">
                          <td className="p-3 border border-[#E8E5F2] font-medium text-primary">{label}</td>
                          <td className="p-3 border border-[#E8E5F2] text-center">{a}</td>
                          <td className="p-3 border border-[#E8E5F2] text-center font-bold text-accent">{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </A>
            </Item>

            <Item value="who">
              <Q>لمن هلا مناسبة؟</Q>
              <A>
                <div className="space-y-3">
                  {[
                    { label: "متاجر إلكترونية على Salla / Zid / Shopify", desc: "تركّز على البيع والتسويق وتريد من يتولى التشغيل." },
                    { label: "المسوّقون والـ Dropshippers", desc: "تحتاج مخزوناً جاهزاً وتنفيذاً سريعاً وتحصيلاً منظماً." },
                    { label: "البراندات الناشئة", desc: "تريد بناء تجربة عميل قوية وتوصيل احترافي." },
                    { label: "المتاجر بمنتج واحد (One Product Stores)", desc: "تحتاج تشغيلاً لا يأكل هامش ربحك." },
                    { label: "الـ Affiliates ومنشئو المحتوى", desc: "لديك جمهور وتريد منتجاً جاهزاً للبيع." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 p-3 bg-primary/5 rounded-xl">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <div>
                        <p className="font-bold text-primary text-[14px]">{item.label}</p>
                        <p className="text-primary/65 text-[13px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-[13px] text-amber-800">
                  <strong>متى لا تكون هلا مناسبة؟</strong>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside">
                    <li>لو كان منتجك يحتاج تركيباً في موقع العميل (أثاث ثقيل، أجهزة كبيرة)</li>
                    <li>لو كنت تعمل بنموذج B2B فقط بطلبات كبيرة للشركات</li>
                    <li>لو كان منتجك ضمن قائمة الممنوعات</li>
                  </ul>
                </div>
              </A>
            </Item>

          </Accordion>
        </Section>

        {/* ───────────────── Section 2: الخدمات ───────────────── */}
        <Section id="services" icon={Boxes} title="القسم الثاني: الخدمات بالتفصيل" color="text-accent">
          <Accordion type="multiple" className="space-y-3">

            <Item value="import">
              <Q>خدمة التوريد والاستيراد</Q>
              <A>
                <p className="mb-3 text-primary/70">نوفّر لك منتجاتك من المصدر مباشرة ونتولى نيابةً عنك:</p>
                <ul className="space-y-1.5 text-[14px] text-primary/75 mr-2">
                  {["البحث عن الموردين وطلب العينات", "التفاوض على الأسعار وشروط الدفع", "الفحص قبل الشحن (Quality Control)", "الشحن الدولي (بحري / جوي / بري)", "التخليص الجمركي والضرائب", "النقل لمستودعاتنا في السعودية أو الإمارات"].map(i => (
                    <li key={i} className="flex gap-2"><span className="text-accent">←</span>{i}</li>
                  ))}
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: "الصين (بحري)", val: "35-50 يوم" },
                    { label: "الصين (جوي)", val: "7-12 يوم" },
                    { label: "مصر (بري)", val: "10-15 يوم" },
                    { label: "تركيا", val: "15-25 يوم" },
                  ].map(i => (
                    <div key={i.label} className="bg-primary/5 rounded-xl p-3 text-center">
                      <p className="text-[12px] text-primary/60">{i.label}</p>
                      <p className="font-extrabold text-primary text-[16px]">{i.val}</p>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

            <Item value="storage">
              <Q>خدمة التخزين والتغليف</Q>
              <A>
                <p className="mb-3 text-primary/70">نستلم بضاعتك في مستودعاتنا الخليجية، نفحصها، نصنّفها، ونجهّزها للشحن الفوري عند كل طلب.</p>
                <div className="space-y-2 mb-4">
                  {["استلام الحاويات والطرود وفحصها مع تقرير بالكميات", "التخزين الآمن بحرارة ورطوبة مناسبة", "إدارة المخزون (Inventory Management) ومتابعة الكميات", "تنبيهات المخزون المنخفض قبل النفاد", "التغليف الاحترافي بهوية براندك", "إضافة مواد تسويقية (بطاقات شكر، كوبونات، عينات)"].map(i => (
                    <div key={i} className="flex gap-2 text-[14px] text-primary/75"><span className="text-green-500 mt-0.5">✓</span>{i}</div>
                  ))}
                </div>
                <p className="font-bold text-[14px] mb-2">خيارات التغليف:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { t: "تغليف قياسي", d: "كرتون بنيّ مع ملصق شحن فقط" },
                    { t: "تغليف هلا الأساسي", d: "كرتون أبيض + ملصق هلا" },
                    { t: "تغليف مخصّص بهوية البراند", d: "كرتون مصمم بلوجوك (500+ قطعة)" },
                    { t: "تغليف فاخر", d: "علب داخلية ملونة + مناديل حريرية + بطاقات شكر" },
                  ].map(i => (
                    <div key={i.t} className="border border-[#E8E5F2] rounded-xl p-3">
                      <p className="font-bold text-[13px] text-primary">{i.t}</p>
                      <p className="text-[12px] text-primary/60">{i.d}</p>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

            <Item value="confirm">
              <Q>خدمة تأكيد الطلبات (Call Center)</Q>
              <A>
                <p className="mb-3 text-primary/70">فريق متخصّص يتحدث لهجات محلية (سعودي، إماراتي، كويتي، مصري) يتولى الاتصال بكل عميل لتأكيد الطلب قبل الشحن.</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-[13px] text-amber-800">
                  في سوق COD الخليجي، نسبة الطلبات الوهمية أو الخاطئة قد تصل لـ <strong>40-50%</strong>. بدون تأكيد احترافي ستدفع تكلفة شحن لطلبات لن تُسلَّم.
                </div>
                <p className="font-bold text-[14px] mb-2">ما نقوم به في كل مكالمة:</p>
                <ol className="list-decimal list-inside space-y-1.5 text-[14px] text-primary/75 mr-2">
                  <li>رسالة واتساب تمهيدية فور وصول الطلب</li>
                  <li>مكالمة خلال أول ساعتين (قاعدة ذهبية في هلا)</li>
                  <li>تأكيد المنتج والكمية والسعر والعنوان</li>
                  <li>طلب Google Maps Pin عبر واتساب</li>
                  <li>تأكيد موعد التسليم المتوقّع</li>
                  <li>تسجيل المكالمة (متاح لك في لوحة التحكم)</li>
                </ol>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-primary/5 rounded-xl p-3 text-center">
                    <p className="text-[12px] text-primary/60">منتجات عادية</p>
                    <p className="font-extrabold text-primary text-[18px]">60-75%</p>
                    <p className="text-[12px] text-primary/60">معدل تأكيد</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-3 text-center">
                    <p className="text-[12px] text-accent/70">متوسط هلا 2026</p>
                    <p className="font-extrabold text-accent text-[18px]">68%+</p>
                    <p className="text-[12px] text-accent/70">معدل تأكيد فعلي</p>
                  </div>
                </div>
              </A>
            </Item>

            <Item value="shipping">
              <Q>خدمة الشحن</Q>
              <A>
                <p className="mb-3 text-primary/70">لا نعتمد على شركة شحن واحدة — بل نستخدم عدة شركات ونختار الأنسب لكل طلب حسب الوجهة والسرعة والحجم وطبيعة المنتج.</p>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: "داخل السعودية", items: "Aramex, SMSA, J&T, iMile" },
                    { label: "داخل الإمارات", items: "Aramex, Fetchr, Zajil" },
                    { label: "باقي الخليج", items: "شراكات محلية في كل دولة" },
                  ].map(i => (
                    <div key={i.label} className="bg-primary/5 rounded-xl p-3">
                      <p className="font-bold text-[13px] text-primary mb-1">{i.label}</p>
                      <p className="text-[12px] text-primary/65">{i.items}</p>
                    </div>
                  ))}
                </div>
                <p className="font-bold text-[14px] mb-2">سرعة التسليم المتوقّعة:</p>
                <div className="space-y-2">
                  {[
                    ["الرياض / جدة / الدمام", "1-2 يوم عمل"],
                    ["باقي مدن السعودية", "2-4 أيام عمل"],
                    ["الإمارات", "1-3 أيام عمل"],
                    ["باقي الخليج", "3-7 أيام عمل"],
                  ].map(([place, time]) => (
                    <div key={place} className="flex justify-between items-center border-b border-[#E8E5F2] pb-2 text-[14px]">
                      <span className="text-primary/75">{place}</span>
                      <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl text-[13px] text-green-800">
                  لأننا نشحن آلاف الطلبات شهرياً، نحصل على <strong>أسعار مخفّضة 15-30%</strong> مقارنة بأسعار الأفراد — ونمرّرها لك.
                </div>
              </A>
            </Item>

            <Item value="collection">
              <Q>خدمة التحصيل والتسوية المالية</Q>
              <A>
                <p className="mb-3 text-primary/70">نتولى تحصيل أموال الطلبات COD من شركات الشحن، ونحوّل لك مستحقاتك في مواعيد منظمة وواضحة.</p>
                <p className="font-bold text-[14px] mb-2">وتيرة التحويل:</p>
                <div className="space-y-2 mb-4">
                  {[
                    { tier: "+200 طلب/شهر", freq: "أسبوعياً (كل أحد)" },
                    { tier: "50-200 طلب/شهر", freq: "نصف شهرياً" },
                    { tier: "أقل من 50 طلب/شهر", freq: "شهرياً (نهاية الشهر)" },
                  ].map(i => (
                    <div key={i.tier} className="flex justify-between items-center p-3 bg-primary/5 rounded-xl text-[14px]">
                      <span className="font-bold text-primary">{i.tier}</span>
                      <span className="text-primary/70">{i.freq}</span>
                    </div>
                  ))}
                </div>
                <p className="font-bold text-[14px] mb-2">الحسابات المدعومة:</p>
                <ul className="text-[14px] text-primary/75 space-y-1">
                  {["حساب سعودي (محلي) — نفس اليوم", "حساب إماراتي", "حسابات خليجية أخرى (حسب الطلب)", "حساب مصري (تحويل دولي — 2-3 أيام)"].map(i => (
                    <li key={i} className="flex gap-2"><span className="text-accent">✓</span>{i}</li>
                  ))}
                </ul>
              </A>
            </Item>

            <Item value="dashboard">
              <Q>لوحة التحكم والتقارير</Q>
              <A>
                <p className="mb-3 text-primary/70">لوحة تحكم موحّدة تعطيك رؤية كاملة على كل جانب من جوانب نشاطك:</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["حالة كل طلب لحظياً", "مستوى المخزون", "تسجيلات مكالمات التأكيد", "تقارير يومية وأسبوعية وشهرية", "أسباب فشل الطلبات", "أداء كل منتج"].map(i => (
                    <div key={i} className="flex gap-2 text-[13px] text-primary/75 bg-primary/5 rounded-xl p-2.5">
                      <span className="text-accent">📊</span>{i}
                    </div>
                  ))}
                </div>
                <p className="font-bold text-[14px] mb-2">التكاملات المتاحة:</p>
                <div className="flex flex-wrap gap-2">
                  {["Salla", "Zid", "Shopify", "WooCommerce", "Excel / Manual Upload"].map(i => (
                    <span key={i} className="bg-primary/10 text-primary font-bold text-[13px] px-3 py-1 rounded-full">{i}</span>
                  ))}
                </div>
              </A>
            </Item>

          </Accordion>
        </Section>

        {/* ───────────────── Section 3: الأسعار ───────────────── */}
        <Section id="pricing" icon={DollarSign} title="القسم الثالث: الأسعار والتكاليف" color="text-green-700">
          <Accordion type="multiple" className="space-y-3">

            <Item value="pricing-structure">
              <Q>هيكل التسعير في هلا</Q>
              <A>
                <p className="mb-3 text-primary/70">الأسعار عندنا مكوّنة من عدة بنود، كل واحد له رسم محدد. هذه الشفافية الكاملة هي ما يميّزنا — لن تكتشف رسوماً خفية في نهاية الشهر.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="p-3 text-center border border-[#E8E5F2]">#</th>
                        <th className="p-3 text-right border border-[#E8E5F2]">البند</th>
                        <th className="p-3 text-right border border-[#E8E5F2]">نوع الرسم</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "التوريد والاستيراد", "نسبة من قيمة الشحنة أو رسم ثابت"],
                        ["2", "الاستلام في المستودع", "رسم لكل قطعة أو كرتونة"],
                        ["3", "التخزين الشهري", "حسب حجم المساحة المستخدمة"],
                        ["4", "تأكيد الطلب", "رسم لكل طلب"],
                        ["5", "الشحن", "حسب شركة الشحن والوزن والوجهة"],
                        ["6", "التحصيل والتسوية", "نسبة صغيرة من مبلغ الطلب"],
                      ].map(([n, b, r]) => (
                        <tr key={n} className="border-b border-[#E8E5F2] text-primary/75">
                          <td className="p-3 text-center border border-[#E8E5F2] font-bold text-accent">{n}</td>
                          <td className="p-3 border border-[#E8E5F2] font-medium text-primary">{b}</td>
                          <td className="p-3 border border-[#E8E5F2]">{r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </A>
            </Item>

            <Item value="price-tiers">
              <Q>شرائح أسعار الخدمات (تقريبية)</Q>
              <A>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-[13px] text-amber-800">
                  الأسعار التالية تقريبية وتعتمد على حجم النشاط ونوع المنتج والعقد. للحصول على عرض سعر دقيق، احجز استشارة مجانية.
                </div>
                {[
                  {
                    title: "التوريد والاستيراد",
                    rows: [
                      ["البحث عن موردين في الصين", "200-500 ريال/مورّد"],
                      ["فحص العينات (Quality Control)", "150-300 ريال/عينة"],
                      ["الشحن البحري (LCL)", "80-180 دولار/م³"],
                      ["الشحن الجوي من الصين", "25-45 ريال/كجم"],
                      ["الشحن البري من مصر", "8-15 ريال/كجم"],
                      ["التخليص الجمركي", "800-2,500 ريال/شحنة"],
                    ],
                  },
                  {
                    title: "التخزين",
                    rows: [
                      ["تخزين قياسي (قطعة صغيرة)/شهر", "0.5-1.5 ريال"],
                      ["تخزين متوسط الحجم/شهر", "2-5 ريال"],
                      ["تخزين كبير الحجم/شهر", "8-20 ريال"],
                      ["تخزين بالمتر المكعب", "35-60 ريال/م³"],
                    ],
                  },
                  {
                    title: "تأكيد الطلبات",
                    rows: [
                      ["تأكيد بمكالمة واحدة فقط", "4-7 ريال/طلب"],
                      ["تأكيد كامل (مكالمة + واتساب)", "8-12 ريال/طلب"],
                      ["تأكيد متقدّم (3 محاولات)", "12-18 ريال/طلب"],
                    ],
                  },
                  {
                    title: "الشحن (داخل السعودية)",
                    rows: [
                      ["داخل المدينة (حتى 5 كجم)", "12-18 ريال"],
                      ["بين المدن الرئيسية", "17-25 ريال"],
                      ["للمناطق النائية", "25-40 ريال"],
                      ["Same Day / Next Day", "25-35 ريال"],
                    ],
                  },
                  {
                    title: "التحصيل والتسوية",
                    rows: [
                      ["رسوم تحصيل COD", "2-3.5% من قيمة الطلب"],
                      ["التحويل البنكي (محلي)", "0-25 ريال/تحويل"],
                      ["التحويل الدولي (مصر)", "40-80 ريال/تحويل"],
                    ],
                  },
                ].map((section) => (
                  <div key={section.title} className="mb-4">
                    <p className="font-bold text-[14px] text-primary mb-2">{section.title}</p>
                    <div className="rounded-xl overflow-hidden border border-[#E8E5F2]">
                      {section.rows.map(([label, val], i) => (
                        <div key={label} className={`flex justify-between p-3 text-[13px] ${i % 2 === 0 ? "bg-white" : "bg-primary/5"}`}>
                          <span className="text-primary/70">{label}</span>
                          <span className="font-bold text-primary">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </A>
            </Item>

            <Item value="hidden-fees">
              <Q>الرسوم الإضافية — ماذا تعرف عنها؟</Q>
              <A>
                <p className="mb-3 text-primary/70">نحن شفافون تماماً في التسعير — لكن هناك رسوم "ظرفية" قد تظهر حسب حالات محددة:</p>
                <div className="space-y-2 mb-4">
                  {[
                    ["رسوم الإرجاع", "15-25 ريال/طلب مرتجع"],
                    ["رسوم إعادة المحاولة", "8-12 ريال للمحاولة الثانية"],
                    ["إدخال مخزون غير منظم", "100-300 ريال/شحنة"],
                    ["التخزين الطويل (فوق 90 يوم)", "+20% على سعر التخزين"],
                    ["الشحن العاجل في أيام العطلات", "+50% على سعر الشحن"],
                  ].map(([fee, price]) => (
                    <div key={fee} className="flex justify-between p-3 border border-[#E8E5F2] rounded-xl text-[14px]">
                      <span className="text-primary/75">{fee}</span>
                      <span className="font-bold text-primary">{price}</span>
                    </div>
                  ))}
                </div>
                <p className="font-bold text-[14px] mb-2 text-green-700">رسوم لن تدفعها أبداً:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["رسوم إعداد حساب", "رسوم شهرية ثابتة", "رسوم API أو تكامل", "حد أدنى إجباري للطلبات"].map(i => (
                    <div key={i} className="flex gap-2 text-[13px] text-green-800 bg-green-50 rounded-xl p-2.5">
                      <span>❌</span><span>لا يوجد {i}</span>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

          </Accordion>
        </Section>

        {/* ───────────────── Section 4: مراحل العمل ───────────────── */}
        <Section id="steps" icon={CheckCircle2} title="القسم الرابع: مراحل العمل مع هلا" color="text-blue-700">
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "الاستشارة الأولية",
                meta: "30-45 دقيقة • مجانية بالكامل",
                items: ["نفهم طبيعة نشاطك الحالي أو المخطّط", "نطّلع على منتجك / منتجاتك", "نحلّل سوقك المستهدف", "نستعرض الخدمات التي تحتاجها فعلاً", "نعطيك تقدير أولي للأسعار وهامش الربح المتوقّع"],
              },
              {
                n: "2",
                title: "التقييم والعقد",
                meta: "3-5 أيام عمل",
                items: ["تقييم تفصيلي لمنتجك (مسموح؟ يحتاج تراخيص؟)", "عرض سعر مكتوب ومفصّل لكل بند", "مناقشة بنود العقد (المدة، الرسوم، ضمان الجودة)", "التوقيع ودفع العربون (لو كان مطلوباً)"],
              },
              {
                n: "3",
                title: "الإعداد التقني (Onboarding)",
                meta: "5-10 أيام عمل",
                items: ["فتح حسابك في لوحة التحكم", "ربط متجرك (Salla / Zid / Shopify)", "استلام الشحنة الأولى في مستودعاتنا", "فهرسة المنتجات مع صور وأكواد SKU", "تدريب فريق التأكيد على سيناريو منتجك", "اختبار تجريبي بـ 5-10 طلبات"],
              },
              {
                n: "4",
                title: "التشغيل اليومي",
                meta: "مستمر",
                items: ["الطلبات تدخل لوحة تحكمك من متجرك مباشرة", "فريق التأكيد يتصل بالعميل خلال ساعتين", "المستودع يجهّز الطلب فور التأكيد", "شركة الشحن تستلم في نفس اليوم أو اليوم التالي", "العميل يستلم الطلب خلال 1-4 أيام", "التحصيل يتم من العميل (COD أو إلكتروني)", "كل شيء مُسجّل في لوحة تحكمك لحظياً"],
              },
              {
                n: "5",
                title: "التقارير والتحسين",
                meta: "أسبوعية وشهرية",
                items: ["تقرير أسبوعي: عدد الطلبات، نسبة التأكيد، أسباب الفشل، توصيات", "تقرير شهري تفصيلي: أداء كل منتج + ملخص مالي", "مكالمة مراجعة ربع سنوية مع مدير حسابك"],
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 bg-white border border-[#E8E5F2] rounded-2xl p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-extrabold text-lg flex items-center justify-center">{step.n}</div>
                <div>
                  <p className="font-extrabold text-primary text-[16px] mb-0.5">{step.title}</p>
                  <p className="text-[12px] text-accent font-bold mb-2">{step.meta}</p>
                  <ul className="space-y-1">
                    {step.items.map(i => (
                      <li key={i} className="text-[13px] text-primary/70 flex gap-2"><span className="text-accent mt-0.5">←</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ───────────────── Section 5: سياسة المنتجات ───────────────── */}
        <Section id="products" icon={ShieldCheck} title="القسم الخامس: سياسة المنتجات" color="text-purple-700">
          <Accordion type="multiple" className="space-y-3">

            <Item value="allowed">
              <Q>المنتجات المسموحة ✅</Q>
              <A>
                <div className="grid grid-cols-2 gap-2">
                  {["الإلكترونيات العامة (شواحن، سماعات، إكسسوارات موبايل)", "الأزياء والملابس والأحذية والإكسسوارات", "منتجات العناية الشخصية المسموحة", "منتجات المطبخ والأدوات المنزلية", "منتجات الأطفال المطابقة للمواصفات", "الرياضة واللياقة والمعدات الخفيفة", "الحقائب والأمتعة", "إكسسوارات وتجهيزات السيارات", "المنتجات الرقمية والقرطاسية", "منتجات الحيوانات الأليفة (غير غذائية)"].map(i => (
                    <div key={i} className="flex gap-2 text-[13px] text-green-800 bg-green-50 rounded-xl p-2.5">
                      <span>✅</span><span>{i}</span>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

            <Item value="banned">
              <Q>المنتجات الممنوعة ❌</Q>
              <A>
                <p className="mb-3 text-primary/70 text-[14px]">هذه المنتجات لا نستطيع تشغيلها نهائياً — إما لأنها ممنوعة قانونياً أو تحمل مخاطر تشغيلية عالية:</p>
                <div className="space-y-1.5">
                  {["منتجات لحم الخنزير بأي شكل", "المشروبات الكحولية", "المخدرات وأي مواد مُدرجة كمخدرة", "الأسلحة والذخائر ومقلّداتها", "التبغ والسجائر والإلكترونية والنيكوتين", "المواد الإباحية أو المخالفة للقيم", "الأدوية البشرية بجميع أنواعها", "المكمّلات الغذائية بدون تسجيل SFDA", "منتجات التجميل بدون تسجيل SFDA", "المواد المشعّة والخطرة والقابلة للاشتعال", "السلع المقلّدة (Counterfeit)", "المنتجات ذات الادعاءات الطبية غير المعتمدة", "الشمّة والنرجيلة والشيشة"].map(i => (
                    <div key={i} className="flex gap-2 text-[13px] text-red-800 bg-red-50 rounded-xl p-2.5">
                      <span>❌</span><span>{i}</span>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

            <Item value="restricted">
              <Q>المنتجات المقيّدة ⚠️ (تحتاج موافقة)</Q>
              <A>
                <p className="mb-3 text-primary/70 text-[14px]">هذه المنتجات ممكن تشغيلها — لكن بشروط إضافية:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="p-3 text-right border border-[#E8E5F2] text-amber-800">الفئة</th>
                        <th className="p-3 text-right border border-[#E8E5F2] text-amber-800">ما يُطلب منك</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["مستحضرات التجميل", "تسجيل SFDA + شهادة تحليل المكونات"],
                        ["المكملات الغذائية", "تسجيل SFDA + شهادة المنشأ"],
                        ["الأغذية المعلّبة", "شهادة حلال + تسجيل SFDA + شهادة تحليل"],
                        ["منتجات الأطفال (ألعاب)", "شهادة مطابقة SASO"],
                        ["الأجهزة الطبية الخفيفة", "تسجيل SFDA + دليل استخدام بالعربي"],
                        ["المنتجات الكهربائية", "شهادة SASO + ملصق عربي"],
                        ["العطور", "شهادة تحليل (خاصة لو تحتوي كحول)"],
                      ].map(([cat, req]) => (
                        <tr key={cat} className="border-b border-[#E8E5F2] text-primary/75">
                          <td className="p-3 border border-[#E8E5F2] font-medium text-primary">{cat}</td>
                          <td className="p-3 border border-[#E8E5F2]">{req}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </A>
            </Item>

          </Accordion>
        </Section>

        {/* ───────────────── Section 6: حساب التسعير ───────────────── */}
        <Section id="calculator" icon={Calculator} title="القسم السادس: كيف تحسب تسعير منتجك" color="text-orange-700">
          <Accordion type="multiple" className="space-y-3">

            <Item value="formula">
              <Q>المعادلة الذهبية للتسعير</Q>
              <A>
                <p className="mb-3 text-primary/70">سعر البيع النهائي مكوّن من 6 عناصر. لو تجاهلت أي عنصر، هامش ربحك سيتآكل دون أن تعرف السبب.</p>
                <div className="bg-primary/5 rounded-2xl p-4 font-mono text-[13px] text-primary leading-[2] mb-4 border border-[#E8E5F2]" dir="ltr">
                  <div className="text-right" dir="rtl">
                    <p>سعر البيع = تكلفة المنتج الأصلية (COGS)</p>
                    <p className="mr-14">+ تكاليف الاستيراد والشحن الدولي</p>
                    <p className="mr-14">+ تكاليف التشغيل (تخزين + تأكيد + شحن + تحصيل)</p>
                    <p className="mr-14">+ تكلفة التسويق (CAC)</p>
                    <p className="mr-14">+ احتياطي المخاطر (فشل تسليم + إرجاع)</p>
                    <p className="mr-14">+ هامش الربح المستهدف</p>
                    <p className="mr-14">+ الضرائب (VAT 15%)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { n: "1", t: "تكلفة المنتج (COGS)", d: "السعر الذي تشتري به من المورّد." },
                    { n: "2", t: "تكاليف الاستيراد", d: "الشحن الدولي + جمارك + تخليص + نقل للمستودع." },
                    { n: "3", t: "تكاليف التشغيل", d: "كل ما تدفعه لهلا لكل طلب." },
                    { n: "4", t: "تكلفة التسويق (CAC)", d: "كم تدفع في الإعلانات للحصول على طلب واحد." },
                    { n: "5", t: "احتياطي المخاطر", d: "نسبة فشل التسليم + نسبة الإرجاع." },
                    { n: "6", t: "هامش الربح", d: "نموذجياً 20-35% في التجارة الإلكترونية." },
                    { n: "7", t: "الضرائب", d: "VAT 15% تُضاف على السعر النهائي للعميل." },
                  ].map(i => (
                    <div key={i.n} className="flex gap-3 text-[13px]">
                      <span className="font-bold text-accent w-5 flex-shrink-0">{i.n}.</span>
                      <span><strong>{i.t}</strong> — <span className="text-primary/65">{i.d}</span></span>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

            <Item value="china-example">
              <Q>مثال عملي: استيراد من الصين (منتج بـ 15 ريال)</Q>
              <A>
                <div className="space-y-4">
                  {[
                    { label: "COGS من الصين", rows: [["سعر الوحدة من المصنع", "15 ريال"], ["عمولة الوكيل (2-5%)", "0.75 ريال"], ["فحص الجودة (موزّع)", "0.5 ريال"]], total: ["إجمالي COGS", "16.25 ريال/قطعة"] },
                    { label: "تكاليف الاستيراد", rows: [["الشحن البحري (LCL)", "3.5 ريال/قطعة"], ["التأمين البحري", "0.3 ريال/قطعة"], ["التخليص الجمركي", "0.8 ريال/قطعة"], ["الضريبة الجمركية (5-15%)", "1-2.5 ريال/قطعة"]], total: ["إجمالي الاستيراد", "6.6 ريال/قطعة"] },
                    { label: "تكاليف التشغيل (هلا)", rows: [["تخزين شهري", "1 ريال"], ["تغليف قياسي", "3 ريال"], ["تأكيد الطلب", "10 ريال"], ["شحن محلي", "18 ريال"], ["تحصيل COD (3%)", "4.5 ريال"]], total: ["إجمالي التشغيل", "37 ريال/طلب"] },
                  ].map((block) => (
                    <div key={block.label}>
                      <p className="font-bold text-[13px] text-primary/60 mb-1">{block.label}</p>
                      <div className="rounded-xl overflow-hidden border border-[#E8E5F2]">
                        {block.rows.map(([k, v]) => (
                          <div key={k} className="flex justify-between px-4 py-2 text-[13px] border-b border-[#E8E5F2] last:border-none">
                            <span className="text-primary/65">{k}</span>
                            <span className="font-medium text-primary">{v}</span>
                          </div>
                        ))}
                        <div className="flex justify-between px-4 py-2 bg-primary/5 font-bold text-[14px]">
                          <span className="text-primary">{block.total[0]}</span>
                          <span className="text-accent">{block.total[1]}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-primary rounded-2xl p-4 text-white text-center">
                    <p className="text-[13px] text-white/70 mb-1">لو سعر البيع: 150 ريال</p>
                    <p className="text-[28px] font-extrabold">هامش صافٍ: 9.4%</p>
                    <p className="text-[12px] text-white/60 mt-1">ارفع السعر لـ 179 ريال → هامش 25%</p>
                  </div>
                </div>
              </A>
            </Item>

            <Item value="quick-rules">
              <Q>قاعدة الـ 3x السريعة وجدول التسعير</Q>
              <A>
                <div className="bg-primary/5 rounded-2xl p-4 mb-4 text-center">
                  <p className="text-[13px] text-primary/65 mb-1">قاعدة سريعة للتسعير التقريبي</p>
                  <p className="text-[22px] font-extrabold text-primary">سعر البيع ≈ تكلفة الاستيراد × 3</p>
                  <p className="text-[12px] text-primary/50 mt-1">للمنتجات الأغلى: × 2.5 أو × 2</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        {["السعر الأصلي", "× 2", "× 2.5", "× 3"].map(h => (
                          <th key={h} className="p-2.5 text-center border border-primary/30">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["10 ريال", "20", "25", "30"],
                        ["20 ريال", "40", "50", "60"],
                        ["30 ريال", "60", "75", "90"],
                        ["50 ريال", "100", "125", "150"],
                        ["80 ريال", "160", "200", "240"],
                        ["100 ريال", "200", "250", "300"],
                        ["150 ريال", "300", "375", "450"],
                      ].map((row, i) => (
                        <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                          {row.map((cell, j) => (
                            <td key={j} className={`p-2.5 text-center border border-[#E8E5F2] ${j === 3 ? "font-bold text-accent" : ""}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </A>
            </Item>

            <Item value="mistakes">
              <Q>أخطاء شائعة في التسعير</Q>
              <A>
                <div className="space-y-3">
                  {[
                    { title: "حساب التكلفة بدون نسبة فشل التسليم", desc: "تاجر يظن هامشه 40% — الحقيقة مع نسبة فشل 35%، الهامش الحقيقي قد يكون 10% فقط." },
                    { title: "تجاهل تكلفة التسويق في التسعير", desc: "الإعلانات ليست 'خسارة مقبولة' — هي جزء أساسي من تكلفة المنتج." },
                    { title: "تسعير المنافسين بدون معرفة تكلفتهم", desc: "منافسك يبيع بـ 99 ريال؟ ربما يخسر وينفق لاكتساب الحصة السوقية." },
                    { title: "عدم مراجعة الأسعار شهرياً", desc: "تكاليفك تتغيّر (شحن، دولار، إعلانات). راجع تسعيرك كل شهر." },
                    { title: "نسيان ضريبة القيمة المضافة", desc: "VAT 15% — لو سعّرت بـ 100 ريال، المتاح لك فعلياً هو 86.96 ريال فقط." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="border border-red-200 bg-red-50 rounded-xl p-3">
                      <p className="font-bold text-red-800 text-[14px] mb-1">❌ {title}</p>
                      <p className="text-[13px] text-red-700/80">{desc}</p>
                    </div>
                  ))}
                </div>
              </A>
            </Item>

          </Accordion>
        </Section>

        {/* ───────────────── CTA ───────────────── */}
        <div className="bg-gradient-to-br from-primary to-[#1E1A4D] rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-[26px] md:text-[36px] font-extrabold mb-3">جاهز تبدأ؟</h2>
          <p className="text-white/80 leading-[1.85] max-w-[480px] mx-auto mb-8">
            لو وصلت لهنا، أنت تعرف الآن كل شيء عن هلا كوميرس. الخطوة التالية: احجز استشارة مجانية مع فريقنا.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-[12px] transition-colors text-[16px]"
            >
              <ArrowLeft size={18} />
              احجز استشارة مجانية
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-[14px] text-white/70">
            <a href="mailto:support@halakommers.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} /> support@halakommers.com
            </a>
            <Link href="/blog" className="flex items-center gap-2 hover:text-white transition-colors">
              <BookOpen size={16} /> مدونة هلا
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

/* ─── helpers ─── */

function Section({ id, icon: Icon, title, color, children }: {
  id: string;
  icon: React.ElementType;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E5F2]`}>
        <div className={`w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center ${color}`}>
          <Icon size={20} className="opacity-80" />
        </div>
        <h2 className={`text-[20px] md:text-[24px] font-extrabold ${color}`}>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function Item({ value, children }: { value: string; children: React.ReactNode }) {
  return <AccordionItem value={value} className="bg-white border border-[#E8E5F2] rounded-2xl px-5 overflow-hidden">{children}</AccordionItem>;
}

function Q({ children }: { children: React.ReactNode }) {
  return <AccordionTrigger className="text-[15px] font-bold text-primary py-4 hover:no-underline">{children}</AccordionTrigger>;
}

function A({ children }: { children: React.ReactNode }) {
  return <AccordionContent className="pb-5 text-primary/80 leading-[1.85]">{children}</AccordionContent>;
}

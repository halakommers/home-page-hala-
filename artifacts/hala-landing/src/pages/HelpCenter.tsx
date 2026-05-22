import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Search,
  BookOpen,
  Boxes,
  DollarSign,
  ListChecks,
  ShieldCheck,
  Calculator,
  ArrowLeft,
  ChevronRight,
  Home,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

/* ─── Types ─── */
interface Article {
  id: string;
  title: string;
  content: React.ReactNode;
  keywords?: string[];
}

interface Category {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  articles: Article[];
}

/* ─── Data ─── */
const categories: Category[] = [
  {
    id: "intro",
    icon: BookOpen,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "التعريف بهلا كوميرس",
    description: "من نحن، وكيف نختلف عن شركات الشحن، ولمن نحن مناسبون.",
    articles: [
      {
        id: "what",
        title: "ما هي هلا كوميرس؟",
        keywords: ["هلا", "من نحن", "فولفيلمنت"],
        content: (
          <>
            <p className="mb-3 text-primary/70">هلا كوميرس شريك تشغيلي متكامل للتجارة الإلكترونية في السعودية والخليج. نحن لسنا شركة شحن — نحن <strong>منظومة كاملة</strong> تربط بين خمس خدمات حيوية:</p>
            <ol className="list-decimal list-inside space-y-2 text-primary/75 mr-2">
              {["التوريد والاستيراد من الصين ومصر وأي مصدر تختاره", "التخزين والتغليف في مستودعاتنا الخليجية", "تأكيد الطلبات عبر فريق بلهجة محلية", "الشحن مع كبرى شركات الشحن", "التحصيل والتسوية المالية وتحويل مستحقاتك"].map(i => <li key={i}>{i}</li>)}
            </ol>
            <p className="mt-3 text-primary/70">دورنا الأساسي: نحرّرك من تعقيدات التشغيل حتى تركّز على ما يهمّك فعلاً — <strong>النمو والتسويق</strong>.</p>
          </>
        ),
      },
      {
        id: "diff",
        title: "الفرق بين هلا وشركة شحن عادية",
        keywords: ["شحن", "مقارنة", "فرق"],
        content: (
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
                {[["نقل الطرد من A إلى B","✅","✅"],["توريد المنتج من المصدر","❌","✅"],["تخزين المخزون","❌ (أو رسوم منفصلة)","✅"],["تأكيد الطلبات بفريق محلي","❌","✅"],["اختيار شركة الشحن المناسبة","❌ (شركة واحدة)","✅ (عدة شركات)"],["تحصيل COD","جزئياً","✅"],["التسوية المالية المنظمة","❌","✅"],["لوحة تحكم موحّدة","❌","✅"]].map(([l,a,b]) => (
                  <tr key={l} className="border-b border-[#E8E5F2]">
                    <td className="p-3 border border-[#E8E5F2] font-medium text-primary">{l}</td>
                    <td className="p-3 border border-[#E8E5F2] text-center">{a}</td>
                    <td className="p-3 border border-[#E8E5F2] text-center font-bold text-accent">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "who",
        title: "لمن هلا مناسبة؟",
        keywords: ["مناسبة", "فئات", "بائعين", "dropshipping"],
        content: (
          <div className="space-y-3">
            {[{l:"متاجر إلكترونية على Salla / Zid / Shopify",d:"تركّز على البيع والتسويق وتريد من يتولى التشغيل."},{l:"المسوّقون والـ Dropshippers",d:"تحتاج مخزوناً جاهزاً وتنفيذاً سريعاً وتحصيلاً منظماً."},{l:"البراندات الناشئة",d:"تريد بناء تجربة عميل قوية وتوصيل احترافي."},{l:"المتاجر بمنتج واحد",d:"تحتاج تشغيلاً لا يأكل هامش ربحك."},{l:"الـ Affiliates ومنشئو المحتوى",d:"لديك جمهور وتريد منتجاً جاهزاً للبيع."}].map(i => (
              <div key={i.l} className="flex gap-3 p-3 bg-primary/5 rounded-xl">
                <span className="text-accent font-bold">✓</span>
                <div><p className="font-bold text-primary text-[14px]">{i.l}</p><p className="text-primary/65 text-[13px]">{i.d}</p></div>
              </div>
            ))}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[13px] text-amber-800">
              <strong>متى لا تكون هلا مناسبة؟</strong>
              <ul className="mt-1.5 space-y-1 list-disc list-inside">
                <li>منتجك يحتاج تركيباً في موقع العميل (أثاث ثقيل، أجهزة كبيرة)</li>
                <li>تعمل بنموذج B2B فقط بطلبات ضخمة للشركات</li>
                <li>منتجك ضمن قائمة الممنوعات</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "services",
    icon: Boxes,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "الخدمات بالتفصيل",
    description: "التوريد، التخزين، تأكيد الطلبات، الشحن، التحصيل المالي، ولوحة التحكم.",
    articles: [
      {
        id: "import",
        title: "خدمة التوريد والاستيراد",
        keywords: ["توريد", "استيراد", "صين", "مصر", "جمارك"],
        content: (
          <>
            <p className="mb-3 text-primary/70">نوفّر لك منتجاتك من المصدر مباشرة ونتولى نيابةً عنك:</p>
            <ul className="space-y-1.5 text-[14px] text-primary/75 mb-4">
              {["البحث عن الموردين وطلب العينات","التفاوض على الأسعار وشروط الدفع","الفحص قبل الشحن (Quality Control)","الشحن الدولي (بحري / جوي / بري)","التخليص الجمركي والضرائب","النقل لمستودعاتنا في السعودية أو الإمارات"].map(i => <li key={i} className="flex gap-2"><span className="text-accent">←</span>{i}</li>)}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              {[{l:"الصين (بحري)",v:"35-50 يوم"},{l:"الصين (جوي)",v:"7-12 يوم"},{l:"مصر (بري)",v:"10-15 يوم"},{l:"تركيا",v:"15-25 يوم"}].map(i => (
                <div key={i.l} className="bg-primary/5 rounded-xl p-3 text-center">
                  <p className="text-[12px] text-primary/60">{i.l}</p>
                  <p className="font-extrabold text-primary text-[16px]">{i.v}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "storage",
        title: "خدمة التخزين والتغليف",
        keywords: ["تخزين", "مستودع", "تغليف", "براند"],
        content: (
          <>
            <div className="space-y-2 mb-4">
              {["استلام الحاويات وفحصها مع تقرير بالكميات","التخزين الآمن بحرارة ورطوبة مناسبة","إدارة المخزون ومتابعة الكميات","تنبيهات المخزون المنخفض قبل النفاد","التغليف الاحترافي بهوية براندك","إضافة مواد تسويقية (بطاقات شكر، كوبونات، عينات)"].map(i => <div key={i} className="flex gap-2 text-[14px] text-primary/75"><span className="text-green-500">✓</span>{i}</div>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[{t:"تغليف قياسي",d:"كرتون بنيّ مع ملصق شحن فقط"},{t:"تغليف هلا الأساسي",d:"كرتون أبيض + ملصق هلا"},{t:"تغليف مخصّص بهوية البراند",d:"كرتون مصمم بلوجوك (500+ قطعة)"},{t:"تغليف فاخر",d:"علب داخلية + مناديل حريرية + بطاقات شكر"}].map(i => (
                <div key={i.t} className="border border-[#E8E5F2] rounded-xl p-3">
                  <p className="font-bold text-[13px] text-primary">{i.t}</p>
                  <p className="text-[12px] text-primary/60">{i.d}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "confirm",
        title: "خدمة تأكيد الطلبات (Call Center)",
        keywords: ["تأكيد", "call center", "cod", "لهجة"],
        content: (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-[13px] text-amber-800">
              في سوق COD الخليجي، نسبة الطلبات الوهمية قد تصل <strong>40-50%</strong>. بدون تأكيد احترافي ستدفع تكلفة شحن لطلبات لن تُسلَّم.
            </div>
            <ol className="list-decimal list-inside space-y-2 text-[14px] text-primary/75 mb-4">
              {["رسالة واتساب تمهيدية فور وصول الطلب","مكالمة خلال أول ساعتين","تأكيد المنتج والكمية والسعر والعنوان","طلب Google Maps Pin عبر واتساب","تأكيد موعد التسليم المتوقّع","تسجيل المكالمة (متاح في لوحة التحكم)"].map(i => <li key={i}>{i}</li>)}
            </ol>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-primary/5 rounded-xl p-3 text-center"><p className="text-[12px] text-primary/60">منتجات عادية</p><p className="font-extrabold text-primary text-[18px]">60-75%</p><p className="text-[12px] text-primary/60">معدل تأكيد</p></div>
              <div className="bg-accent/10 rounded-xl p-3 text-center"><p className="text-[12px] text-accent/70">متوسط هلا 2026</p><p className="font-extrabold text-accent text-[18px]">68%+</p><p className="text-[12px] text-accent/70">معدل فعلي</p></div>
            </div>
          </>
        ),
      },
      {
        id: "shipping",
        title: "خدمة الشحن",
        keywords: ["شحن", "aramex", "smsa", "توصيل"],
        content: (
          <>
            <p className="mb-3 text-primary/70">نستخدم عدة شركات شحن ونختار الأنسب لكل طلب حسب الوجهة والسرعة والحجم.</p>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[{l:"داخل السعودية",i:"Aramex, SMSA, J&T, iMile"},{l:"داخل الإمارات",i:"Aramex, Fetchr, Zajil"},{l:"باقي الخليج",i:"شراكات محلية"}].map(i => <div key={i.l} className="bg-primary/5 rounded-xl p-3"><p className="font-bold text-[13px] text-primary mb-1">{i.l}</p><p className="text-[12px] text-primary/65">{i.i}</p></div>)}
            </div>
            {[["الرياض / جدة / الدمام","1-2 يوم"],["باقي مدن السعودية","2-4 أيام"],["الإمارات","1-3 أيام"],["باقي الخليج","3-7 أيام"]].map(([p,t]) => <div key={p} className="flex justify-between items-center border-b border-[#E8E5F2] pb-2 mb-2 text-[14px]"><span className="text-primary/75">{p}</span><span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{t}</span></div>)}
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-[13px] text-green-800 mt-3">نحصل على <strong>أسعار مخفّضة 15-30%</strong> مقارنة بأسعار الأفراد — ونمرّرها لك.</div>
          </>
        ),
      },
      {
        id: "collection",
        title: "التحصيل والتسوية المالية",
        keywords: ["تحصيل", "cod", "تسوية", "تحويل"],
        content: (
          <>
            <div className="space-y-2 mb-4">
              {[{t:"+200 طلب/شهر",f:"أسبوعياً (كل أحد)"},{t:"50-200 طلب/شهر",f:"نصف شهرياً"},{t:"أقل من 50 طلب/شهر",f:"شهرياً (نهاية الشهر)"}].map(i => <div key={i.t} className="flex justify-between items-center p-3 bg-primary/5 rounded-xl text-[14px]"><span className="font-bold text-primary">{i.t}</span><span className="text-primary/70">{i.f}</span></div>)}
            </div>
            <ul className="text-[14px] text-primary/75 space-y-1">
              {["حساب سعودي (محلي) — نفس اليوم","حساب إماراتي","حسابات خليجية أخرى (حسب الطلب)","حساب مصري (تحويل دولي — 2-3 أيام)"].map(i => <li key={i} className="flex gap-2"><span className="text-accent">✓</span>{i}</li>)}
            </ul>
          </>
        ),
      },
      {
        id: "dashboard",
        title: "لوحة التحكم والتقارير",
        keywords: ["لوحة تحكم", "تقارير", "salla", "zid", "shopify"],
        content: (
          <>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["حالة كل طلب لحظياً","مستوى المخزون","تسجيلات مكالمات التأكيد","تقارير يومية وأسبوعية وشهرية","أسباب فشل الطلبات","أداء كل منتج"].map(i => <div key={i} className="flex gap-2 text-[13px] text-primary/75 bg-primary/5 rounded-xl p-2.5"><span className="text-accent">📊</span>{i}</div>)}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Salla","Zid","Shopify","WooCommerce","Excel / Manual"].map(i => <span key={i} className="bg-primary/10 text-primary font-bold text-[13px] px-3 py-1 rounded-full">{i}</span>)}
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "pricing",
    icon: DollarSign,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "الأسعار والتكاليف",
    description: "هيكل التسعير، شرائح الأسعار التقريبية، والرسوم الإضافية التي قد تواجهها.",
    articles: [
      {
        id: "pricing-structure",
        title: "هيكل التسعير في هلا",
        keywords: ["أسعار", "تسعير", "رسوم"],
        content: (
          <>
            <p className="mb-3 text-primary/70">الأسعار عندنا مكوّنة من 6 بنود واضحة — لن تكتشف رسوماً خفية في نهاية الشهر.</p>
            <table className="w-full text-[14px] border-collapse">
              <thead><tr className="bg-primary/5">{["#","البند","نوع الرسم"].map(h => <th key={h} className="p-3 text-right border border-[#E8E5F2]">{h}</th>)}</tr></thead>
              <tbody>
                {[["1","التوريد والاستيراد","نسبة من قيمة الشحنة"],["2","الاستلام في المستودع","رسم لكل قطعة"],["3","التخزين الشهري","حسب المساحة المستخدمة"],["4","تأكيد الطلب","رسم لكل طلب"],["5","الشحن","حسب الوزن والوجهة"],["6","التحصيل والتسوية","نسبة صغيرة من قيمة الطلب"]].map(([n,b,r]) => (
                  <tr key={n} className="border-b border-[#E8E5F2] text-primary/75">
                    <td className="p-3 border border-[#E8E5F2] font-bold text-accent text-center">{n}</td>
                    <td className="p-3 border border-[#E8E5F2] font-medium text-primary">{b}</td>
                    <td className="p-3 border border-[#E8E5F2]">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ),
      },
      {
        id: "price-tiers",
        title: "شرائح أسعار الخدمات (تقريبية)",
        keywords: ["أسعار", "شرائح", "شحن", "تخزين", "تأكيد"],
        content: (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-[13px] text-amber-800">الأسعار تقريبية وتعتمد على حجم النشاط ونوع المنتج. للحصول على عرض دقيق، احجز استشارة مجانية.</div>
            {[{t:"تأكيد الطلبات",rows:[["تأكيد بمكالمة واحدة","4-7 ريال/طلب"],["تأكيد كامل (مكالمة + واتساب)","8-12 ريال/طلب"],["تأكيد متقدّم (3 محاولات)","12-18 ريال/طلب"]]},{t:"الشحن (داخل السعودية)",rows:[["داخل المدينة (حتى 5 كجم)","12-18 ريال"],["بين المدن الرئيسية","17-25 ريال"],["للمناطق النائية","25-40 ريال"],["Same Day / Next Day","25-35 ريال"]]},{t:"التخزين",rows:[["قطعة صغيرة/شهر","0.5-1.5 ريال"],["قطعة متوسطة/شهر","2-5 ريال"],["كبير الحجم/شهر","8-20 ريال"]]},{t:"التحصيل",rows:[["رسوم COD","2-3.5% من قيمة الطلب"],["تحويل محلي","0-25 ريال/تحويل"],["تحويل دولي (مصر)","40-80 ريال/تحويل"]]}].map(s => (
              <div key={s.t} className="mb-4">
                <p className="font-bold text-[13px] text-primary/60 mb-1">{s.t}</p>
                <div className="rounded-xl overflow-hidden border border-[#E8E5F2]">
                  {s.rows.map(([k,v],i) => <div key={k} className={`flex justify-between px-4 py-2.5 text-[13px] ${i%2===0?"bg-white":"bg-primary/5"}`}><span className="text-primary/70">{k}</span><span className="font-bold text-primary">{v}</span></div>)}
                </div>
              </div>
            ))}
          </>
        ),
      },
      {
        id: "hidden-fees",
        title: "الرسوم الإضافية والمخفية",
        keywords: ["رسوم", "مخفية", "إرجاع", "طوارئ"],
        content: (
          <>
            <div className="space-y-2 mb-4">
              {[["رسوم الإرجاع","15-25 ريال/طلب مرتجع"],["رسوم إعادة المحاولة","8-12 ريال"],["مخزون غير منظم","100-300 ريال/شحنة"],["تخزين فوق 90 يوم","+20% على سعر التخزين"],["الشحن العاجل في عطلات","+50% على الشحن"]].map(([f,p]) => <div key={f} className="flex justify-between p-3 border border-[#E8E5F2] rounded-xl text-[14px]"><span className="text-primary/75">{f}</span><span className="font-bold text-primary">{p}</span></div>)}
            </div>
            <p className="font-bold text-[14px] mb-2 text-green-700">رسوم لن تدفعها أبداً:</p>
            <div className="grid grid-cols-2 gap-2">
              {["رسوم إعداد حساب","رسوم شهرية ثابتة","رسوم API أو تكامل","حد أدنى إجباري للطلبات"].map(i => <div key={i} className="flex gap-2 text-[13px] text-green-800 bg-green-50 rounded-xl p-2.5"><span>❌</span><span>لا يوجد {i}</span></div>)}
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "steps",
    icon: ListChecks,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "مراحل العمل مع هلا",
    description: "من الاستشارة الأولى حتى التشغيل اليومي والتقارير — 5 خطوات واضحة.",
    articles: [
      {
        id: "step1",
        title: "خطوة 1: الاستشارة الأولية (مجانية)",
        keywords: ["استشارة", "بداية", "مجانية"],
        content: (
          <div className="space-y-2">
            <p className="text-[13px] text-accent font-bold">المدة: 30-45 دقيقة • مجانية بالكامل</p>
            <ol className="list-decimal list-inside space-y-2 text-[14px] text-primary/75">
              {["نفهم طبيعة نشاطك الحالي أو المخطّط","نطّلع على منتجك ومنتجاتك","نحلّل سوقك المستهدف","نستعرض الخدمات التي تحتاجها فعلاً","نعطيك تقدير أولي للأسعار وهامش الربح المتوقّع"].map(i => <li key={i}>{i}</li>)}
            </ol>
          </div>
        ),
      },
      {
        id: "step2",
        title: "خطوة 2: التقييم والعقد",
        keywords: ["عقد", "تقييم", "سعر"],
        content: (
          <div>
            <p className="text-[13px] text-accent font-bold mb-3">المدة: 3-5 أيام عمل</p>
            <ol className="list-decimal list-inside space-y-2 text-[14px] text-primary/75">
              {["تقييم تفصيلي لمنتجك (مسموح؟ يحتاج تراخيص؟)","عرض سعر مكتوب ومفصّل لكل بند","مناقشة بنود العقد (المدة، الرسوم، ضمان الجودة)","التوقيع ودفع العربون (لو كان مطلوباً)"].map(i => <li key={i}>{i}</li>)}
            </ol>
          </div>
        ),
      },
      {
        id: "step3",
        title: "خطوة 3: الإعداد التقني (Onboarding)",
        keywords: ["onboarding", "إعداد", "ربط", "متجر"],
        content: (
          <div>
            <p className="text-[13px] text-accent font-bold mb-3">المدة: 5-10 أيام عمل</p>
            <ol className="list-decimal list-inside space-y-2 text-[14px] text-primary/75">
              {["فتح حسابك في لوحة التحكم","ربط متجرك (Salla / Zid / Shopify)","استلام الشحنة الأولى في مستودعاتنا","فهرسة المنتجات مع صور وأكواد SKU","تدريب فريق التأكيد على سيناريو منتجك","اختبار تجريبي بـ 5-10 طلبات"].map(i => <li key={i}>{i}</li>)}
            </ol>
          </div>
        ),
      },
      {
        id: "step4",
        title: "خطوة 4: التشغيل اليومي",
        keywords: ["تشغيل", "يومي", "طلبات"],
        content: (
          <div>
            <p className="text-[13px] text-accent font-bold mb-3">مستمر بعد الإطلاق</p>
            <ol className="list-decimal list-inside space-y-2 text-[14px] text-primary/75">
              {["الطلبات تدخل لوحة تحكمك من متجرك مباشرة","فريق التأكيد يتصل بالعميل خلال ساعتين","المستودع يجهّز الطلب فور التأكيد","شركة الشحن تستلم في نفس اليوم أو اليوم التالي","العميل يستلم الطلب خلال 1-4 أيام","كل شيء مُسجّل في لوحة تحكمك لحظياً"].map(i => <li key={i}>{i}</li>)}
            </ol>
          </div>
        ),
      },
      {
        id: "step5",
        title: "خطوة 5: التقارير والتحسين",
        keywords: ["تقارير", "تحسين", "أداء"],
        content: (
          <div className="space-y-3">
            {[{t:"تقرير أسبوعي",items:["عدد الطلبات وحالاتها","نسبة التأكيد والتسليم","أسباب فشل الطلبات","توصيات سريعة"]},{t:"تقرير شهري تفصيلي",items:["تحليل أداء كل منتج","مقارنة مع الشهر السابق","ملخص مالي كامل"]},{t:"مكالمة ربع سنوية",items:["مناقشة أهدافك القادمة","خطط التوسّع","تعديلات العقد"]}].map(s => (
              <div key={s.t} className="border border-[#E8E5F2] rounded-xl p-3">
                <p className="font-bold text-[14px] text-primary mb-1">{s.t}</p>
                <ul className="space-y-1">{s.items.map(i => <li key={i} className="text-[13px] text-primary/70 flex gap-2"><span className="text-accent">←</span>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: "products",
    icon: ShieldCheck,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    title: "سياسة المنتجات",
    description: "ما يمكن تشغيله، وما هو ممنوع، وما يحتاج موافقة مسبقة وشهادات.",
    articles: [
      {
        id: "allowed",
        title: "المنتجات المسموحة ✅",
        keywords: ["مسموحة", "منتجات", "إلكترونيات", "ملابس"],
        content: (
          <div className="grid grid-cols-2 gap-2">
            {["الإلكترونيات العامة (شواحن، سماعات، إكسسوارات)","الأزياء والملابس والأحذية والإكسسوارات","منتجات العناية الشخصية (المسموحة)","منتجات المطبخ والأدوات المنزلية","منتجات الأطفال المطابقة للمواصفات","الرياضة واللياقة والمعدات الخفيفة","الحقائب والأمتعة","إكسسوارات وتجهيزات السيارات","المنتجات الرقمية والقرطاسية","منتجات الحيوانات الأليفة (غير غذائية)"].map(i => <div key={i} className="flex gap-2 text-[13px] text-green-800 bg-green-50 rounded-xl p-2.5"><span>✅</span><span>{i}</span></div>)}
          </div>
        ),
      },
      {
        id: "banned",
        title: "المنتجات الممنوعة ❌",
        keywords: ["ممنوعة", "محظورة", "أسلحة", "مخدرات", "كحول"],
        content: (
          <div className="space-y-1.5">
            {["لحم الخنزير بأي شكل","المشروبات الكحولية","المخدرات وأي مواد مُدرجة كمخدرة","الأسلحة والذخائر ومقلّداتها","التبغ والسجائر الإلكترونية والنيكوتين","المواد الإباحية أو المخالفة للقيم","الأدوية البشرية بجميع أنواعها","المكمّلات الغذائية بدون تسجيل SFDA","السلع المقلّدة (Counterfeit)","المنتجات ذات الادعاءات الطبية غير المعتمدة","المواد المشعّة والقابلة للاشتعال","الشمّة والنرجيلة والشيشة"].map(i => <div key={i} className="flex gap-2 text-[13px] text-red-800 bg-red-50 rounded-xl p-2.5"><span>❌</span><span>{i}</span></div>)}
          </div>
        ),
      },
      {
        id: "restricted",
        title: "المنتجات المقيّدة ⚠️ (تحتاج موافقة)",
        keywords: ["مقيّدة", "شروط", "sfda", "saso", "ترخيص"],
        content: (
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead><tr className="bg-amber-50">{["الفئة","ما يُطلب منك"].map(h => <th key={h} className="p-3 text-right border border-[#E8E5F2] text-amber-800">{h}</th>)}</tr></thead>
              <tbody>
                {[["مستحضرات التجميل","تسجيل SFDA + شهادة تحليل المكونات"],["المكملات الغذائية","تسجيل SFDA + شهادة المنشأ"],["الأغذية المعلّبة","شهادة حلال + تسجيل SFDA"],["منتجات الأطفال (ألعاب)","شهادة مطابقة SASO"],["الأجهزة الطبية الخفيفة","تسجيل SFDA + دليل بالعربي"],["المنتجات الكهربائية","شهادة SASO + ملصق عربي"],["العطور","شهادة تحليل (خاصة لو تحتوي كحول)"]].map(([c,r]) => (
                  <tr key={c} className="border-b border-[#E8E5F2]"><td className="p-3 border border-[#E8E5F2] font-medium text-primary">{c}</td><td className="p-3 border border-[#E8E5F2] text-primary/75">{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      },
    ],
  },
  {
    id: "calculator",
    icon: Calculator,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "حساب التسعير",
    description: "المعادلة الذهبية للتسعير، أمثلة عملية من الصين ومصر، وأخطاء يجب تجنّبها.",
    articles: [
      {
        id: "formula",
        title: "المعادلة الذهبية للتسعير",
        keywords: ["تسعير", "معادلة", "هامش", "ربح"],
        content: (
          <>
            <div className="bg-primary/5 rounded-2xl p-4 font-mono text-[13px] text-primary leading-[2] mb-4 border border-[#E8E5F2] text-right">
              <p>سعر البيع = تكلفة المنتج (COGS)</p>
              <p className="mr-14">+ تكاليف الاستيراد والشحن الدولي</p>
              <p className="mr-14">+ تكاليف التشغيل (هلا)</p>
              <p className="mr-14">+ تكلفة التسويق (CAC)</p>
              <p className="mr-14">+ احتياطي المخاطر</p>
              <p className="mr-14">+ هامش الربح (20-35%)</p>
              <p className="mr-14">+ VAT 15%</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[{n:"1",t:"COGS",d:"سعر الشراء من المورّد"},{n:"2",t:"الاستيراد",d:"جمارك + شحن دولي + نقل"},{n:"3",t:"التشغيل",d:"تخزين + تأكيد + شحن + تحصيل"},{n:"4",t:"التسويق (CAC)",d:"تكلفة الإعلان للحصول على طلب"},{n:"5",t:"احتياطي المخاطر",d:"نسبة فشل التسليم + الإرجاع"},{n:"6",t:"VAT",d:"15% على السعر النهائي"}].map(i => <div key={i.n} className="bg-primary/5 rounded-xl p-2.5 text-[12px]"><p className="font-bold text-accent">{i.n}. {i.t}</p><p className="text-primary/65">{i.d}</p></div>)}
            </div>
          </>
        ),
      },
      {
        id: "china-example",
        title: "مثال عملي: استيراد من الصين (منتج بـ 15 ريال)",
        keywords: ["صين", "مثال", "حساب", "ربح"],
        content: (
          <>
            {[{l:"COGS",rows:[["سعر المصنع","15 ريال"],["عمولة الوكيل","0.75 ريال"],["فحص الجودة","0.5 ريال"]],total:["إجمالي COGS","16.25 ريال"]},{l:"تكاليف الاستيراد",rows:[["الشحن البحري LCL","3.5 ريال"],["التخليص الجمركي","0.8 ريال"],["الضريبة الجمركية","1.5 ريال"]],total:["إجمالي الاستيراد","5.8 ريال"]},{l:"تكاليف التشغيل (هلا)",rows:[["تخزين","1 ريال"],["تغليف","3 ريال"],["تأكيد الطلب","10 ريال"],["شحن محلي","18 ريال"],["تحصيل COD 3%","4.5 ريال"]],total:["إجمالي التشغيل","36.5 ريال"]}].map(b => (
              <div key={b.l} className="mb-3">
                <p className="font-bold text-[12px] text-primary/50 mb-1">{b.l}</p>
                <div className="rounded-xl overflow-hidden border border-[#E8E5F2]">
                  {b.rows.map(([k,v],i) => <div key={k} className={`flex justify-between px-3 py-2 text-[13px] ${i%2===0?"bg-white":"bg-primary/5"}`}><span className="text-primary/65">{k}</span><span className="font-medium">{v}</span></div>)}
                  <div className="flex justify-between px-3 py-2 bg-primary/5 font-bold text-[14px]"><span>{b.total[0]}</span><span className="text-accent">{b.total[1]}</span></div>
                </div>
              </div>
            ))}
            <div className="bg-primary rounded-2xl p-4 text-white text-center mt-4">
              <p className="text-[12px] text-white/65">لو سعر البيع: 150 ريال</p>
              <p className="text-[26px] font-extrabold">هامش صافٍ: ~9%</p>
              <p className="text-[12px] text-white/55 mt-1">ارفع السعر لـ 179 ريال ← هامش 25%</p>
            </div>
          </>
        ),
      },
      {
        id: "quick-calc",
        title: "قاعدة الـ 3x وجدول التسعير السريع",
        keywords: ["3x", "جدول", "سريع", "تقريبي"],
        content: (
          <>
            <div className="bg-primary/5 rounded-2xl p-4 mb-4 text-center">
              <p className="text-[13px] text-primary/65 mb-1">قاعدة التسعير السريع</p>
              <p className="text-[22px] font-extrabold text-primary">سعر البيع ≈ تكلفة الاستيراد × 3</p>
            </div>
            <table className="w-full text-[13px] border-collapse">
              <thead><tr className="bg-primary text-white">{["السعر الأصلي","× 2","× 2.5","× 3"].map(h => <th key={h} className="p-2.5 text-center border border-primary/30">{h}</th>)}</tr></thead>
              <tbody>
                {[["10 ريال","20","25","30"],["20 ريال","40","50","60"],["30 ريال","60","75","90"],["50 ريال","100","125","150"],["80 ريال","160","200","240"],["100 ريال","200","250","300"]].map((row,i) => (
                  <tr key={row[0]} className={i%2===0?"bg-white":"bg-primary/5"}>
                    {row.map((c,j) => <td key={j} className={`p-2.5 text-center border border-[#E8E5F2] ${j===3?"font-bold text-accent":""}`}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ),
      },
      {
        id: "mistakes",
        title: "أخطاء شائعة في التسعير",
        keywords: ["أخطاء", "تسعير", "vat", "ضريبة", "فشل"],
        content: (
          <div className="space-y-3">
            {[{t:"تجاهل نسبة فشل التسليم",d:"مع نسبة فشل 35%، هامش 40% الظاهري قد يكون 10% فعلياً."},{t:"نسيان تكلفة التسويق (CAC)",d:"الإعلانات جزء أساسي من تكلفة المنتج، ليست خسارة مقبولة."},{t:"تقليد أسعار المنافسين",d:"منافسك يبيع بـ 99 ريال؟ ربما يخسر. لا تنسخ سعره بدون فهم نموذجه."},{t:"عدم مراجعة الأسعار شهرياً",d:"أسعار الشحن والدولار والإعلانات تتغيّر — راجع تسعيرك دورياً."},{t:"نسيان VAT 15%",d:"لو سعّرت بـ 100 ريال، المتاح لك فعلياً 86.96 ريال فقط."}].map(({t,d}) => (
              <div key={t} className="border border-red-200 bg-red-50 rounded-xl p-3">
                <p className="font-bold text-red-800 text-[14px] mb-1">❌ {t}</p>
                <p className="text-[13px] text-red-700/80">{d}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
];

/* ─── Flatten all articles for search ─── */
const allArticles = categories.flatMap(cat =>
  cat.articles.map(a => ({ ...a, catId: cat.id, catTitle: cat.title }))
);

/* ─── Main Component ─── */
export default function HelpCenter() {
  useSEO({
    title: "مركز المساعدة | هلا كوميرس",
    description: "كل ما تحتاج معرفته قبل وأثناء العمل مع هلا كوميرس — الخدمات، الأسعار، مراحل العمل، سياسة المنتجات، وكيف تحسب تسعيرك.",
    keywords: "مركز مساعدة هلا, أسئلة شائعة, خدمات الفولفيلمنت",
    canonical: "https://halacommerce.com/help",
  });

  const [query, setQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allArticles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.keywords || []).some(k => k.includes(q))
    );
  }, [query]);

  const currentCategory = selectedCat ? categories.find(c => c.id === selectedCat) : null;

  return (
    <div className="min-h-screen bg-background font-sans" dir="rtl">

      <Navbar />

      {/* ─── Hero ─── */}
      <section className="bg-white pt-28 md:pt-32 pb-10 text-primary text-center relative overflow-hidden border-b border-border">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute -right-20 top-16 h-64 w-64 rounded-full bg-primary/[0.055] blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-accent/[0.07] blur-3xl"
        />
        <div className="container max-w-[860px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {currentCategory && (
              <button
                onClick={() => setSelectedCat(null)}
                className="flex items-center gap-1.5 text-primary/55 text-[13px] mb-4 mx-auto hover:text-primary transition-colors"
              >
                <Home size={13} /> الرئيسية <ChevronRight size={13} /> {currentCategory.title}
              </button>
            )}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"
            >
              {currentCategory ? <currentCategory.icon size={23} /> : <Search size={23} />}
            </motion.div>
            <h1 className="text-[28px] md:text-[44px] font-bold leading-[1.2] mb-3">
              {currentCategory ? currentCategory.title : "كيف يمكننا مساعدتك اليوم؟"}
            </h1>
            <p className="text-primary/62 text-[15px] md:text-[17px] mb-8 leading-[1.8]">
              {currentCategory
                ? currentCategory.description
                : "ابحث في أكثر من 30 مقال ودليل شامل لكل ما يخص التوريد والشحن والتخزين"}
            </p>
            {!currentCategory && (
              <div className="relative max-w-[560px] mx-auto">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-primary/40"
                >
                  <Search size={18} />
                </motion.div>
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="ابحث عن: تأكيد الطلبات، أسعار التخزين، سياسة المنتجات..."
                  className="w-full bg-white text-primary placeholder:text-primary/40 rounded-xl border border-border px-5 pr-12 py-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── Filter tabs ─── */}
      <div className="bg-white/95 border-b border-border shadow-xs sticky top-16 z-40 backdrop-blur-xl">
        <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center gap-2 py-3 overflow-x-auto">
          <button
            onClick={() => { setSelectedCat(null); setQuery(""); }}
            className={`text-[13px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              !currentCategory ? "text-primary bg-primary/10" : "text-primary/60 hover:text-primary hover:bg-secondary"
            }`}
          >
              <Boxes size={13} /> كل الأقسام
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCat(cat.id); setQuery(""); }}
              className={`text-[13px] font-medium px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                currentCategory?.id === cat.id ? "text-primary bg-primary/10 font-bold" : "text-primary/60 hover:text-primary hover:bg-secondary"
              }`}
            >
              {cat.title}
            </button>
          ))}
          <a
            href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-accent hover:text-accent/80 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 mr-auto"
          >
            <MessageCircle size={13} /> تواصل معنا
          </a>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <main className="container max-w-[1100px] mx-auto px-4 sm:px-6 py-10 md:py-12">

        {/* Search results */}
        {query && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-[14px] text-primary/60 mb-6">
              {searchResults.length > 0
                ? `${searchResults.length} نتيجة لـ "${query}"`
                : `لا توجد نتائج لـ "${query}"`}
            </p>
            {searchResults.length > 0 ? (
              <div className="space-y-3 max-w-[860px]">
                {searchResults.map(a => (
                  <motion.button
                    key={a.id}
                    whileHover={{ x: -4 }}
                    onClick={() => { setSelectedCat(a.catId); setQuery(""); }}
                    className="w-full text-right brand-card rounded-2xl p-4 hover:border-accent/40 transition-all"
                  >
                    <p className="font-bold text-primary text-[15px] mb-1">{a.title}</p>
                    <p className="text-[12px] text-accent font-medium">{a.catTitle}</p>
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-primary/50">
                <Search size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-[16px]">جرّب كلمات مختلفة أو تواصل معنا مباشرة</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Category grid (home view) */}
        {!query && !currentCategory && (
          <AnimatePresence mode="wait">
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="text-[22px] md:text-[28px] font-bold text-primary text-center mb-10">أقسام مركز المساعدة</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedCat(cat.id)}
                    className="text-right brand-card rounded-2xl p-5 md:p-6 hover:border-accent/30 transition-all group"
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut", delay: i * 0.2 }}
                      className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center mb-4`}
                    >
                      <cat.icon size={22} className={cat.iconColor} />
                    </motion.div>
                    <h3 className={`font-bold text-[17px] mb-2 group-hover:text-accent transition-colors ${cat.iconColor}`}>
                      {cat.title}
                    </h3>
                    <p className="text-[13px] text-primary/60 leading-[1.7] mb-4">{cat.description}</p>
                    <span className={`text-[13px] font-bold flex items-center gap-1 ${cat.iconColor}`}>
                      <ArrowLeft size={14} />
                      {cat.articles.length} مقال
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Contact bar */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mt-14 brand-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-primary text-[16px] mb-1">لم تجد إجابتك؟</p>
                  <p className="text-[13px] text-primary/60">فريقنا جاهز للإجابة على أي سؤال خلال 24 ساعة.</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg text-[14px] hover:bg-primary/90 transition-colors"
                  >
                    <Phone size={15} /> احجز استشارة
                  </a>
                  <a
                    href="mailto:support@halakommers.com"
                    className="flex items-center gap-2 border border-border text-primary font-semibold px-5 py-2.5 rounded-lg text-[14px] hover:bg-primary/5 transition-colors"
                  >
                    <Mail size={15} /> راسلنا
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Category articles view */}
        {!query && currentCategory && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Back */}
              <button
                onClick={() => setSelectedCat(null)}
                className="flex items-center gap-2 text-primary/60 hover:text-primary text-[14px] mb-8 transition-colors"
              >
                <ChevronRight size={16} /> العودة لكل الأقسام
              </button>

              <div className="max-w-[860px]">
                <Accordion type="multiple" className="space-y-3">
                  {currentCategory.articles.map(article => (
                    <AccordionItem
                      key={article.id}
                      value={article.id}
                      className="bg-white border border-border rounded-2xl px-5 overflow-hidden shadow-xs"
                    >
                      <AccordionTrigger className="text-[15px] font-semibold text-primary py-4 hover:no-underline hover:text-accent transition-colors">
                        {article.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-primary/80 leading-[1.85]">
                        {article.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* End CTA */}
                <div className="mt-10 bg-primary rounded-2xl p-6 text-white text-center">
                  <p className="font-bold text-[18px] mb-2">لديك سؤال إضافي؟</p>
                  <p className="text-white/70 text-[14px] mb-5">احجز استشارة مجانية مع فريقنا خلال 30 دقيقة.</p>
                  <a
                    href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-[14px]"
                  >
                    <ArrowLeft size={16} /> احجز استشارة مجانية
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

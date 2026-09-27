import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpLeft, Boxes, CircleCheck, ClipboardCheck, Menu, PackageCheck, ShieldCheck, Truck, X, Warehouse, Wallet } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";
import halaLogo from "@/assets/hala-logo.svg";
import overviewImage from "@/assets/dashboards/dash_10.15.55_lg.webp";
import ordersImage from "@/assets/dashboards/dash_10.16.16_lg.webp";
import financeImage from "@/assets/dashboards/dash_10.16.33_lg.webp";
import productsImage from "@/assets/dashboards/dash_10.17.57_lg.webp";
import "./hala-design-v2.css";

const capabilities = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "كل طلب واضح من أول لحظة",
    description: "اعرف حالة الطلب وما يحتاج متابعة، من التأكيد حتى التسليم، في شاشة واحدة.",
    image: ordersImage,
    alt: "قائمة إدارة الطلبات في لوحة هلا",
  },
  {
    number: "02",
    icon: Warehouse,
    title: "مخزون جاهز لخطوتك الجاية",
    description: "المنتجات والتجهيز والشحن ضمن تشغيل متصل يساعدك تتحرك بثقة.",
    image: productsImage,
    alt: "واجهة المنتجات في منصة هلا",
  },
  {
    number: "03",
    icon: Wallet,
    title: "أرقام تساعدك تقرر",
    description: "تابع التحصيل والمستحقات بدل ما تجمعها كل مرة من أكثر من مكان.",
    image: financeImage,
    alt: "واجهة التحصيل والمستحقات في لوحة هلا",
  },
];

const journey = [
  { icon: Boxes, label: "التوريد", detail: "ابدأ بمنتج مناسب وسلسلة توريد واضحة." },
  { icon: Warehouse, label: "التخزين", detail: "مخزونك جاهز للتجهيز وقت الطلب." },
  { icon: PackageCheck, label: "الطلبات", detail: "تأكيد وتجهيز قبل خروج الشحنة." },
  { icon: Truck, label: "التوصيل", detail: "تابع الشحنة حتى باب العميل." },
  { icon: Wallet, label: "التحصيل", detail: "اعرف ما تم تحصيله وما ينتظر التسوية." },
];

const challenges = [
  {
    label: "الطلبات محتاجة متابعة",
    title: "كل طلب له خطوة تالية واضحة.",
    detail: "الفريق يعرف أي طلب يحتاج تأكيدًا، وأي طلب خرج للشحن، وما تم تسليمه بالفعل.",
    image: ordersImage,
    alt: "إدارة الطلبات في منصة هلا",
  },
  {
    label: "المخزون بعيد عن القرار",
    title: "شوف المنتجات قبل ما تخطط للنمو.",
    detail: "لما تكون حالة المنتجات والتجهيز أمامك، تعرف متى تعيد التوريد وماذا تجهز أولًا.",
    image: productsImage,
    alt: "المنتجات والمخزون في منصة هلا",
  },
  {
    label: "التحصيل مش واضح",
    title: "الأرقام في مكانها الصحيح.",
    detail: "تابع التسليم والتحصيل والمستحقات ضمن نفس رحلة التشغيل، من غير مطابقة يدوية مرهقة.",
    image: financeImage,
    alt: "المستحقات والتسويات في منصة هلا",
  },
];

function Enter({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Brand() {
  return <a className="hv2-brand" href="/concept" aria-label="هلا كوميرس، الرئيسية"><img src={halaLogo} alt="" width="90" height="52" /></a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="hv2-header">
      <div className="hv2-header-inner">
        <Brand />
        <nav id="hv2-navigation" className={menuOpen ? "is-open" : ""} aria-label="التنقل الرئيسي">
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>المنصة</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>كيف نعمل</a>
          <a href="#why-hala" onClick={() => setMenuOpen(false)}>ليه هلا</a>
        </nav>
        <div className="hv2-header-controls">
          <button className="hv2-menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-controls="hv2-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a className="hv2-header-action" href={CAL_URL} target="_blank" rel="noopener noreferrer">تحدث معنا <ArrowUpLeft size={16} /></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hv2-hero" id="home" aria-labelledby="hv2-title">
      <div className="hv2-hero-aura hv2-hero-aura-orange" />
      <div className="hv2-hero-aura hv2-hero-aura-indigo" />
      <div className="hv2-hero-pattern hv2-hero-pattern-right" aria-hidden="true" />
      <div className="hv2-hero-pattern hv2-hero-pattern-left" aria-hidden="true" />
      <div className="hv2-container hv2-hero-content">
        <div className="hv2-orbit hv2-orbit-order" aria-hidden="true"><span className="hv2-orbit-icon"><ClipboardCheck size={27} /></span><span>الطلبات</span></div>
        <div className="hv2-orbit hv2-orbit-stock" aria-hidden="true"><span className="hv2-orbit-icon"><Boxes size={27} /></span><span>المخزون</span></div>
        <div className="hv2-orbit hv2-orbit-shipping" aria-hidden="true"><span className="hv2-orbit-icon"><Truck size={28} /></span><span>الشحن</span></div>
        <div className="hv2-orbit hv2-orbit-settlement" aria-hidden="true"><span className="hv2-orbit-icon"><Wallet size={27} /></span><span>التحصيل</span></div>
        <Enter className="hv2-hero-copy">
          <span className="hv2-eyebrow"><PackageCheck size={16} /> منصة تشغيل تجارتك من أول المنتج لآخر تسوية</span>
          <h1 id="hv2-title">كل طلب يبدأ فرصة.<br /><em>هلا تكمّل الرحلة.</em></h1>
          <p>التوريد، التخزين، تأكيد الطلبات، الشحن والتحصيل في مسار واحد واضح. أنت تركز على البيع، وإحنا نهتم بكل خطوة بعده.</p>
          <div className="hv2-actions">
            <a className="hv2-button hv2-button-primary" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">ابدأ مع هلا <ArrowLeft size={18} /></a>
            <a className="hv2-button hv2-button-text" href="#journey">شوف طريقة العمل <ArrowLeft size={18} /></a>
          </div>
        </Enter>
        <svg className="hv2-hero-flow" viewBox="0 0 960 90" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="hv2-flow-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#362976" stopOpacity=".12" />
              <stop offset="48%" stopColor="#362976" stopOpacity=".65" />
              <stop offset="76%" stopColor="#F15A24" stopOpacity=".72" />
              <stop offset="100%" stopColor="#F15A24" stopOpacity=".12" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 63 C170 4 302 78 470 47 S744 11 960 55"
            fill="none"
            stroke="url(#hv2-flow-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.3, delay: 0.45, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
        <motion.div className="hv2-hero-stage" initial={reduceMotion ? false : { opacity: 0, y: 55, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.05, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hv2-dashboard-window">
            <div className="hv2-window-top"><span className="hv2-window-dots"><i /><i /><i /></span><span>لوحة هلا كوميرس</span><span>seller.halakommers.com</span></div>
            <img src={overviewImage} alt="نظرة عامة على لوحة تحكم هلا كوميرس" loading="eager" />
          </div>
        </motion.div>
        <div className="hv2-hero-footnote"><ShieldCheck size={16} /> تشغيل واحد يربط المنتج بالطلب والعميل</div>
      </div>
    </section>
  );
}

function PartnerPreview() {
  return (
    <section className="hv2-partners" aria-label="تصور مبدئي لشريط الشركاء">
      <div className="hv2-container hv2-partners-inner">
        <div className="hv2-partners-copy">
          <span>على طول الرحلة، فيه شركاء.</span>
          <small>شعارات مبدئية للتصميم حتى اعتماد القائمة النهائية</small>
        </div>
        <div className="hv2-partners-logos" aria-label="أمثلة مرئية مؤقتة">
          <span className="hv2-partner-logo hv2-partner-shopify">shopify</span>
          <span className="hv2-partner-logo hv2-partner-salla">سلة<span className="hv2-partner-mark">◌</span></span>
          <span className="hv2-partner-logo hv2-partner-woo">WooCommerce</span>
          <span className="hv2-partner-logo hv2-partner-zid">زد<span className="hv2-partner-mark">◈</span></span>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="hv2-section hv2-capabilities" id="capabilities">
      <div className="hv2-container">
        <Enter className="hv2-section-intro">
          <span className="hv2-kicker">لوحة واحدة. رؤية أشمل.</span>
          <h2>التفاصيل اللي تفرق،<br /><em>قدامك في وقتها.</em></h2>
          <p>كل مرحلة في التشغيل لها مكان واضح، عشان تتابع تجارتك وتعرف خطوتك التالية.</p>
        </Enter>
        <div className="hv2-capability-grid">
          {capabilities.map((capability, index) => (
            <Enter className="hv2-capability" key={capability.number} delay={index * 0.12}>
              <div className="hv2-capability-image"><img src={capability.image} alt={capability.alt} loading="lazy" /></div>
              <div className="hv2-capability-body">
                <span className="hv2-capability-icon"><capability.icon size={21} /></span>
                <span className="hv2-capability-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            </Enter>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hv2-section hv2-journey" id="journey">
      <div className="hv2-container hv2-journey-layout">
        <Enter className="hv2-journey-copy">
          <span className="hv2-kicker">من المنتج للعميل</span>
          <h2>رحلة واحدة.<br /><em>من غير فجوات.</em></h2>
          <p>بدل ما كل خطوة تعيش في مكان منفصل، هلا تجمع تشغيل التجارة في مسار تقدر تتابعه.</p>
          <a className="hv2-inline-link" href={CAL_URL} target="_blank" rel="noopener noreferrer">خلينا نرسم رحلتك <ArrowUpLeft size={17} /></a>
        </Enter>
        <div className="hv2-journey-steps">
          <motion.span className="hv2-journey-progress" aria-hidden="true" initial={reduceMotion ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }} />
          {journey.map((step, index) => (
            <Enter className="hv2-journey-step" key={step.label} delay={index * 0.08}>
              <span className="hv2-step-marker"><step.icon size={21} /></span>
              <div><strong>{step.label}</strong><p>{step.detail}</p></div>
              <span className="hv2-step-number">0{index + 1}</span>
            </Enter>
          ))}
        </div>
      </div>
    </section>
  );
}

function Challenges() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const challenge = challenges[active];
  return (
    <section className="hv2-section hv2-challenges" id="why-hala">
      <div className="hv2-container">
        <Enter className="hv2-challenges-intro">
          <span className="hv2-kicker">ليه هلا؟</span>
          <h2>التشغيل الواضح<br /><em>يغيّر طريقة قرارك.</em></h2>
        </Enter>
        <div className="hv2-challenges-layout">
          <div className="hv2-challenge-tabs" role="group" aria-label="مشكلات التشغيل">
            {challenges.map((item, index) => (
              <button className={active === index ? "hv2-challenge-tab is-active" : "hv2-challenge-tab"} type="button" aria-pressed={active === index} onClick={() => setActive(index)} key={item.label}>
                <span className="hv2-tab-index">0{index + 1}</span><span>{item.label}</span><ArrowLeft size={17} />
              </button>
            ))}
          </div>
          <div className="hv2-challenge-display">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -18 }} transition={{ duration: 0.35 }}>
                <div className="hv2-challenge-image"><img src={challenge.image} alt={challenge.alt} loading="lazy" /></div>
                <div className="hv2-challenge-caption"><CircleCheck size={19} /><div><strong>{challenge.title}</strong><p>{challenge.detail}</p></div></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="hv2-section hv2-final">
      <div className="hv2-container">
        <Enter className="hv2-final-panel">
          <span className="hv2-kicker">خطوتك الجاية</span>
          <h2>خلّي وقتك للنمو.<br /><em>وشغّل تجارتك مع هلا.</em></h2>
          <p>شاركنا منتجك والسوق اللي تستهدفه، ونرتب معك مسار التشغيل المناسب.</p>
          <a className="hv2-button hv2-button-primary" href={CAL_URL} target="_blank" rel="noopener noreferrer">تحدث مع فريق هلا <ArrowLeft size={18} /></a>
        </Enter>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="hv2-footer"><div className="hv2-container"><Brand /><span>هلا كوميرس — تشغيل أوضح لتجارة تكبر.</span><a href="/blog">المدونة <ArrowUpLeft size={15} /></a></div></footer>;
}

export default function HalaDesignV2() {
  useSEO({ title: "تصور جديد لهلا كوميرس", description: "معاينة تصميم جديد لمنصة هلا كوميرس.", noindex: true });
  return (
    <div className="hala-v2" dir="rtl">
      <div className="hv2-preview-note">معاينة اتجاه التصميم الجديد لهلا كوميرس</div>
      <Header />
      <main><Hero /><PartnerPreview /><Capabilities /><Journey /><Challenges /><FinalCta /></main>
      <Footer />
    </div>
  );
}


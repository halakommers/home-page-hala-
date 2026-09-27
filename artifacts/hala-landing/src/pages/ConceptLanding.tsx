import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpLeft, Boxes, ChartNoAxesCombined, ChevronLeft, CircleCheck, Globe2, LayoutDashboard, Package, PhoneCall, ShieldCheck, Sparkles, Truck, Warehouse, Wallet } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";
import dashboard from "@/assets/dashboards/dash_10.15.55_lg.webp";
import ordersDashboard from "@/assets/dashboards/dash_10.16.16_lg.webp";
import halaLogo from "@/assets/hala-logo.svg";
import "./concept.css";

const services = [
  { icon: Boxes, label: "01", title: "توريد أذكى", text: "من اختيار المورد حتى وصول المنتج؛ مسار واضح يختصر عليك المتابعة اليومية." },
  { icon: Warehouse, label: "02", title: "مخزون جاهز", text: "تخزين وتجهيز وتغليف يحافظ على المنتج ويترك انطباعًا يليق بعلامتك." },
  { icon: PhoneCall, label: "03", title: "طلبات مؤكدة", text: "تأكيد طلبات الدفع عند الاستلام قبل الشحن لتقليل الإلغاءات والمرتجعات." },
  { icon: Truck, label: "04", title: "توصيل أوضح", text: "تتابع كل طلب من المستودع حتى باب العميل عبر مسار شحن مفهوم." },
  { icon: Wallet, label: "05", title: "تحصيل منظم", text: "تعرف ما تم تسليمه وما تم تحصيله ومتى تستحق التسوية." },
  { icon: LayoutDashboard, label: "06", title: "رؤية واحدة", text: "الطلبات والمخزون والتحصيل والأداء أمامك في لوحة عربية واحدة." },
];

const steps = [
  ["01", "نبدأ من المنتج", "نراجع السوق والتوريد وخطة التشغيل المناسبة لك."],
  ["02", "نجهز الطلب", "نستلم المخزون ونفحصه ونغلفه قبل خروج الشحنة."],
  ["03", "نوصل ونتابع", "نؤكد الطلب ونختار الشحن المناسب ونتابع التسليم."],
  ["04", "نقفل الدورة", "نوضح المرتجعات والتحصيل والتسوية في لوحة واحدة."],
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Brand() {
  return (
    <a className="concept-brand" href="/concept" aria-label="هلا كوميرس - النموذج المبدئي">
      <img src={halaLogo} alt="Hala kommers" width="90" height="52" />
    </a>
  );
}

export default function ConceptLanding() {
  const reduce = useReducedMotion();
  const [servicesVisible, setServicesVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.23], [0, -80]);

  useSEO({
    title: "تصور التصميم الجديد",
    description: "تصور أولي لتصميم موقع هلا كوميرس.",
    noindex: true,
  });

  return (
    <div className="concept" dir="rtl">
      <div className="concept-preview-note">تصور مبدئي للتصميم — محتوى ونِسَب قابلة للمراجعة</div>
      <header className="concept-header">
        <div className="concept-container concept-header-inner">
          <Brand />
          <nav className="concept-nav" aria-label="التنقل الرئيسي">
            <a href="#services">الخدمات</a>
            <a href="#journey">كيف نعمل</a>
            <a href="#dashboard">لوحة هلا</a>
            <a href="#stories">من واقع التشغيل</a>
          </nav>
          <a className="concept-header-cta" href={CAL_URL} target="_blank" rel="noopener noreferrer">تحدث معنا <ArrowUpLeft size={16} /></a>
        </div>
      </header>

      <main>
        <section className="concept-hero" aria-labelledby="concept-title">
          <div className="concept-glow concept-glow-one" aria-hidden="true" />
          <div className="concept-glow concept-glow-two" aria-hidden="true" />
          <div className="concept-container concept-hero-grid">
            <Reveal className="concept-hero-copy">
              <span className="concept-eyebrow"><span className="concept-eyebrow-dot" /> تشغيل تجارة إلكترونية في الخليج، بطريقة أهدأ</span>
              <h1 id="concept-title">خلّي البيع يكبر.<br /><span>وكل خطوة بعده</span><br />تبقى تحت سيطرتك.</h1>
              <p>التوريد، التخزين، تأكيد الطلبات، الشحن والتحصيل في تشغيل واحد واضح. أنت تركز على النمو، وهلا ترتّب الطريق من المنتج إلى العميل.</p>
              <div className="concept-hero-actions">
                <a className="concept-button concept-button-primary" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">ابدأ مع هلا <ArrowLeft size={18} /></a>
                <a className="concept-text-link" href="#journey">شوف رحلة الطلب <ArrowLeft size={18} /></a>
              </div>
              <div className="concept-hero-proof"><ShieldCheck size={18} /><span>مصمم للبائعين الذين يريدون تشغيلًا واضحًا في أسواق الخليج</span></div>
            </Reveal>

            <motion.div className="concept-hero-art" style={{ y: reduce ? 0 : heroLift }}>
              <div className="concept-hero-halo" aria-hidden="true" />
              <motion.div className="concept-hero-dashboard" initial={reduce ? false : { opacity: 0, y: 45, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                <div className="concept-browser-bar"><i /><i /><i /><span>seller.halakommers.com</span></div>
                <img src={dashboard} alt="لقطة حقيقية من لوحة تحكم هلا للطلبات والمخزون ومؤشرات الأداء" loading="eager" />
              </motion.div>
              <motion.div className="concept-hero-operations" initial={reduce ? false : { opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
                <strong>رحلة الطلب مع هلا</strong>
                <div className="concept-hero-operation"><Warehouse size={19} /><span>المخزون جاهز</span><CircleCheck size={17} /></div>
                <div className="concept-hero-operation"><Package size={19} /><span>الطلب اتجهّز</span><CircleCheck size={17} /></div>
                <div className="concept-hero-operation"><Truck size={19} /><span>الشحنة في الطريق</span><span className="concept-hero-live-dot" /></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="concept-scroll-cue"><span>اكتشف أكثر</span><span className="concept-scroll-line" /></div>
        </section>

        <section className="concept-trust" aria-label="أسواق وخدمات هلا">
          <div className="concept-container concept-trust-inner">
            <div className="concept-trust-title"><Sparkles size={19} /><span>تشغيل يمتد مع تجارتك</span></div>
            <div className="concept-trust-list"><span>السعودية</span><span>الإمارات</span><span>الكويت</span><span>قطر</span><span>البحرين</span><span>عُمان</span></div>
          </div>
          <div className="concept-trust-pills"><span>توريد منظم</span><span>مخزون واضح</span><span>طلبات مؤكدة</span><span>تحصيل مفهوم</span></div>
        </section>

        <section className="concept-section concept-services" id="services">
          <div className="concept-container">
            <Reveal className="concept-section-head">
              <span className="concept-kicker">خدمات هلا كوميرس</span>
              <h2>كل ما بعد البيع،<br /><em>في إيقاع واحد.</em></h2>
              <p>تشغيل متصل يخلي كل خطوة مفهومة، وكل قرار مبنيًا على ما يحدث فعلًا في طلباتك.</p>
            </Reveal>
            <motion.div
              className="concept-service-wave-reveal"
              aria-hidden="true"
              onViewportEnter={() => setServicesVisible(true)}
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                className="concept-service-wave-mask"
                initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
                animate={servicesVisible ? { clipPath: "inset(0 0% 0 0)" } : undefined}
                transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
              >
                <div className={servicesVisible ? "concept-service-wave is-visible" : "concept-service-wave"} />
              </motion.div>
            </motion.div>
            <div className="concept-service-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  className="concept-service-card"
                  initial={reduce ? false : { opacity: 0, y: 34 }}
                  animate={servicesVisible ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.7, delay: 1.2 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="concept-service-top"><span className="concept-service-icon"><service.icon size={27} strokeWidth={1.8} /></span><span className="concept-service-number">{service.label}</span></div>
                  <h3>{service.title}</h3><p>{service.text}</p>
                  <span className="concept-service-arrow"><ArrowUpLeft size={18} /></span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="concept-section concept-dashboard" id="dashboard">
          <div className="concept-container concept-dashboard-grid">
            <Reveal className="concept-dashboard-copy">
              <span className="concept-kicker">لوحة تحكم هلا</span>
              <h2>صورة أوضح.<br /><em>قرارات أسرع.</em></h2>
              <p>بدل ما تجمع حالة الطلب من رسائل وملفات متعددة، تابع المخزون والتأكيد والشحن والتحصيل من شاشة واحدة.</p>
              <ul>
                <li><CircleCheck size={18} /> حالة كل طلب لحظة بلحظة</li>
                <li><CircleCheck size={18} /> مخزون ومستحقات أمامك</li>
                <li><CircleCheck size={18} /> تقارير تساعدك تختار خطوتك التالية</li>
              </ul>
              <a className="concept-text-link" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">اكتشف لوحة هلا <ArrowLeft size={18} /></a>
            </Reveal>
            <Reveal className="concept-dashboard-visual" delay={0.15}>
              <div className="concept-dashboard-halo" />
              <div className="concept-dashboard-frame"><div className="concept-browser-bar"><i /><i /><i /><span>seller.halakommers.com</span></div><img src={ordersDashboard} alt="لقطة من إدارة الطلبات داخل لوحة هلا كوميرس" loading="lazy" /></div>
              <div className="concept-dashboard-badge"><ChartNoAxesCombined size={19} /> كل تشغيلك في مكان واحد</div>
            </Reveal>
          </div>
        </section>

        <section className="concept-section concept-journey" id="journey">
          <div className="concept-container">
            <Reveal className="concept-section-head"><span className="concept-kicker">كيف نعمل</span><h2>من المنتج للعميل،<br /><em>الطريق مرسوم.</em></h2><p>رحلة واحدة تعرف فيها أين يقف الطلب وما الذي يأتي بعده.</p></Reveal>
            <div className="concept-journey-grid">
              {steps.map(([number, title, text], index) => (
                <Reveal className="concept-journey-step" key={number} delay={index * 0.12}>
                  <span className="concept-journey-number">{number}</span>
                  <div className="concept-journey-icon">{index === 0 ? <Globe2 size={26} /> : index === 1 ? <Package size={26} /> : index === 2 ? <Truck size={26} /> : <Wallet size={26} />}</div>
                  <h3>{title}</h3><p>{text}</p>
                  {index < steps.length - 1 && <ChevronLeft className="concept-journey-chevron" size={20} />}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="concept-section concept-feature">
          <div className="concept-container">
            <Reveal className="concept-feature-panel">
              <div className="concept-feature-orb concept-feature-orb-one" /><div className="concept-feature-orb concept-feature-orb-two" />
              <div className="concept-feature-graphic" aria-hidden="true">
                <div className="concept-feature-route" />
                <div className="concept-feature-stage"><Warehouse size={39} /><span>نستلم ونخزن</span></div>
                <div className="concept-feature-stage"><Package size={39} /><span>نجهز الطلب</span></div>
                <div className="concept-feature-stage"><Truck size={39} /><span>نوصل للعميل</span></div>
              </div>
              <div className="concept-feature-copy"><span className="concept-kicker">جهز مسار نموك</span><h2>خلّينا نهتم بالتفاصيل.<br /><em>وانت اهتم بالفرصة.</em></h2><p>حين تكون العمليات جاهزة، تقدر تختبر منتجًا جديدًا أو سوقًا جديدًا بثقة ووضوح أكبر.</p><a className="concept-button concept-button-light" href={CAL_URL} target="_blank" rel="noopener noreferrer">احجز مكالمة تشغيل <ArrowLeft size={18} /></a></div>
            </Reveal>
          </div>
        </section>

        <section className="concept-section concept-stories" id="stories">
          <div className="concept-container">
            <Reveal className="concept-section-head"><span className="concept-kicker">من واقع التشغيل</span><h2>الفرق يظهر<br /><em>في التفاصيل اليومية.</em></h2><p>هذه أمثلة للمشكلات التي نبني حولها رحلة تشغيل أكثر وضوحًا.</p></Reveal>
            <div className="concept-story-grid">
              <Reveal className="concept-story-card"><span className="concept-story-icon"><PhoneCall size={24} /></span><span className="concept-story-tag">تأكيد الطلبات</span><h3>طلبات أقل تضيع قبل الشحن.</h3><p>فريق التأكيد يراجع بيانات العميل وجدية الطلب قبل أن يبدأ مشوار التوصيل.</p></Reveal>
              <Reveal className="concept-story-card" delay={0.12}><span className="concept-story-icon"><Warehouse size={24} /></span><span className="concept-story-tag">المخزون والتجهيز</span><h3>تجربة تسليم تليق بالبراند.</h3><p>مخزون منظم وتجهيز واضح يساعدانك تقدم تجربة ثابتة مع نمو الطلبات.</p></Reveal>
              <Reveal className="concept-story-card" delay={0.24}><span className="concept-story-icon"><Wallet size={24} /></span><span className="concept-story-tag">التحصيل</span><h3>أرقامك مفهومة في وقت القرار.</h3><p>تتابع ما تم تسليمه وتحصيله لتعرف متى تعيد الطلب ومتى تتوسع.</p></Reveal>
            </div>
          </div>
        </section>

        <section className="concept-final">
          <div className="concept-container concept-final-inner"><Reveal><span className="concept-kicker">ابدأ بخطوة واضحة</span><h2>جاهز تخلي تشغيل متجرك<br /><em>يساعدك تكبر؟</em></h2><p>شاركنا منتجك والسوق المستهدف، ونرسم معك مسار التوريد والتخزين والشحن والتحصيل.</p></Reveal><a className="concept-button concept-button-primary" href={CAL_URL} target="_blank" rel="noopener noreferrer">تحدث مع فريق هلا <ArrowLeft size={18} /></a></div>
        </section>
      </main>

      <footer className="concept-footer"><div className="concept-container concept-footer-inner"><Brand /><span>هلا كوميرس — تشغيل أوضح لتجارة تكبر.</span><a href="/blog">المدونة <ArrowUpLeft size={14} /></a></div></footer>
    </div>
  );
}


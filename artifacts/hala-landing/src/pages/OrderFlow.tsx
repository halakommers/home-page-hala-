import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Boxes,
  Check,
  ClipboardCheck,
  Package,
  PackageCheck,
  Truck,
  Wallet,
  Warehouse,
} from "lucide-react";
import productsImage from "@/assets/dashboards/dash_10.17.57_lg.webp";
import ordersImage from "@/assets/dashboards/dash_10.16.16_lg.webp";
import financeImage from "@/assets/dashboards/dash_10.16.33_lg.webp";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";
import "./order-flow.css";

const stages = [
  {
    label: "المخزون",
    title: "المخزون جاهز قبل ما الطلب يوصل",
    detail:
      "المنتجات تدخل منظومة التشغيل، وتقدر تتابع حالتها من لوحة هلا قبل بدء البيع.",
    icon: Warehouse,
  },
  {
    label: "تأكيد الطلب",
    title: "كل طلب يتأكد قبل الشحن",
    detail:
      "فريق هلا يتواصل مع العميل ويتحقق من الطلب، وبعدها يظهر مساره بوضوح في لوحة الطلبات.",
    icon: ClipboardCheck,
  },
  {
    label: "التجهيز",
    title: "الطلب يتحول لشحنة جاهزة",
    detail: "نجهز المنتج ونغلفه ونربط بياناته بالشحنة قبل خروجه من المخزن.",
    icon: Boxes,
  },
  {
    label: "التسليم",
    title: "تابع الشحنة حتى باب العميل",
    detail:
      "الشحنة تنتقل إلى شركة الشحن المناسبة، وتتابع حالة التوصيل خطوة بخطوة.",
    icon: Truck,
  },
  {
    label: "التحصيل",
    title: "التسليم يكتمل وتظهر المستحقات",
    detail: "بعد تسليم الطلب، تتابع التحصيل والتسوية ضمن رحلة تشغيل واحدة.",
    icon: Wallet,
  },
] as const;

function AppWindow({
  title,
  image,
  alt,
  children,
}: {
  title: string;
  image: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="hf-window">
      <div className="hf-window-top">
        <span className="hf-window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{title}</span>
        <span className="hf-window-brand">hala</span>
      </div>
      <img src={image} alt={alt} />
      <div className="hf-window-overlay">{children}</div>
    </div>
  );
}

function StockVisual() {
  return (
    <div className="hf-visual hf-stock">
      <div className="hf-visual-tag">
        <Warehouse size={15} /> 01 / المخزون
      </div>
      <AppWindow
        title="المنتجات والمخزون"
        image={productsImage}
        alt="واجهة المنتجات الفعلية في لوحة هلا"
      >
        <div className="hf-stock-cards" aria-hidden="true">
          <span>
            <Package size={22} /> المنتج جاهز
          </span>
          <span>
            <Boxes size={22} /> المخزون متاح
          </span>
          <span>
            <Check size={20} /> قابل للتجهيز
          </span>
        </div>
      </AppWindow>
      <div className="hf-caption">
        المنتج يدخل النظام <span>←</span> تظهر حالته لفريقك
      </div>
    </div>
  );
}

function ConfirmVisual() {
  return (
    <div className="hf-visual hf-confirm">
      <div className="hf-visual-tag">
        <ClipboardCheck size={15} /> 02 / تأكيد الطلب
      </div>
      <AppWindow
        title="إدارة الطلبات"
        image={ordersImage}
        alt="واجهة الطلبات الفعلية في لوحة هلا"
      >
        <div className="hf-order-card">
          <span className="hf-card-small">طلب جديد</span>
          <strong>العميل طلب منتجك</strong>
          <div className="hf-confirm-row">
            <span className="hf-confirm-call">تواصل مع العميل</span>
            <span className="hf-confirm-line" />
            <span className="hf-confirm-done">
              <Check size={15} /> تم التأكيد
            </span>
          </div>
        </div>
      </AppWindow>
      <div className="hf-caption">
        وصول الطلب <span>←</span> مراجعة وتأكيد <span>←</span> جاهز للتجهيز
      </div>
    </div>
  );
}

function PackVisual() {
  return (
    <div className="hf-visual hf-pack">
      <div className="hf-visual-tag">
        <Boxes size={15} /> 03 / التجهيز والتغليف
      </div>
      <div className="hf-pack-workbench">
        <div className="hf-pack-list">
          <span>
            <Check size={15} /> المنتج مطابق
          </span>
          <span>
            <Check size={15} /> بيانات الشحن جاهزة
          </span>
          <span>
            <Check size={15} /> التغليف اكتمل
          </span>
        </div>
        <div className="hf-parcel">
          <div className="hf-parcel-top" />
          <div className="hf-parcel-face">
            <span className="hf-parcel-mark">hala</span>
            <div className="hf-shipping-label">
              <span>بيانات الشحنة</span>
              <b>جاهزة للإرسال</b>
              <i />
            </div>
          </div>
        </div>
      </div>
      <div className="hf-caption">
        مراجعة المنتج <span>←</span> تغليف <span>←</span> شحنة جاهزة
      </div>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="hf-visual hf-delivery">
      <div className="hf-visual-tag">
        <Truck size={15} /> 04 / الشحن والتسليم
      </div>
      <div className="hf-tracking">
        <div className="hf-track-head">
          <PackageCheck size={21} />
          <div>
            <b>تتبع الشحنة</b>
            <span>من المخزن إلى العميل</span>
          </div>
        </div>
        <div className="hf-track-route">
          <span className="hf-track-node is-start">
            <Warehouse size={19} />
          </span>
          <span className="hf-track-road">
            <span className="hf-track-vehicle">
              <Truck size={27} />
            </span>
          </span>
          <span className="hf-track-node is-end">
            <Check size={21} />
          </span>
        </div>
        <div className="hf-track-labels">
          <span>غادرت المخزن</span>
          <span>تم التسليم</span>
        </div>
      </div>
      <div className="hf-caption">
        خروج الشحنة <span>←</span> متابعة الحالة <span>←</span> تسليم العميل
      </div>
    </div>
  );
}

function SettlementVisual() {
  return (
    <div className="hf-visual hf-settlement">
      <div className="hf-visual-tag">
        <Wallet size={15} /> 05 / التحصيل والتسوية
      </div>
      <AppWindow
        title="التحصيل والمستحقات"
        image={financeImage}
        alt="واجهة المالية الفعلية في لوحة هلا"
      >
        <div className="hf-settle-card">
          <span className="hf-settle-icon">
            <Wallet size={22} />
          </span>
          <div>
            <span className="hf-card-small">بعد التسليم</span>
            <strong>المستحقات واضحة</strong>
            <span>التسوية ضمن نفس مسار الطلب</span>
          </div>
          <span className="hf-settle-check">
            <Check size={18} />
          </span>
        </div>
      </AppWindow>
      <div className="hf-caption">
        تسليم ناجح <span>←</span> تحصيل <span>←</span> تسوية
      </div>
    </div>
  );
}

const visuals = [
  StockVisual,
  ConfirmVisual,
  PackVisual,
  DeliveryVisual,
  SettlementVisual,
];

export default function OrderFlow() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const Visual = visuals[active];
  const stage = stages[active];
  return (
    <section
      className="hf-section"
      id="order-journey"
      aria-labelledby="hf-title"
      dir="rtl"
    >
      <div className="hf-container">
        <div className="hf-heading">
          <span className="hf-kicker">هكذا تتحرك تجارتك مع هلا</span>
          <h2 id="hf-title">
            من أول منتج <em>لحد آخر تسوية.</em>
          </h2>
          <p>اختار مرحلة وشوف اللي بيحصل فيها. كل خطوة تكمل اللي قبلها.</p>
        </div>
        <div className="hf-layout">
          <div
            className="hf-stepper"
            role="group"
            aria-label="مراحل تشغيل الطلب"
          >
            {stages.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={`hf-step ${active === index ? "is-active" : ""}`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <span className="hf-step-index">0{index + 1}</span>
                <item.icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="hf-stage">
            <div className="hf-scene" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  className="hf-scene-inner"
                  initial={
                    reduceMotion ? false : { opacity: 0, x: 30, scale: 0.98 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, x: -20, scale: 0.98 }
                  }
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Visual />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="hf-explainer">
              <span>الخطوة 0{active + 1} من 05</span>
              <h3>{stage.title}</h3>
              <p>{stage.detail}</p>
              <div className="hf-actions">
                <a
                  className="hv2-button hv2-button-primary"
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ابدأ مع هلا <ArrowLeft size={18} />
                </a>
                <a
                  className="hf-secondary"
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اسأل فريق هلا
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


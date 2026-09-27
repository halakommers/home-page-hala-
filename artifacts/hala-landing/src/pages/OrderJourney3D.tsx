import { useEffect, useRef, useState } from "react";
import type { SceneController } from "./order-scene";
import { ArrowLeft, Boxes, ClipboardCheck, PackageCheck, Truck, Wallet } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";
import "./order-journey-3d.css";

const stages = [
  {
    title: "الطلب",
    detail: "الطلب يدخل لوحة واحدة، وفريقك يعرف حالته والخطوة المطلوبة فورًا.",
    icon: ClipboardCheck,
  },
  {
    title: "التجهيز",
    detail: "المنتج والمخزون والتجهيز يتحركوا في مسار واضح قبل خروج الشحنة.",
    icon: Boxes,
  },
  {
    title: "الشحن",
    detail: "تابع حركة الشحنة والتسليم من غير ما تضيع بين أكثر من نظام.",
    icon: Truck,
  },
  {
    title: "التحصيل",
    detail: "تظهر المستحقات والتسويات مع بقية تفاصيل التشغيل في نفس الرحلة.",
    icon: Wallet,
  },
] as const;

function OrderScene({ activeStep }: { activeStep: number }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(activeStep);
  const reduceMotion = useReducedMotion();
  const [sceneReady, setSceneReady] = useState(false);
  activeStepRef.current = activeStep;

  useEffect(() => {
    const host = sceneRef.current;
    if (!host) return;
    if (reduceMotion) {
      setSceneReady(false);
      return;
    }

    let disposed = false;
    let sceneStarted = false;
    let sceneVisible = false;
    let controller: SceneController | null = null;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      sceneVisible = entry.isIntersecting;
      if (sceneVisible && !sceneStarted) {
        sceneStarted = true;
        void import("./order-scene").then(({ mountOrderScene }) => {
          if (disposed) return;
          try {
            controller = mountOrderScene(host, () => activeStepRef.current, sceneVisible);
            setSceneReady(true);
          } catch (error) {
            console.error("تعذر عرض مشهد رحلة الطلب ثلاثي الأبعاد", error);
          }
        }).catch((error) => {
          console.error("تعذر تحميل مشهد رحلة الطلب ثلاثي الأبعاد", error);
        });
      } else {
        controller?.setVisible(sceneVisible);
      }
    }, { rootMargin: "120px" });
    visibilityObserver.observe(host);

    return () => {
      disposed = true;
      visibilityObserver.disconnect();
      controller?.dispose();
    };
  }, [reduceMotion]);

  return (
    <div className="hv3-scene" ref={sceneRef}>
      {!sceneReady && (
        <div className="hv3-scene-fallback" aria-hidden="true">
          <span className="hv3-fallback-route" />
          <span className="hv3-fallback-package"><PackageCheck size={42} /></span>
        </div>
      )}
    </div>
  );
}

export default function OrderJourney3D() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = stages[activeStep];

  return (
    <section className="hv3-journey" id="order-journey" aria-labelledby="hv3-title">
      <div className="hv3-container">
        <div className="hv3-heading">
          <span className="hv3-kicker">شوف الطلب وهو بيتحرك</span>
          <h2 id="hv3-title">من الطلب للتسليم،<br /><em>كل خطوة قدامك.</em></h2>
          <p>اختار أي مرحلة وشوف هلا بتربطها باللي قبلها واللي بعدها.</p>
        </div>
        <div className="hv3-layout">
          <OrderScene activeStep={activeStep} />
          <div className="hv3-content">
            <div className="hv3-stage-buttons" role="group" aria-label="مراحل رحلة الطلب">
              {stages.map((stage, index) => (
                <button key={stage.title} className={index === activeStep ? "hv3-stage is-active" : "hv3-stage"} type="button" aria-pressed={index === activeStep} onClick={() => setActiveStep(index)}>
                  <stage.icon size={21} />
                  <span>{stage.title}</span>
                </button>
              ))}
            </div>
            <div className="hv3-stage-detail" aria-live="polite">
              <span>0{activeStep + 1} / 04</span>
              <h3>{currentStage.title}، والخطوة اللي بعدها أوضح.</h3>
              <p>{currentStage.detail}</p>
            </div>
            <div className="hv3-actions">
              <a className="hv2-button hv2-button-primary" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">ابدأ مع هلا <ArrowLeft size={18} /></a>
              <a className="hv3-secondary-link" href={CAL_URL} target="_blank" rel="noopener noreferrer">اسأل فريق هلا</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



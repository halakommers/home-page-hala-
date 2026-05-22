import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CommerceBackdrop from "@/components/CommerceBackdrop";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {to > 1000 ? `+${count.toLocaleString()}` : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { num: 50000, label: "طلب يُنفّذ شهرياً", suffix: "" },
    { num: 6, label: "دول خليجية مغطاة", suffix: "" },
    { num: 70, label: "متوسط نسبة التسليم الفعلي", suffix: "%+" },
    { num: 7, label: "لتحويل مستحقاتك", suffix: " أيام" }
  ];

  return (
    <section className="section-surface py-14 md:py-24 bg-primary relative text-center">
      <CommerceBackdrop variant="deep" />
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-[14px] tracking-normal mb-4 block">إشارات ثقة قبل الاشتراك</span>
          <h2 className="text-[27px] md:text-[42px] font-bold text-white leading-[1.25] mb-10 md:mb-14">
            تشغيل منظم يقدر يكبر مع طلباتك
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-6 md:py-8"
              >
                <div className="text-[34px] md:text-[58px] font-bold text-accent leading-none mb-3" dir="ltr">
                  <Counter to={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-[15px] md:text-[16px] font-medium text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

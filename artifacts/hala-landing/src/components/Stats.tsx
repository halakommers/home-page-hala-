import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    <section className="py-24 bg-[#1E1A4D] relative overflow-hidden text-center">
      {/* Subtle geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "32px 32px"
        }}
      ></div>

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4 block">أرقام تتحدث</span>
          <h2 className="text-[28px] md:text-[44px] font-bold text-white leading-[1.2] mb-16">
            لماذا يثق بنا البائعون في الخليج؟
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center ${
                  index !== stats.length - 1 ? 'md:border-l md:border-white/10' : ''
                }`}
              >
                <div className="text-[40px] md:text-[64px] font-extrabold text-accent leading-none mb-3" dir="ltr">
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
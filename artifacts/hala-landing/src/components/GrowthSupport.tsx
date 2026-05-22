import { motion } from "framer-motion";
import { Clock, LineChart, Paintbrush, Wallet } from "lucide-react";
import CommerceBackdrop from "@/components/CommerceBackdrop";
import { SIGNUP_URL } from "@/lib/links";

export default function GrowthSupport() {
  const features = [
    {
      icon: Clock,
      title: "تشغيل يحرّر وقتك",
      desc: "بدل متابعة كل طلب يدويًا، تتابع الأداء وتترك التفاصيل التشغيلية لفريق مختص.",
      color: "purple"
    },
    {
      icon: LineChart,
      title: "جاهزية أسرع للإعلانات",
      desc: "حين تعرف أن المخزون والتأكيد والشحن جاهزين، يصبح اختبار الإعلانات أقل مخاطرة.",
      color: "orange"
    },
    {
      icon: Paintbrush,
      title: "تجربة براند أفضل",
      desc: "تغليف أوضح، متابعة أسرع، وعميل يستلم طلبه بصورة تليق باسم متجرك.",
      color: "purple"
    },
    {
      icon: Wallet,
      title: "تحصيل وتسويات أوضح",
      desc: "رؤية أفضل للطلبات المسلّمة والتحصيل والمستحقات تساعدك تقرر متى تعيد الطلب ومتى توسع.",
      color: "orange"
    }
  ];

  return (
    <section id="growth" className="section-surface relative py-14 md:py-28 bg-gradient-to-b from-white via-[#FBF9FE] to-white">
      <CommerceBackdrop variant="light" />
      {/* Background growth scene: rockets, sparkles, dotted arc */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2D2669 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Curved dotted growth arc */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-[0.12]"
          viewBox="0 0 1280 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-50 580 Q 320 540, 640 380 T 1330 60"
            stroke="#E85D1F"
            strokeWidth="2"
            strokeDasharray="4 8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Big rocket — left side, flying upward */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-[4%] top-[8%] hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="110" height="170" viewBox="0 0 110 170" fill="none">
              {/* Smoke trail */}
              <g opacity="0.35">
                <circle cx="55" cy="155" r="9" fill="#E8E5F2" />
                <circle cx="44" cy="162" r="6" fill="#E8E5F2" />
                <circle cx="66" cy="160" r="7" fill="#E8E5F2" />
                <circle cx="50" cy="168" r="5" fill="#E8E5F2" />
              </g>
              {/* Flame */}
              <motion.g
                animate={{ scaleY: [1, 0.7, 1], opacity: [1, 0.85, 1] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "55px 130px" }}
              >
                <path d="M45 130 Q55 165 65 130 Q60 145 55 145 Q50 145 45 130 Z" fill="#E85D1F" />
                <path d="M48 130 Q55 152 62 130 Q58 142 55 142 Q52 142 48 130 Z" fill="#FFB87A" />
              </motion.g>
              {/* Body */}
              <path
                d="M55 15 Q40 35 40 75 L40 120 L70 120 L70 75 Q70 35 55 15 Z"
                fill="#2D2669"
              />
              <path
                d="M55 15 Q47 30 45 60 L45 110 L55 110 Z"
                fill="#1E1A4D"
              />
              {/* Window */}
              <circle cx="55" cy="65" r="10" fill="#FFE8D9" />
              <circle cx="55" cy="65" r="6" fill="#E85D1F" />
              <circle cx="53" cy="63" r="2" fill="#FFE8D9" opacity="0.7" />
              {/* Fins */}
              <path d="M40 100 L25 130 L40 125 Z" fill="#E85D1F" />
              <path d="M70 100 L85 130 L70 125 Z" fill="#E85D1F" />
              {/* Tip highlight */}
              <path d="M55 15 Q50 25 50 35 L55 35 Z" fill="#FFE8D9" opacity="0.4" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Smaller rocket — right side */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute right-[5%] top-[18%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="70" height="110" viewBox="0 0 70 110" fill="none">
              <g opacity="0.3">
                <circle cx="35" cy="100" r="6" fill="#E8E5F2" />
                <circle cx="28" cy="106" r="4" fill="#E8E5F2" />
                <circle cx="42" cy="105" r="5" fill="#E8E5F2" />
              </g>
              <motion.path
                d="M28 85 Q35 105 42 85 Q38 95 35 95 Q32 95 28 85 Z"
                fill="#E85D1F"
                animate={{ scaleY: [1, 0.7, 1] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "35px 85px" }}
              />
              <path
                d="M35 10 Q25 25 25 50 L25 80 L45 80 L45 50 Q45 25 35 10 Z"
                fill="#E85D1F"
              />
              <circle cx="35" cy="42" r="6" fill="#FFE8D9" />
              <circle cx="35" cy="42" r="3.5" fill="#2D2669" />
              <path d="M25 65 L15 85 L25 82 Z" fill="#2D2669" />
              <path d="M45 65 L55 85 L45 82 Z" fill="#2D2669" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Twinkling sparkles */}
        {[
          { x: "15%", y: "55%", delay: 0, size: 10 },
          { x: "85%", y: "70%", delay: 0.6, size: 8 },
          { x: "25%", y: "30%", delay: 1.2, size: 6 },
          { x: "75%", y: "40%", delay: 1.8, size: 9 },
          { x: "92%", y: "20%", delay: 0.3, size: 7 },
          { x: "8%", y: "80%", delay: 1.5, size: 8 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: s.x, top: s.y }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          >
            <svg width={s.size} height={s.size} viewBox="0 0 12 12" fill="none">
              <path
                d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
                fill="#E85D1F"
              />
            </svg>
          </motion.div>
        ))}

        {/* Upward arrows hinting growth */}
        <motion.div
          className="absolute left-[20%] bottom-[12%] hidden md:block opacity-[0.25]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
            <path
              d="M11 2 L20 14 L14 14 L14 32 L8 32 L8 14 L2 14 Z"
              fill="#2D2669"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute right-[22%] bottom-[18%] hidden md:block opacity-[0.25]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <svg width="18" height="28" viewBox="0 0 22 34" fill="none">
            <path
              d="M11 2 L20 14 L14 14 L14 32 L8 32 L8 14 L2 14 Z"
              fill="#E85D1F"
            />
          </svg>
        </motion.div>
      </div>
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="brand-pill inline-block text-primary font-semibold text-[14px] tracking-normal mb-4 rounded-full px-4 py-2">بعد التشغيل يأتي النمو</span>
          <h2 className="text-[27px] md:text-[44px] font-bold text-foreground leading-[1.22] max-w-3xl mx-auto">
            عندما يصبح التنفيذ ثابتًا، يصبح التوسع قرارًا أسهل
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="brand-card rounded-2xl p-6 md:p-7 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm ${
                feature.color === 'orange' ? 'bg-[#FFE8D9] text-accent' : 'bg-primary/10 text-primary'
              }`}>
                <feature.icon size={24} strokeWidth={2} />
              </div>
              
              <h3 className="text-[20px] font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.6] mb-6 flex-grow">
                {feature.desc}
              </p>
              
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-bold text-[14px] flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                ابدأ تشغيل متجرك ←
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

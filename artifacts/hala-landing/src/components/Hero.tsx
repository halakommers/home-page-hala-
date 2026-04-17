import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dashLg from "@/assets/dashboards/dash_10.15.55_lg.webp";
import dashSm from "@/assets/dashboards/dash_10.15.55_sm.webp";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2D2669 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-3 md:px-4 py-1.5 rounded-full mb-5 md:mb-6 max-w-full">
              <span className="text-accent text-[10px]">●</span>
              <span className="text-accent text-[12px] md:text-[13px] font-bold tracking-wide whitespace-normal">تشغيل متكامل للتجارة الإلكترونية في الخليج</span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-extrabold text-foreground leading-[1.15] md:leading-[1.1] mb-5 md:mb-6 tracking-tight">
              منظومة تشغيل{" "}
              <span className="relative inline-block">
                متكاملة
                <svg className="absolute w-full h-[10px] md:h-[12px] -bottom-1 left-0 text-accent" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9.5C45.5 3.5 120 -2.5 198 8.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <br className="hidden md:block" />
              لتجارتك في الخليج
            </h1>

            <p className="text-[16px] sm:text-[17px] md:text-[20px] text-muted-foreground leading-[1.8] md:leading-[1.7] max-w-[540px] mb-8 md:mb-10 px-2 sm:px-0">
              توريد، تخزين، تأكيد طلبات، شحن، وتحصيل — كل ما تحتاجه لتنمو بثقة في السعودية والخليج، تحت سقف شريك واحد.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5 w-full sm:w-auto">
              <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-hero-primary">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 text-[15px] md:text-[16px] h-13 md:h-14 px-6 md:px-8 py-3.5 rounded-[10px] flex items-center justify-center gap-2">
                  <span>ابدأ مع هلا مجاناً</span>
                  <span className="text-lg">←</span>
                </Button>
              </a>
              <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-hero-secondary">
                <Button variant="outline" className="w-full bg-white border-2 border-primary text-primary hover:bg-primary/5 text-[15px] md:text-[16px] h-13 md:h-14 px-6 md:px-8 py-3.5 rounded-[10px]">
                  احجز استشارة
                </Button>
              </a>
            </div>

            <div className="text-[12px] md:text-[13px] text-muted-foreground font-medium flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
              <span>استشارة مجانية</span>
              <span className="text-border">•</span>
              <span>بدون التزام</span>
              <span className="text-border">•</span>
              <span>رد خلال 24 ساعة</span>
            </div>

            {/* Improved rating badge */}
            <div className="mt-8 md:mt-12 flex items-center gap-3 bg-secondary/50 p-3 md:p-4 rounded-2xl border border-border/50">
              <div className="flex items-center -space-x-2 -space-x-reverse">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white bg-gradient-to-br shadow-sm flex items-center justify-center text-white text-[10px] font-bold"
                    style={{
                      backgroundImage: i === 1
                        ? "linear-gradient(135deg, #2D2669, #4F45A0)"
                        : i === 2
                        ? "linear-gradient(135deg, #E85D1F, #F08458)"
                        : i === 3
                        ? "linear-gradient(135deg, #1E1A4D, #2D2669)"
                        : "linear-gradient(135deg, #25D366, #1FAE54)",
                    }}
                  >
                    {["م", "أ", "ع", "س"][i - 1]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-primary text-[14px] md:text-[15px]">4.9</span>
                  <span className="text-accent text-[11px] md:text-[12px] tracking-tight">★★★★★</span>
                </div>
                <p className="text-[11px] md:text-[12px] text-muted-foreground font-medium">
                  من <span className="font-bold text-primary">+240</span> بائع في الخليج
                </p>
              </div>
            </div>
          </motion.div>

          {/* Left Column: Real Dashboard Screenshot (single image, all devices) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex items-center justify-center lg:justify-end order-1 lg:order-2 min-h-[280px] lg:min-h-[500px]"
          >
            <div className="hidden lg:block absolute w-[85%] h-[85%] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob" />
            <div className="hidden lg:block absolute w-[60%] h-[60%] -bottom-10 -left-10 bg-accent/10 rounded-full filter blur-3xl opacity-60" />
            <div className="hidden lg:block absolute inset-y-4 inset-x-2 bg-gradient-to-tr from-accent/25 via-primary/15 to-accent/15 rounded-[28px] blur-2xl opacity-70" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[580px] shadow-[0_30px_80px_-20px_rgba(45,38,105,0.4)] rounded-2xl overflow-hidden border border-border/50 bg-white"
            >
              <div className="h-9 bg-gradient-to-b from-[#F4F2F8] to-[#ECE9F2] border-b border-border flex items-center px-4 gap-2 relative" dir="ltr">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="absolute left-1/2 -translate-x-1/2 bg-white/70 text-[10px] text-primary/50 px-3 py-0.5 rounded-md font-mono">
                  🔒 seller.halakommers.com
                </div>
              </div>

              <div className="relative bg-white">
                <picture>
                  <source media="(min-width: 768px)" srcSet={dashLg} />
                  <img
                    src={dashSm}
                    alt="لوحة تحكم هلا كوميرس"
                    width="1280"
                    height="817"
                    className="w-full h-auto block select-none pointer-events-none"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating: تم تأكيد الطلب */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: 30, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 180 }}
              className="hidden lg:block absolute right-0 top-12 z-20"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="bg-white p-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3"
              >
                <div className="relative w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <motion.span
                    animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full bg-green-400"
                  />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold leading-none mb-1">تم تأكيد الطلب</div>
                  <div className="text-[12px] font-extrabold text-foreground leading-none">WhatsApp ✓</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating: حالة الشحن */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: -30, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 180 }}
              className="hidden lg:block absolute left-0 bottom-32 z-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="bg-white p-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <motion.svg
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </motion.svg>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold leading-none mb-1">حالة الشحن</div>
                  <div className="text-[12px] font-extrabold text-foreground leading-none">في الطريق للعميل</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating: نسبة التأكيد */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 180 }}
              className="hidden lg:block absolute -bottom-4 right-12 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="bg-gradient-to-br from-primary to-[#1E1A4D] text-white p-3 pl-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-white/60 font-bold leading-none mb-1">نسبة التأكيد</div>
                  <div className="text-[14px] font-extrabold leading-none">68% <span className="text-accent">↑</span></div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

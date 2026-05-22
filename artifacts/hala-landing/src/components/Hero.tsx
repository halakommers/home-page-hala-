import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import CommerceBackdrop from "@/components/CommerceBackdrop";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";
import dashLg from "@/assets/dashboards/dash_10.15.55_lg.webp";
import dashSm from "@/assets/dashboards/dash_10.15.55_sm.webp";

export default function Hero() {
  return (
    <section className="section-surface relative pt-24 pb-12 md:pt-34 md:pb-22 bg-white">
      <CommerceBackdrop variant="light" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border pointer-events-none" />

      <div className="container max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-center">

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-right order-1 w-full max-w-[640px] lg:max-w-none mx-auto lg:mx-0"
          >
            <div className="brand-pill inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-5 max-w-full">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-primary text-[12px] md:text-[13px] font-semibold tracking-normal whitespace-normal">فولفيلمنت وتشغيل تجارة إلكترونية في السعودية والخليج</span>
            </div>

            <h1 className="text-[32px] sm:text-[42px] md:text-[58px] font-bold text-foreground leading-[1.2] md:leading-[1.12] mb-4 md:mb-5 tracking-normal">
              شغّل متجرك في الخليج{" "}
              <span className="relative inline-block brand-gradient-text">
                بدون فوضى التشغيل
              </span>{" "}
              <br className="hidden md:block" />
              من أول طلب حتى التحصيل
            </h1>

            <p className="text-[16px] sm:text-[17px] md:text-[19px] text-muted-foreground leading-[1.85] md:leading-[1.75] max-w-[580px] mb-6 md:mb-8 px-1 sm:px-0">
              هلا كوميرس تجمع لك التوريد من الصين، التخزين في الخليج، تأكيد طلبات الدفع عند الاستلام، الشحن، والتحصيل في لوحة واحدة، حتى تبيع أكثر وتقلل المرتجعات وتعرف أين يذهب كل طلب.
            </p>

            <div className="mb-6 grid w-full max-w-[560px] grid-cols-1 sm:grid-cols-3 gap-2.5 text-right">
              {[
                "بدء تشغيل سريع",
                "COD وتحصيل واضح",
                "مخزون وشحن وتتبع",
              ].map((item) => (
                <div key={item} className="proof-chip flex items-center justify-center sm:justify-start gap-2 rounded-xl px-3 py-2.5 text-[13px] font-bold text-primary">
                  <ShieldCheck size={15} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5 w-full sm:w-auto">
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-hero-primary">
                <Button className="conversion-button w-full bg-accent text-white hover:bg-accent/90 text-[15px] md:text-[16px] h-12 md:h-13 px-6 md:px-8 py-3 rounded-lg flex items-center justify-center gap-2">
                  <span>افتح حساب بائع مجاناً</span>
                  <ArrowLeft size={18} />
                </Button>
              </a>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-hero-secondary">
                <Button variant="outline" className="w-full bg-white border border-primary/20 text-primary hover:bg-primary/5 text-[15px] md:text-[16px] h-12 md:h-13 px-6 md:px-8 py-3 rounded-lg shadow-none">
                  احجز مكالمة تشغيل مجانية
                </Button>
              </a>
            </div>

            <div className="text-[12px] md:text-[13px] text-muted-foreground font-medium flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
              <span>مكالمة مجانية</span>
              <span className="text-border">•</span>
              <span>بدون التزام في الاستشارة</span>
              <span className="text-border">•</span>
              <span>رد خلال 24 ساعة</span>
            </div>

            {/* Improved rating badge */}
            <div className="mt-6 md:mt-8 flex items-center gap-3 brand-shell p-3 rounded-xl">
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
            className="relative w-full flex items-center justify-center lg:justify-start order-2 min-h-[220px] sm:min-h-[260px] lg:min-h-[480px]"
          >
            <motion.div
              aria-hidden="true"
              animate={{ rotate: [0, 1.5, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="hidden lg:block absolute inset-y-12 inset-x-8 rounded-[24px] bg-secondary"
            />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[570px] shadow-md rounded-2xl overflow-hidden border border-border bg-white"
            >
              <div className="h-9 bg-secondary border-b border-border flex items-center px-4 gap-2 relative" dir="ltr">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bg-white text-[10px] text-primary/60 px-3 py-0.5 rounded-md font-mono">
                  seller.halakommers.com
                </div>
              </div>

              <div className="relative bg-white p-2 md:p-3">
                <picture>
                  <source media="(min-width: 768px)" srcSet={dashLg} />
                  <img
                    src={dashSm}
                    alt="لوحة تحكم هلا كوميرس"
                    width="1280"
                    height="817"
                    className="w-full h-auto block select-none pointer-events-none rounded-xl"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </motion.div>

            {/* Floating: تم تأكيد الطلب */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: 30, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 180 }}
              className="hidden lg:block absolute -right-3 top-14 z-20"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="brand-shell p-3 rounded-xl flex items-center gap-3"
              >
                <div className="relative w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.14, 1], rotate: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                  >
                    <CheckCircle2 size={19} strokeWidth={2.5} />
                  </motion.div>
                  <motion.span
                    animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full bg-green-400"
                  />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold leading-none mb-1">تم تأكيد الطلب</div>
                  <div className="text-[12px] font-bold text-foreground leading-none">WhatsApp ✓</div>
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
                className="brand-shell p-3 rounded-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  >
                    <Truck size={19} strokeWidth={2.2} />
                  </motion.div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold leading-none mb-1">حالة الشحن</div>
                  <div className="text-[12px] font-bold text-foreground leading-none">في الطريق للعميل</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating: نسبة التأكيد */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 180 }}
              className="hidden lg:block absolute -bottom-2 right-14 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="bg-primary text-white p-3 pl-4 rounded-xl shadow-lg flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  >
                    <BarChart3 size={19} strokeWidth={2.3} />
                  </motion.div>
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

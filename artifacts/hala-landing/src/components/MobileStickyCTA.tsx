import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, X, Sparkles } from "lucide-react";
import { CAL_URL, SIGNUP_URL } from "@/lib/links";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("hala_mcta_dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try { sessionStorage.setItem("hala_mcta_dismissed", "1"); } catch {}
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-[0_-10px_30px_-10px_rgba(45,38,105,0.25)] px-4 pt-3 pb-[calc(env(safe-area-inset-bottom,0)+0.75rem)]"
          dir="rtl"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-1 left-1 w-6 h-6 rounded-full bg-secondary text-muted-foreground hover:bg-border flex items-center justify-center transition-colors"
            aria-label="إخفاء"
            data-testid="button-mcta-dismiss"
          >
            <X size={12} />
          </button>
          <div className="flex items-center gap-2">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[1.4] bg-accent hover:bg-accent/90 text-white font-bold text-[14px] py-3 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md shadow-accent/20"
              data-testid="button-mcta-signup"
            >
              <Sparkles size={16} />
              افتح حساب بائع
            </a>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white border-2 border-primary text-primary font-bold text-[13px] py-[10px] rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
              data-testid="button-mcta-call"
            >
              <CalendarCheck size={15} />
              مكالمة
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

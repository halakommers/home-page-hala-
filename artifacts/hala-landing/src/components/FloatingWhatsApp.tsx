import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "966500000000";
const PREFILLED_MESSAGE = "السلام عليكم، أرغب في معرفة المزيد عن خدمات هلا كوميرس للتجارة الإلكترونية.";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasShownOnce(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 left-5 z-[60] flex flex-col items-start gap-3" dir="rtl">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-2xl border border-border/50 w-[290px] sm:w-[320px] overflow-hidden"
          >
            <div className="bg-gradient-to-br from-[#075E54] to-[#128C7E] p-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="إغلاق"
                data-testid="button-whatsapp-close"
              >
                <X size={14} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.51-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.913 6.99c-.005 5.444-4.455 9.885-9.943 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[14px] leading-tight">فريق هلا كوميرس</p>
                  <p className="text-[11px] text-white/80 mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                    متصل الآن
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#E5DDD5] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 opacity=%220.05%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22/></svg>')]">
              <div className="bg-white rounded-lg rounded-tr-none p-3 shadow-sm max-w-[85%]">
                <p className="text-[13px] text-foreground leading-[1.7]">
                  أهلاً بك! 👋<br/>
                  كيف يمكننا مساعدتك في تنمية تجارتك الإلكترونية في الخليج؟
                </p>
              </div>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] hover:bg-[#1FAE54] text-white text-center font-bold text-[14px] py-3 transition-colors"
              data-testid="link-whatsapp-start-chat"
              onClick={() => setIsOpen(false)}
            >
              ابدأ المحادثة على واتساب
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 18, delay: 1.5 }}
        onClick={() => setIsOpen(prev => !prev)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1FAE54] text-white shadow-2xl flex items-center justify-center transition-colors"
        aria-label="افتح محادثة واتساب"
        data-testid="button-whatsapp-toggle"
      >
        {!isOpen && hasShownOnce && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center shadow-md">
              1
            </span>
          </>
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.51-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.913 6.99c-.005 5.444-4.455 9.885-9.943 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

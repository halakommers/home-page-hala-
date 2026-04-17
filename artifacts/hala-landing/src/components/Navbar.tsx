import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "الخدمات", href: "/#services", isRoute: false },
    { name: "لمن هلا", href: "/#for-whom", isRoute: false },
    { name: "كيف نعمل", href: "/#how-it-works", isRoute: false },
    { name: "المدونة", href: "/blog", isRoute: true },
    { name: "مركز المساعدة", href: "/help", isRoute: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
          isScrolled ? "shadow-md py-3 border-b border-border" : "py-5 border-b border-transparent"
        }`}
      >
        <div className="container max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start gap-0 group" data-testid="link-logo">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-extrabold text-primary tracking-tight leading-none group-hover:opacity-90 transition-opacity">هلا</span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent mt-2"></span>
            </div>
            <span className="text-[13px] font-bold text-accent tracking-wider leading-none">كوميرس</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-primary hover:text-accent transition-colors"
                  data-testid={`link-nav-${link.name}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-primary hover:text-accent transition-colors"
                  data-testid={`link-nav-${link.name}`}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-[10px]" data-testid="button-login">
              تسجيل الدخول
            </Button>
            <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" data-testid="button-start">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-[10px] px-6">
                ابدأ مع هلا
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-primary p-2 -mr-2 relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-primary/40 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] z-50 bg-white shadow-2xl flex flex-col"
              dir="rtl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-extrabold text-primary tracking-tight leading-none">هلا</span>
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5"></span>
                  <span className="text-[12px] font-bold text-accent tracking-wider mr-1">كوميرس</span>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const Component = link.isRoute ? Link : "a";
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Component
                        href={link.href as any}
                        className="block text-[16px] font-medium text-primary hover:text-accent hover:bg-accent/5 rounded-lg px-4 py-3.5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`link-mobile-nav-${link.name}`}
                      >
                        {link.name}
                      </Component>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-6 pb-6 pt-4 border-t border-border space-y-3">
                <a
                  href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-start"
                  className="block"
                >
                  <Button className="w-full bg-primary text-white rounded-xl h-12 gap-2">
                    <Calendar size={16} />
                    ابدأ مع هلا
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary rounded-xl h-12"
                  data-testid="button-mobile-login"
                >
                  تسجيل الدخول
                </Button>
                <p className="text-center text-[12px] text-muted-foreground pt-2">
                  استشارة مجانية • رد خلال 24 ساعة
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

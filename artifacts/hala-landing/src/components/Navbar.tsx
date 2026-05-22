import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Sparkles, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUI } from "@/contexts/UIContext";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/links";

interface NavLink {
  name: string;
  href: string;
  isRoute: boolean;
}

const NAV_LINKS: NavLink[] = [
  { name: "الخدمات", href: "/#services", isRoute: false },
  { name: "لمن هلا", href: "/#for-whom", isRoute: false },
  { name: "كيف نعمل", href: "/#how-it-works", isRoute: false },
  { name: "المدونة", href: "/blog", isRoute: true },
  { name: "مركز المساعدة", href: "/help", isRoute: true },
];

function NavLinkItem({
  link,
  className,
  onClick,
  testId,
}: {
  link: NavLink;
  className: string;
  onClick?: () => void;
  testId: string;
}) {
  if (link.isRoute) {
    return (
      <Link href={link.href} className={className} onClick={onClick} data-testid={testId}>
        {link.name}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} onClick={onClick} data-testid={testId}>
      {link.name}
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setMobileMenuOpen } = useUI();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2.5" : "py-3 md:py-4"
      }`}
    >
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-xl px-3 sm:px-5 transition-all duration-300 ${
            isScrolled
              ? "brand-shell py-2"
              : "bg-white/90 border border-border py-2.5 shadow-xs backdrop-blur-xl"
          }`}
        >
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <span className="text-2xl font-bold leading-none group-hover:scale-105 transition-transform">a</span>
            <span className="absolute -left-1 top-2 h-3 w-3 rounded-[2px] bg-accent"></span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[24px] font-bold text-primary tracking-normal group-hover:text-accent transition-colors">Hala</span>
            <span className="text-[12px] font-bold text-accent tracking-normal">kommers</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.name}
              link={link}
              className="text-[14px] font-medium text-primary hover:text-accent hover:bg-secondary rounded-lg px-3 py-2 transition-colors"
              testId={`link-nav-${link.name}`}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" data-testid="button-login">
            <Button variant="outline" className="border-primary/20 bg-white text-primary hover:bg-primary/5 rounded-lg gap-2 h-10">
              <LogIn size={15} />
              تسجيل الدخول
            </Button>
          </a>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" data-testid="button-start">
            <Button className="conversion-button bg-accent text-white hover:bg-accent/90 rounded-lg px-5 gap-2 h-10">
              <Sparkles size={15} />
              افتح حساب بائع
            </Button>
          </a>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-primary p-2.5 -ml-2 relative z-[60] rounded-lg bg-secondary border border-border"
              aria-label="فتح القائمة"
              data-testid="button-mobile-menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85%] max-w-[340px] p-0 flex flex-col bg-background"
            dir="rtl"
          >
            <SheetHeader className="px-6 py-5 border-b border-border text-right">
              <SheetTitle asChild>
                <div className="flex items-center gap-3 justify-start">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <span className="text-2xl font-extrabold leading-none">a</span>
                    <span className="absolute -left-1 top-2 h-3 w-3 rounded-[3px] bg-accent"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-extrabold text-primary leading-none">Hala</span>
                    <span className="text-[11px] font-bold text-accent leading-none mt-1">kommers</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <NavLinkItem
                    link={link}
                    className="block text-[16px] font-medium text-primary hover:text-accent hover:bg-accent/5 rounded-lg px-4 py-3.5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    testId={`link-mobile-nav-${link.name}`}
                  />
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-6 pt-4 border-t border-border space-y-3">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-start"
                className="block"
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-12 gap-2 shadow-md shadow-accent/20">
                  <Sparkles size={16} />
                  افتح حساب بائع مجاناً
                </Button>
              </a>
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-login"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary rounded-xl h-12 gap-2"
                >
                  <LogIn size={16} />
                  تسجيل الدخول
                </Button>
              </a>
              <p className="text-center text-[12px] text-muted-foreground pt-2">
                استشارة مجانية • رد خلال 24 ساعة
              </p>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}

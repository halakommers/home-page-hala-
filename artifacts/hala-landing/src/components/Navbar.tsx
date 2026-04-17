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
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.name}
              link={link}
              className="text-[15px] font-medium text-primary hover:text-accent transition-colors"
              testId={`link-nav-${link.name}`}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" data-testid="button-login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-[10px] gap-2">
              <LogIn size={15} />
              تسجيل الدخول
            </Button>
          </a>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" data-testid="button-start">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-[10px] px-6 gap-2 shadow-md shadow-accent/20">
              <Sparkles size={15} />
              ابدأ مع هلا
            </Button>
          </a>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden text-primary p-2 -mr-2 relative z-[60]"
              aria-label="فتح القائمة"
              data-testid="button-mobile-menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85%] max-w-[340px] p-0 flex flex-col bg-white"
            dir="rtl"
          >
            <SheetHeader className="px-6 py-5 border-b border-border text-right">
              <SheetTitle asChild>
                <div className="flex items-center gap-1 justify-start">
                  <span className="text-2xl font-extrabold text-primary tracking-tight leading-none">هلا</span>
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5"></span>
                  <span className="text-[12px] font-bold text-accent tracking-wider mr-1">كوميرس</span>
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
                  سجّل الآن مجاناً
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
    </header>
  );
}

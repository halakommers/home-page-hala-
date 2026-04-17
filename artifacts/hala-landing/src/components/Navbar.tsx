import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الخدمات", href: "/#services", isRoute: false },
    { name: "لمن هلا", href: "/#for-whom", isRoute: false },
    { name: "كيف نعمل", href: "/#how-it-works", isRoute: false },
    { name: "المدونة", href: "/blog", isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-3 border-b border-border" : "py-5 border-b border-transparent"
      }`}
    >
      <div className="container max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0 group" data-testid="link-logo">
          <div className="flex items-center gap-1">
            <span className="text-3xl font-extrabold text-primary tracking-tight leading-none group-hover:opacity-90 transition-opacity">هلا</span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent mt-2"></span>
          </div>
          <span className="text-[13px] font-bold text-accent tracking-wider leading-none">كوميرس</span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop Actions */}
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Button variant="outline" className="w-full border-primary text-primary rounded-[10px]" data-testid="button-mobile-login">
              تسجيل الدخول
            </Button>
            <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full" data-testid="button-mobile-start" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-white rounded-[10px]">
                ابدأ مع هلا
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
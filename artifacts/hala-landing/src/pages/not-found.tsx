import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Home, BookOpen, HelpCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function NotFound() {
  useSEO({
    title: "الصفحة غير موجودة — 404",
    description: "الصفحة التي تبحث عنها غير موجودة. ارجع للصفحة الرئيسية لهلا كوميرس.",
    noindex: true,
  });

  const quickLinks = [
    { icon: Home, label: "الصفحة الرئيسية", href: "/", testId: "link-404-home" },
    { icon: BookOpen, label: "المدونة", href: "/blog", testId: "link-404-blog" },
    { icon: HelpCircle, label: "مركز المساعدة", href: "/help", testId: "link-404-help" },
    { icon: Phone, label: "تواصل معنا", href: "/#footer", testId: "link-404-contact" },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F8F6FC] via-white to-[#F8F6FC] text-center px-6 font-cairo py-12 relative overflow-hidden"
    >
      <div className="absolute top-20 -right-32 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex flex-col items-center gap-1 relative z-10"
      >
        <Link href="/" className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-4xl font-extrabold text-primary tracking-tight leading-none">هلا</span>
            <span className="w-3 h-3 rounded-full bg-accent mt-3"></span>
          </div>
          <span className="text-sm font-bold text-accent tracking-wider">كوميرس</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mb-4"
      >
        <div className="text-[120px] md:text-[180px] font-extrabold leading-none select-none bg-gradient-to-br from-primary via-[#4F45A0] to-accent bg-clip-text text-transparent">
          404
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-2xl md:text-3xl font-extrabold text-primary mb-3 relative z-10"
      >
        الصفحة اللي تبحث عنها غير موجودة
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[15px] text-muted-foreground max-w-md leading-relaxed mb-8 relative z-10"
      >
        قد يكون الرابط غير صحيح أو تم نقل الصفحة. لا تقلق — اختر من الروابط أدناه أو ارجع للرئيسية.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl w-full mb-8 relative z-10"
      >
        {quickLinks.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.05 }}
          >
            <Link
              href={link.href}
              className="block bg-white hover:bg-secondary/40 border border-border hover:border-accent/30 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md group"
              data-testid={link.testId}
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-primary/10 group-hover:bg-accent/15 flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                <link.icon size={18} />
              </div>
              <p className="text-[13px] font-bold text-primary">{link.label}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="relative z-10"
      >
        <Link href="/">
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-[10px] px-8 h-12 gap-2" data-testid="button-404-home">
            <Home size={16} />
            العودة للرئيسية
          </Button>
        </Link>
      </motion.div>

      <FloatingWhatsApp />
    </div>
  );
}

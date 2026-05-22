import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, BookOpen, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogPosts } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";
import StructuredData, { organizationSchema } from "@/components/StructuredData";

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://halacommerce.com/blog",
  name: "مدونة هلا كوميرس",
  description: "رؤى وأدلة عملية لتجارة إلكترونية ناجحة في الخليج العربي",
  url: "https://halacommerce.com/blog",
  publisher: { "@id": "https://halacommerce.com/#organization" },
  inLanguage: "ar-SA",
};

export default function Blog() {
  useSEO({
    title: "المدونة — رؤى وأدلة للتجارة الإلكترونية في الخليج",
    description: "اكتشف أحدث المقالات والأدلة العملية من هلا كوميرس حول التجارة الإلكترونية في الخليج — شحن، تخزين، COD، والتوسع في السوق السعودي.",
    keywords: "مدونة تجارة إلكترونية, دليل السوق السعودي, COD خليج, فولفيلمنت, بيع اونلاين الخليج",
    canonical: "/blog",
    ogType: "website",
  });

  return (
    <div dir="rtl" className="min-h-screen bg-background text-primary font-sans">
      <StructuredData schema={[organizationSchema, blogListSchema]} id="blog-schema" />
      <Navbar />

      {/* Header */}
      <section className="pt-32 md:pt-36 pb-14 md:pb-16 bg-white border-b border-border relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-primary/[0.055] blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-accent/[0.07] blur-3xl"
        />
        <div className="container max-w-[1100px] mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="brand-pill inline-flex items-center gap-2 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <motion.span
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
              <BookOpen size={16} className="text-accent" />
              مدونة هلا كوميرس
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-5">
              رؤى وأدلة عملية
              <br />
              <span className="relative inline-block">
                لتجارة إلكترونية
                <span className="text-accent"> ناجحة</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto leading-[1.9]">
              مقالات وتحليلات يكتبها فريقنا من قلب التشغيل اليومي في السوق
              السعودي والخليجي — لتساعدك تنمو بثقة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-14 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block brand-card rounded-2xl overflow-hidden transition-all duration-300"
                  data-testid={`link-post-${post.slug}`}
                >
                  {/* Cover */}
                  <div className={`relative h-52 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}>
                    <motion.div
                      animate={{ opacity: [0.08, 0.16, 0.08] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: idx * 0.4 }}
                      className="text-7xl drop-shadow-lg"
                    >
                      {post.accentEmoji}
                    </motion.div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                    <div className="p-6 md:p-7">
                    <div className="flex items-center gap-4 text-xs text-primary/60 mb-3 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-accent font-semibold mb-3">
                      {post.subtitle}
                    </p>
                    <p className="text-[15px] text-primary/70 leading-[1.85] mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-primary/70">
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                        اقرأ المقال
                        <ArrowLeft size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-secondary border-y border-border">
        <div className="container max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="brand-card rounded-2xl px-5 py-8 md:p-10"
          >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <motion.div animate={{ rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
              <Sparkles size={22} />
            </motion.div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            تريد أن نطبّق هذه الأفكار على متجرك؟
          </h3>
          <p className="text-primary/70 mb-6 leading-[1.85]">
            احجز استشارة مجانية مع فريقنا، ورتّب أول 90 يوم لك في السوق السعودي
            بشكل صحيح.
          </p>
          <a
            href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            data-testid="link-cta-consultation"
          >
            <ArrowLeft size={18} />
            ابدأ مع هلا مجاناً
          </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

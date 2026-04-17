import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-primary font-cairo">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-[#F8F6FC] to-white border-b border-[#E8E5F2]">
        <div className="container max-w-[1100px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              مدونة هلا كوميرس
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5">
              رؤى وأدلة عملية
              <br />
              <span className="relative inline-block">
                لتجارة إلكترونية
                <span className="text-accent"> ناجحة</span>
                <svg
                  className="absolute -bottom-2 left-0 right-0 mx-auto"
                  width="100%"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5 Q 100 1, 198 5"
                    stroke="#E85D1F"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
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
      <section className="py-20">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-2xl border border-[#E8E5F2] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-testid={`link-post-${post.slug}`}
                >
                  {/* Cover */}
                  <div
                    className={`relative h-56 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                    </div>
                    <div className="text-7xl drop-shadow-lg">
                      {post.accentEmoji}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7">
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

                    <h2 className="text-2xl font-extrabold mb-2 leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-accent font-bold mb-3">
                      {post.subtitle}
                    </p>
                    <p className="text-[15px] text-primary/70 leading-[1.85] mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#E8E5F2]">
                      <span className="text-sm font-bold text-primary/70">
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all">
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
      <section className="py-16 bg-[#F8F6FC] border-y border-[#E8E5F2]">
        <div className="container max-w-[900px] mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            تريد أن نطبّق هذه الأفكار على متجرك؟
          </h3>
          <p className="text-primary/70 mb-6 leading-[1.85]">
            احجز استشارة مجانية مع فريقنا، ورتّب أول 90 يوم لك في السوق السعودي
            بشكل صحيح.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3.5 rounded-[10px] transition-colors"
            data-testid="link-cta-consultation"
          >
            <ArrowLeft size={18} />
            ابدأ مع هلا مجاناً
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

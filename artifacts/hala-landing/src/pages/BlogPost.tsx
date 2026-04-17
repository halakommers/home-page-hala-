import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug, type ContentBlock } from "@/data/blogPosts";
import NotFound from "@/pages/not-found";

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="text-2xl md:text-3xl font-extrabold text-primary mt-12 mb-5 leading-snug scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="text-xl md:text-2xl font-bold text-primary mt-8 mb-3 leading-snug"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={idx}
          className="text-[17px] text-primary/85 leading-[2] mb-5"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-3 mb-6 mt-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[17px] text-primary/85 leading-[1.95]"
            >
              <span className="flex-shrink-0 mt-2.5 w-2 h-2 rounded-full bg-accent"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={idx}
          className="my-8 bg-gradient-to-br from-[#F8F6FC] to-white border-r-4 border-accent rounded-2xl p-6 md:p-7"
        >
          {block.title && (
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-accent" />
              <span className="font-extrabold text-accent text-base">
                {block.title}
              </span>
            </div>
          )}
          <p className="text-[17px] text-primary leading-[1.95] font-medium">
            {block.text}
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-8 border-r-4 border-primary bg-[#F8F6FC] p-6 rounded-l-2xl text-lg italic text-primary leading-[1.95]"
        >
          {block.text}
        </blockquote>
      );
  }
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params ? getPostBySlug(params.slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!post) return <NotFound />;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div dir="rtl" className="min-h-screen bg-white text-primary font-cairo">
      <Navbar />

      {/* Hero */}
      <section
        className={`pt-32 pb-16 bg-gradient-to-br ${post.gradient} text-white relative overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container max-w-[900px] mx-auto px-6 relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm font-bold mb-8 transition-colors"
            data-testid="link-back-blog"
          >
            <ArrowRight size={16} />
            العودة لجميع المقالات
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/15 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.25] mb-4">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/85 font-medium leading-snug mb-7">
              {post.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/85 font-medium">
              <span className="flex items-center gap-2">
                <User size={15} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 md:py-20">
        <div className="container max-w-[760px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {post.content.map((block, idx) => renderBlock(block, idx))}
          </motion.div>

          {/* End-of-article CTA */}
          <div className="mt-14 p-7 md:p-9 bg-gradient-to-br from-primary to-[#1E1A4D] rounded-3xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              جاهز للخطوة التالية؟
            </h3>
            <p className="text-white/85 mb-6 leading-[1.85] max-w-md mx-auto">
              احجز استشارة مجانية مع فريق هلا، ودعنا نطبّق ما قرأته على متجرك
              فعلياً.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 text-white font-bold rounded-[10px] px-8 py-6 text-base"
              data-testid="button-article-cta"
            >
              ابدأ مع هلا مجاناً
            </Button>
          </div>
        </div>
      </article>

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-[#F8F6FC] border-t border-[#E8E5F2]">
          <div className="container max-w-[1100px] mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
              اقرأ أيضاً
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group block bg-white rounded-2xl border border-[#E8E5F2] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                  data-testid={`link-related-${other.slug}`}
                >
                  <div className="flex items-stretch">
                    <div
                      className={`w-32 flex-shrink-0 bg-gradient-to-br ${other.gradient} flex items-center justify-center text-5xl`}
                    >
                      {other.accentEmoji}
                    </div>
                    <div className="p-5 flex-1">
                      <span className="text-xs font-bold text-accent">
                        {other.category}
                      </span>
                      <h4 className="text-lg font-extrabold mt-1 mb-2 leading-snug group-hover:text-accent transition-colors">
                        {other.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary/70 group-hover:text-accent transition-colors">
                        اقرأ المقال
                        <ArrowLeft size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

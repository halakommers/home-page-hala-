import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug, type ContentBlock } from "@/data/blogPosts";
import NotFound from "@/pages/not-found";
import { useSEO } from "@/hooks/useSEO";
import StructuredData, { organizationSchema } from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/schema";

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

function BlogPostSEO({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "المدونة", href: "/blog" },
    { label: post.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://halacommerce.com/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
      "@id": "https://halacommerce.com/#organization",
    },
    publisher: { "@id": "https://halacommerce.com/#organization" },
    datePublished: "2026-04-01",
    dateModified: "2026-04-17",
    inLanguage: "ar-SA",
    url: `https://halacommerce.com/blog/${post.slug}`,
    articleSection: post.category,
    image: {
      "@type": "ImageObject",
      url: "https://halacommerce.com/opengraph.jpg",
      width: 1200,
      height: 630,
    },
  };

  useSEO({
    title: post.title,
    description: post.excerpt,
    keywords: `${post.title}, ${post.subtitle}, ${post.category}, فولفيلمنت السعودية, تجارة إلكترونية الخليج, شحن السعودية, تخزين منتجات, COD السعودية, هلا كوميرس`,
    canonical: `/blog/${post.slug}`,
    ogType: "article",
    ogTitle: `${post.title} — هلا كوميرس`,
    ogDescription: post.excerpt,
    articleAuthor: post.author,
  });

  return (
    <StructuredData
      schema={[organizationSchema, articleSchema, buildBreadcrumbSchema(breadcrumbItems)]}
      id="blogpost-schema"
    />
  );
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params ? getPostBySlug(params.slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!post) return <NotFound />;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "المدونة", href: "/blog" },
    { label: post.title },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background text-primary font-sans">
      <BlogPostSEO post={post} />
      <Navbar />

      {/* Hero */}
      <section className={`pt-32 pb-16 bg-gradient-to-br ${post.gradient} text-white relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="container max-w-[900px] mx-auto px-4 sm:px-6 relative">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} light />
          </div>
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
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <motion.span
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.25] mb-4">
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
      <article className="py-14 md:py-20 bg-white">
        <div className="container max-w-[760px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {post.content.map((block, idx) => renderBlock(block, idx))}
          </motion.div>

          {/* End-of-article CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-14 p-7 md:p-9 bg-primary rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              جاهز للخطوة التالية؟
            </h3>
            <p className="text-white/85 mb-6 leading-[1.85] max-w-md mx-auto">
              احجز استشارة مجانية مع فريق هلا، ودعنا نطبّق ما قرأته على متجرك
              فعلياً.
            </p>
            <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" data-testid="button-article-cta">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-8 py-6 text-base">
                ابدأ مع هلا مجاناً
              </Button>
            </a>
          </motion.div>
        </div>
      </article>

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="py-14 md:py-16 bg-secondary border-t border-border">
          <div className="container max-w-[1100px] mx-auto px-4 sm:px-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              اقرأ أيضاً
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((other) => (
                <motion.div
                  key={other.slug}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    href={`/blog/${other.slug}`}
                    className="group block brand-card rounded-2xl overflow-hidden transition-all"
                    data-testid={`link-related-${other.slug}`}
                  >
                    <div className="flex items-stretch">
                      <div className={`w-28 sm:w-32 flex-shrink-0 bg-gradient-to-br ${other.gradient} flex items-center justify-center text-5xl`}>
                        <motion.span
                          animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                        >
                          {other.accentEmoji}
                        </motion.span>
                      </div>
                      <div className="p-5 flex-1">
                        <span className="text-xs font-bold text-accent">
                          {other.category}
                        </span>
                        <h4 className="text-lg font-bold mt-1 mb-2 leading-snug group-hover:text-accent transition-colors">
                          {other.title}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/70 group-hover:text-accent transition-colors">
                          اقرأ المقال
                          <ArrowLeft size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

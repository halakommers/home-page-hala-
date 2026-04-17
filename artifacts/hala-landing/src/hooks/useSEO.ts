import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  articlePublishedTime?: string;
  articleAuthor?: string;
  noindex?: boolean;
}

const BASE_URL = "https://halacommerce.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph.jpg`;
const SITE_NAME = "هلا كوميرس";

function setMeta(name: string, content: string, attribute = "name") {
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
  articlePublishedTime,
  articleAuthor,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} — شريكك التشغيلي للتجارة الإلكترونية في الخليج`;

    document.title = fullTitle;

    if (description) setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    setMeta("robots", noindex ? "noindex,nofollow" : "index,follow");

    if (canonical) setLink("canonical", `${BASE_URL}${canonical}`);

    setMeta("og:type", ogType, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:title", ogTitle || fullTitle, "property");
    setMeta("og:description", ogDescription || description || "", "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:locale", "ar_SA", "property");
    if (canonical) setMeta("og:url", `${BASE_URL}${canonical}`, "property");

    setMeta("twitter:card", twitterCard, "name");
    setMeta("twitter:title", ogTitle || fullTitle, "name");
    setMeta("twitter:description", ogDescription || description || "", "name");
    setMeta("twitter:image", ogImage, "name");
    setMeta("twitter:site", "@HalaCommerce", "name");

    if (ogType === "article") {
      if (articlePublishedTime) setMeta("article:published_time", articlePublishedTime, "property");
      if (articleAuthor) setMeta("article:author", articleAuthor, "property");
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, articlePublishedTime, articleAuthor, noindex]);
}

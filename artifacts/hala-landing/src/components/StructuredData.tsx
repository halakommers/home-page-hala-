import { useEffect } from "react";

interface StructuredDataProps {
  schema: object | object[];
  id?: string;
}

export default function StructuredData({ schema, id = "structured-data" }: StructuredDataProps) {
  useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(Array.isArray(schema) ? schema : schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [schema, id]);

  return null;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://halacommerce.com/#organization",
  name: "هلا كوميرس",
  alternateName: "Hala Commerce",
  url: "https://halacommerce.com",
  logo: {
    "@type": "ImageObject",
    url: "https://halacommerce.com/favicon.svg",
    width: 200,
    height: 200,
  },
  description:
    "شريك التشغيل المتكامل للتجارة الإلكترونية في منطقة الخليج العربي — توريد، تخزين، تأكيد طلبات، شحن، وتحصيل.",
  areaServed: [
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Oman" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Arabic",
  },
  sameAs: [
    "https://twitter.com/HalaCommerce",
    "https://www.linkedin.com/company/halacommerce",
    "https://www.instagram.com/halacommerce",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://halacommerce.com/#website",
  url: "https://halacommerce.com",
  name: "هلا كوميرس",
  publisher: { "@id": "https://halacommerce.com/#organization" },
  inLanguage: "ar-SA",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://halacommerce.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://halacommerce.com/#service",
  name: "خدمات التجارة الإلكترونية بالخليج",
  provider: { "@id": "https://halacommerce.com/#organization" },
  serviceType: "E-commerce Fulfillment",
  areaServed: "Gulf Cooperation Council",
  description:
    "نقدم خدمات شاملة للبائعين عبر الإنترنت تشمل: التخزين، تأكيد الطلبات بالواتساب والهاتف، الشحن، التحصيل النقدي، وإدارة المرتجعات في السعودية والخليج.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات هلا كوميرس",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "تخزين البضائع" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "تأكيد الطلبات" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "الشحن والتوصيل" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "التحصيل النقدي COD" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "إدارة المرتجعات" } },
    ],
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "هل هلا كوميرس مناسبة للمتاجر الصغيرة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. يمكن للبائع البدء بكميات صغيرة ثم زيادة التشغيل تدريجياً حسب الطلبات والمخزون.",
      },
    },
    {
      "@type": "Question",
      name: "ما الفرق بين هلا كوميرس وشركة الشحن؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شركة الشحن تنقل الطرد فقط. هلا كوميرس تدير التوريد، التخزين، التغليف، تأكيد الطلبات، الشحن، التحصيل، والمتابعة من لوحة واحدة.",
      },
    },
    {
      "@type": "Question",
      name: "هل تدعمون الدفع عند الاستلام في السعودية والخليج؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. تشمل الخدمة تأكيد طلبات الدفع عند الاستلام، الشحن، التحصيل، وتسوية المستحقات وفق الاتفاق.",
      },
    },
    {
      "@type": "Question",
      name: "كيف أبدأ تشغيل متجري مع هلا كوميرس؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يمكنك فتح حساب بائع أو حجز مكالمة تشغيل مجانية، ثم يراجع الفريق نشاطك ويقترح مسار تشغيل مناسباً.",
      },
    },
  ],
};

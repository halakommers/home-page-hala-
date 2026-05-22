import CommerceBackdrop from "@/components/CommerceBackdrop";

export default function TrustBar() {
  return (
    <section className="section-surface relative py-8 bg-background">
      <CommerceBackdrop variant="warm" />
      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <p className="text-[14px] md:text-[15px] text-muted-foreground font-medium">تشغيل وشحن وتحصيل للبائعين في أسواق الخليج:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-[15px] md:text-[16px] font-bold text-primary">
            <div className="flex items-center gap-2 brand-card px-4 py-2 rounded-full">
              <span className="text-lg">🇸🇦</span> السعودية
            </div>
            <div className="flex items-center gap-2 brand-card px-4 py-2 rounded-full">
              <span className="text-lg">🇦🇪</span> الإمارات
            </div>
            <div className="flex items-center gap-2 brand-card px-4 py-2 rounded-full">
              <span className="text-lg">🇰🇼</span> الكويت
            </div>
            <div className="flex items-center gap-2 brand-card px-4 py-2 rounded-full">
              <span className="text-lg">🇶🇦</span> قطر
            </div>
            <div className="flex items-center gap-2 brand-card px-4 py-2 rounded-full">
              <span className="text-lg">🇧🇭</span> البحرين
            </div>
            <div className="flex items-center gap-2 brand-card px-4 py-2 rounded-full">
              <span className="text-lg">🇴🇲</span> عُمان
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

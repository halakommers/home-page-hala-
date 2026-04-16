export default function TrustBar() {
  return (
    <section className="py-8 bg-secondary">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-[14px] text-muted-foreground font-medium">نخدم البائعين في:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-6 text-[15px] md:text-[16px] font-medium text-muted-foreground">
            <div className="flex items-center gap-2"><span>🇸🇦</span> السعودية</div>
            <span className="hidden sm:block text-border/80 text-xl">•</span>
            <div className="flex items-center gap-2"><span>🇦🇪</span> الإمارات</div>
            <span className="hidden sm:block text-border/80 text-xl">•</span>
            <div className="flex items-center gap-2"><span>🇰🇼</span> الكويت</div>
            <span className="hidden lg:block text-border/80 text-xl">•</span>
            <div className="flex items-center gap-2"><span>🇶🇦</span> قطر</div>
            <span className="hidden sm:block text-border/80 text-xl">•</span>
            <div className="flex items-center gap-2"><span>🇧🇭</span> البحرين</div>
            <span className="hidden sm:block text-border/80 text-xl">•</span>
            <div className="flex items-center gap-2"><span>🇴🇲</span> عُمان</div>
          </div>
        </div>
      </div>
    </section>
  );
}
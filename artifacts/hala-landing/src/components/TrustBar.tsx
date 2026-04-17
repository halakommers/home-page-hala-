export default function TrustBar() {
  return (
    <section className="relative py-8 bg-secondary overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2D2669 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1200 260" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M180 180 C260 120, 340 110, 420 150 S590 210, 680 150 S850 90, 980 140"
            stroke="#E85D1F"
            strokeWidth="2"
            strokeDasharray="3 8"
            fill="none"
          />
          <path
            d="M120 90 C210 40, 310 30, 390 70 S560 140, 650 90 S820 20, 980 60"
            stroke="#2D2669"
            strokeWidth="2"
            strokeDasharray="2 10"
            fill="none"
          />
        </svg>
      </div>
      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <p className="text-[14px] md:text-[15px] text-muted-foreground font-medium">نخدم البائعين في:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-[15px] md:text-[16px] font-bold text-primary">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-border/60">
              <span className="text-lg">🇸🇦</span> السعودية
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-border/60">
              <span className="text-lg">🇦🇪</span> الإمارات
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-border/60">
              <span className="text-lg">🇰🇼</span> الكويت
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-border/60">
              <span className="text-lg">🇶🇦</span> قطر
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-border/60">
              <span className="text-lg">🇧🇭</span> البحرين
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-border/60">
              <span className="text-lg">🇴🇲</span> عُمان
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
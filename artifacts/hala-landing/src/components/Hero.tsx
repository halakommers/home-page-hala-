import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-32 overflow-hidden bg-white">
      {/* Decorative background dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#2D2669 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="container max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-3 md:px-4 py-1.5 rounded-full mb-5 md:mb-6 max-w-full">
              <span className="text-accent text-[10px]">●</span>
              <span className="text-accent text-[12px] md:text-[13px] font-bold tracking-wide whitespace-normal">تشغيل متكامل للتجارة الإلكترونية في الخليج</span>
            </div>
            
            <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-extrabold text-foreground leading-[1.15] md:leading-[1.1] mb-5 md:mb-6 tracking-tight">
              منظومة تشغيل{" "}
              <span className="relative inline-block">
                متكاملة
                <svg className="absolute w-full h-[10px] md:h-[12px] -bottom-1 left-0 text-accent" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9.5C45.5 3.5 120 -2.5 198 8.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <br className="hidden md:block" />
              لتجارتك في الخليج
            </h1>
            
            <p className="text-[16px] sm:text-[17px] md:text-[20px] text-muted-foreground leading-[1.8] md:leading-[1.7] max-w-[540px] mb-8 md:mb-10 px-2 sm:px-0">
              توريد، تخزين، تأكيد طلبات، شحن، وتحصيل — كل ما تحتاجه لتنمو بثقة في السعودية والخليج، تحت سقف شريك واحد.
            </p>
            
            <div className="lg:hidden relative z-10 w-full max-w-[380px] mb-6">
              <div className="relative w-full shadow-2xl rounded-2xl overflow-hidden border border-border/50 bg-white">
                <div className="p-4 bg-[#FDFDFD]">
                  <div className="bg-white p-3 rounded-xl border border-border shadow-sm flex justify-between items-center">
                    <div className="text-center flex-1">
                      <div className="text-[11px] text-muted-foreground mb-1">إجمالي الطلبات (الخليج)</div>
                      <div className="text-xl font-extrabold text-primary">12,450</div>
                    </div>
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5 w-full sm:w-auto">
              <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-hero-primary">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 text-[15px] md:text-[16px] h-13 md:h-14 px-6 md:px-8 py-3.5 rounded-[10px] flex items-center justify-center gap-2">
                  <span>ابدأ مع هلا مجاناً</span>
                  <span className="text-lg">←</span>
                </Button>
              </a>
              <a href="https://cal.com/hala-kommers-gcm087/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" data-testid="button-hero-secondary">
                <Button variant="outline" className="w-full bg-white border-2 border-primary text-primary hover:bg-primary/5 text-[15px] md:text-[16px] h-13 md:h-14 px-6 md:px-8 py-3.5 rounded-[10px]">
                  احجز استشارة
                </Button>
              </a>
            </div>
            
            <div className="text-[12px] md:text-[13px] text-muted-foreground font-medium flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
              <span>استشارة مجانية</span>
              <span className="text-border">•</span>
              <span>بدون التزام</span>
              <span className="text-border">•</span>
              <span>رد خلال 24 ساعة</span>
            </div>
            
            <div className="mt-8 md:mt-12 flex items-center gap-3 bg-secondary/50 p-3 md:p-4 rounded-2xl border border-border/50">
              <div className="flex text-accent text-base md:text-lg">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-[12px] md:text-[14px] font-bold text-primary">
                4.9 <span className="text-muted-foreground font-medium">— متوسط تقييم البائعين</span>
              </p>
            </div>
          </motion.div>

          {/* Left Column: Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[300px] sm:h-[380px] md:h-[500px] w-full flex items-center justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Background Blob */}
            <div className="absolute w-[80%] h-[80%] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            
            {/* Dashboard Mockup SVG */}
            <div className="relative z-10 w-full max-w-[500px] shadow-2xl rounded-2xl overflow-hidden border border-border/50 bg-white">
              {/* Header */}
              <div className="h-10 bg-secondary border-b border-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 grid grid-cols-2 gap-4 bg-[#FDFDFD]">
                {/* Stats Card */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="col-span-2 bg-white p-4 rounded-xl border border-border shadow-sm flex justify-between items-center"
                >
                  <div>
                    <div className="text-[12px] text-muted-foreground mb-1">إجمالي الطلبات (الخليج)</div>
                    <div className="text-2xl font-extrabold text-primary">12,450</div>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                </motion.div>
                
                {/* Map abstract */}
                <div className="col-span-1 bg-white p-4 rounded-xl border border-border shadow-sm aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5"></div>
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-primary/20">
                    <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 82C32.3 82 18 67.7 18 50C18 32.3 32.3 18 50 18C67.7 18 82 32.3 82 50C82 67.7 67.7 82 50 82Z" fill="currentColor"/>
                    <circle cx="50" cy="50" r="15" fill="currentColor"/>
                  </svg>
                  
                  {/* Pings */}
                  <motion.div animate={{ scale: [1, 2], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-[40%] right-[40%] w-3 h-3 bg-accent rounded-full"></motion.div>
                  <div className="absolute top-[40%] right-[40%] w-3 h-3 bg-accent rounded-full"></div>
                </div>
                
                {/* Status List */}
                <div className="col-span-1 bg-white p-4 rounded-xl border border-border shadow-sm flex flex-col gap-3 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-16 bg-muted rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="h-2 w-12 bg-muted rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="h-2 w-20 bg-muted rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 top-20 bg-white p-3 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground font-bold">تم تأكيد الطلب</div>
                <div className="text-[12px] font-bold text-foreground">WhatsApp ✓</div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-20 bg-white p-3 rounded-xl shadow-lg border border-border/50 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground font-bold">حالة الشحن</div>
                <div className="text-[12px] font-bold text-foreground">في الطريق للعميل</div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
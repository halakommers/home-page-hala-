import { motion } from "framer-motion";

export default function WhyHala() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative side dots */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#2D2669 2px, transparent 2px)",
          backgroundSize: "16px 16px"
        }}
      ></div>
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#2D2669 2px, transparent 2px)",
          backgroundSize: "16px 16px"
        }}
      ></div>

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-accent font-bold text-[14px] tracking-wide mb-4">هلا أكثر من شركة شحن</span>
          
          <h2 className="text-[28px] md:text-[44px] font-bold text-foreground leading-[1.2] mb-6 max-w-3xl">
            شريكك التشغيلي الكامل في الخليج
          </h2>
          
          <p className="text-[17px] md:text-[18px] text-muted-foreground leading-[1.75] max-w-[720px]">
            نحن لا نشحن منتجاتك فقط — بل ندير معك المنظومة كاملة: من المصنع في الصين، إلى مستودعاتنا في السعودية، إلى يد عميلك، حتى تحصيل المبلغ في حسابك. كل ذلك في تدفق واحد منظم، ولوحة تحكم واحدة.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
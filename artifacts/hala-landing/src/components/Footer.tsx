import { SiX, SiInstagram, SiYoutube } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E1A4D] text-white/80 pt-20 pb-10 border-t border-white/5">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 pr-0 lg:pr-4">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none">هلا</span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent mt-2"></span>
              <span className="text-[13px] font-bold text-white tracking-wider leading-none mr-1">كوميرس</span>
            </div>
            <p className="text-[15px] leading-[1.8] mb-8 max-w-[280px]">
              شريكك التشغيلي للتجارة الإلكترونية في الخليج
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors" aria-label="Twitter/X">
                <SiX size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors" aria-label="Instagram">
                <SiInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors" aria-label="YouTube">
                <SiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white font-bold text-[16px] mb-6">الشركة</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">عن هلا</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors text-[15px]">الخدمات</a></li>
              <li><a href="#for-whom" className="hover:text-accent transition-colors text-[15px]">لمن هلا</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">قصص نجاح</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold text-[16px] mb-6">الموارد</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">المدونة</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">مركز الدعم</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-[15px]">API</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-[16px] mb-6">تواصل معنا</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-[15px]">رقم المبيعات: 920000000</li>
              <li className="text-[15px]">واتساب: +966500000000</li>
              <li className="text-[15px]">البريد الإلكتروني: hello@hala.sa</li>
              <li className="text-[15px] mt-2 text-white/60">الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[14px]">
            © 2026 هلا كوميرس. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-6 text-[14px]">
            <a href="#" className="hover:text-white transition-colors">شروط الخدمة</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
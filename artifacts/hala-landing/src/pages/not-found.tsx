import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "الصفحة غير موجودة — 404",
    description: "الصفحة التي تبحث عنها غير موجودة. ارجع للصفحة الرئيسية لهلا كوميرس.",
    noindex: true,
  });

  return (
    <div
      dir="rtl"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F8F6FC] text-center px-6 font-cairo"
    >
      <div className="mb-6 flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <span className="text-5xl font-extrabold text-[#2D2669] tracking-tight leading-none">هلا</span>
          <span className="w-3 h-3 rounded-full bg-[#E85D1F] mt-3"></span>
        </div>
        <span className="text-sm font-bold text-[#E85D1F] tracking-wider">كوميرس</span>
      </div>

      <div className="text-8xl font-extrabold text-[#2D2669]/15 mb-2 leading-none select-none">404</div>

      <h1 className="text-2xl md:text-3xl font-extrabold text-[#2D2669] mb-3">
        هذه الصفحة غير موجودة
      </h1>
      <p className="text-[15px] text-gray-500 max-w-md leading-relaxed mb-8">
        يبدو أن الصفحة التي تبحث عنها لا وجود لها أو ربما تم نقلها. لا تقلق، يمكنك العودة للصفحة الرئيسية.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/">
          <Button className="bg-[#2D2669] text-white hover:bg-[#2D2669]/90 rounded-[10px] px-8 h-12">
            العودة للرئيسية
          </Button>
        </Link>
        <Link href="/blog">
          <Button variant="outline" className="border-[#2D2669] text-[#2D2669] hover:bg-[#2D2669]/5 rounded-[10px] px-8 h-12">
            تصفح المدونة
          </Button>
        </Link>
      </div>
    </div>
  );
}

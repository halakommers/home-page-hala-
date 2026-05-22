import { Banknote, Boxes, PackageCheck, ShoppingBag, Truck, Warehouse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BackdropVariant = "light" | "warm" | "deep";

const icons: Array<{ Icon: LucideIcon; className: string; label: string }> = [
  { Icon: ShoppingBag, className: "right-[6%] top-[12%] rotate-[-10deg]", label: "متجر إلكتروني" },
  { Icon: Truck, className: "left-[7%] top-[18%] rotate-[9deg]", label: "شحن وتوصيل" },
  { Icon: Warehouse, className: "right-[13%] bottom-[13%] rotate-[8deg]", label: "مستودعات" },
  { Icon: PackageCheck, className: "left-[14%] bottom-[16%] rotate-[-8deg]", label: "تجهيز الطلبات" },
  { Icon: Boxes, className: "right-[45%] top-[8%] rotate-[5deg]", label: "إدارة المخزون" },
  { Icon: Banknote, className: "left-[42%] bottom-[8%] rotate-[-6deg]", label: "تحصيل نقدي" },
];

export default function CommerceBackdrop({ variant = "light" }: { variant?: BackdropVariant }) {
  const visibleIcons = icons.slice(0, 4);

  return (
    <div className={`commerce-backdrop commerce-backdrop-${variant}`} aria-hidden="true">
      <div className="commerce-grid" />
      <div className="commerce-route commerce-route-a" />
      <div className="commerce-route commerce-route-b" />
      {visibleIcons.map(({ Icon, className, label }, index) => (
        <div
          key={label}
          className={`commerce-icon-3d flex ${className}`}
        >
          <Icon size={22} strokeWidth={2.2} />
        </div>
      ))}
    </div>
  );
}

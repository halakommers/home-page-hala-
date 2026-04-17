import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  const baseColor = light ? "text-white/70" : "text-muted-foreground";
  const activeColor = light ? "text-white font-semibold" : "text-primary font-semibold";
  const hoverColor = light ? "hover:text-white" : "hover:text-accent";
  const dividerColor = light ? "text-white/30" : "text-muted-foreground/40";

  return (
    <nav aria-label="breadcrumb" className={`flex items-center gap-1 text-[13px] ${baseColor} flex-wrap`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronLeft size={14} className={`${dividerColor} shrink-0`} />}
          {item.href && i < items.length - 1 ? (
            <Link href={item.href} className={`${hoverColor} transition-colors font-medium`}>
              {item.label}
            </Link>
          ) : (
            <span className={i === items.length - 1 ? activeColor : ""}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}


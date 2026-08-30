import { ODD_LIST } from "@/lib/data";
import { cn } from "@/lib/utils";

interface OddBadgeProps {
  number: number;
  size?: "sm" | "md" | "lg";
  showTitle?: boolean;
  className?: string;
}

export function OddBadge({ number, size = "md", showTitle = false, className }: OddBadgeProps) {
  const odd = ODD_LIST.find((o) => o.number === number);
  if (!odd) return null;

  const sizes = {
    sm: "h-8 w-8 text-[10px]",
    md: "h-12 w-12 text-sm",
    lg: "h-20 w-20 text-2xl",
  };

  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)} title={`ODD ${odd.number} — ${odd.title}`}>
      <div
        className={cn(
          "flex items-center justify-center rounded-xl font-heading font-extrabold text-white shadow-soft transition-transform hover:scale-110",
          sizes[size]
        )}
        style={{ backgroundColor: odd.color }}
      >
        {odd.number}
      </div>
      {showTitle && <span className="max-w-[90px] text-center text-[11px] font-body leading-tight text-emd-gris-texte">{odd.title}</span>}
    </div>
  );
}

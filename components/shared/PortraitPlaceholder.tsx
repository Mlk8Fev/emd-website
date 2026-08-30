import { cn } from "@/lib/utils";

interface PortraitPlaceholderProps {
  className?: string;
  size?: number;
}

export function PortraitPlaceholder({ className, size = 220 }: PortraitPlaceholderProps) {
  return (
    <div
      className={cn("portrait-frame overflow-hidden rounded-full bg-gradient-to-b from-emd-vert-clair/20 to-emd-vert-fonce/10", className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label="Photo officielle à venir">
        <rect width="200" height="200" fill="#EFEAE0" />
        <circle cx="100" cy="78" r="38" fill="#C9BBA4" />
        <path d="M30 200 C30 140 60 118 100 118 C140 118 170 140 170 200 Z" fill="#C9BBA4" />
      </svg>
    </div>
  );
}

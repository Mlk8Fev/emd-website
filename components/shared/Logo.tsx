import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  monochrome?: "light" | "dark";
}

export function Logo({ className, variant = "full", monochrome }: LogoProps) {
  const green = monochrome === "light" ? "#FFFFFF" : "#1A6B3A";
  const gold = monochrome === "light" ? "#F4C842" : "#D4A017";
  const textColor = monochrome === "light" ? "#FFFFFF" : monochrome === "dark" ? "#1A6B3A" : "#1A6B3A";

  return (
    <svg
      viewBox="0 0 220 220"
      className={cn("h-14 w-14", className)}
      role="img"
      aria-label="Logo Ensemble pour un Monde Durable"
    >
      <defs>
        <path id="emd-arc-top" d="M 20 95 A 90 90 0 0 1 200 95" fill="none" />
      </defs>

      {variant === "full" && (
        <text fill={textColor} fontSize="10.5" fontWeight="700" letterSpacing="1.2" fontFamily="Montserrat, sans-serif">
          <textPath href="#emd-arc-top" startOffset="50%" textAnchor="middle">
            ENSEMBLE POUR UN MONDE DURABLE
          </textPath>
        </text>
      )}

      {/* Globe */}
      <circle cx="110" cy="118" r="52" fill="none" stroke={green} strokeWidth="3.5" />
      <ellipse cx="110" cy="118" rx="24" ry="52" fill="none" stroke={green} strokeWidth="2" />
      <ellipse cx="110" cy="118" rx="52" ry="20" fill="none" stroke={green} strokeWidth="2" />
      <line x1="58" y1="118" x2="162" y2="118" stroke={green} strokeWidth="2" />
      <path d="M 110 66 Q 145 92 145 118 Q 145 144 110 170" fill="none" stroke={green} strokeWidth="1.4" opacity="0.6" />
      <path d="M 110 66 Q 75 92 75 118 Q 75 144 110 170" fill="none" stroke={green} strokeWidth="1.4" opacity="0.6" />

      {/* Hands - interlaced solidarity symbol beneath the globe */}
      <g fill={gold}>
        <path d="M 78 158 Q 90 142 110 150 Q 130 142 142 158 Q 132 176 110 172 Q 88 176 78 158 Z" />
        <circle cx="93" cy="156" r="3.2" fill={green} opacity="0.7" />
        <circle cx="127" cy="156" r="3.2" fill={green} opacity="0.7" />
      </g>

      {variant === "full" && (
        <text
          x="110"
          y="200"
          textAnchor="middle"
          fill={gold}
          fontSize="9"
          fontWeight="600"
          letterSpacing="2.5"
          fontFamily="Montserrat, sans-serif"
        >
          ONG · CÔTE D&apos;IVOIRE
        </text>
      )}
    </svg>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Conservés pour compatibilité : le logo officiel est un badge circulaire unique. */
  variant?: "full" | "mark";
  monochrome?: "light" | "dark";
  priority?: boolean;
}

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-emd.png"
      alt="Logo Ensemble pour un Monde Durable — Agir ensemble aujourd'hui pour un avenir durable demain"
      width={640}
      height={640}
      priority={priority}
      className={cn("h-14 w-14 shrink-0 rounded-full object-contain", className)}
    />
  );
}

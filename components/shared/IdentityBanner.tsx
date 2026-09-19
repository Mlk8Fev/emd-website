import Image from "next/image";
import { cn } from "@/lib/utils";

export function IdentityBanner({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/images/banniere-emd.webp"
      alt="Bannière de l'ONG Ensemble pour un Monde Durable — Agir ensemble aujourd'hui pour un avenir durable demain. Cohésion sociale, développement durable, protection de l'environnement, innovation et solidarité."
      width={1600}
      height={667}
      priority={priority}
      sizes="(min-width: 1280px) 1240px, 100vw"
      className={cn("h-auto w-full rounded-card shadow-soft-lg", className)}
    />
  );
}

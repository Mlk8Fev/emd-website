import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { StatCounter } from "@/components/shared/StatCounter";

export function StatsSection() {
  return (
    <section className="bg-emd-creme py-20">
      <div className="container">
        <AnimatedSection className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <StatCounter end={17} label="ODD Soutenus" />
          <StatCounter end={2026} label="Année de Création" suffix="" />
          <StatCounter end={7} suffix="+" label="Membres Fondateurs" />
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-[60px] items-center justify-center rounded-full bg-emd-vert-fonce/10 px-4">
              <MapPin className="h-7 w-7 text-emd-vert-fonce" />
            </div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wide text-emd-gris-texte">
              San Pedro — Siège de l&apos;ONG
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

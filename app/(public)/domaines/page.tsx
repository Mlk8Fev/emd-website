import { Metadata } from "next";
import { PbeSection } from "@/components/domaines/PbeSection";
import { DomainesGrid } from "@/components/domaines/DomainesGrid";

export const metadata: Metadata = {
  title: "Nos Domaines d'Intervention",
  description:
    "Les 9 domaines d'intervention d'Ensemble pour un Monde Durable, alignés sur les Objectifs de Développement Durable de l'ONU.",
};

export default function DomainesPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-center text-white">
        <div className="container">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
            Notre Champ d&apos;Action
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Nos Domaines d&apos;Intervention</h1>
        </div>
      </div>
      <PbeSection />
      <DomainesGrid />
    </div>
  );
}

import { Metadata } from "next";
import { PcaSection } from "@/components/about/PcaSection";
import { FoundingTextsTabs } from "@/components/about/FoundingTextsTabs";
import { OrgChart } from "@/components/about/OrgChart";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous",
  description:
    "Découvrez l'ONG Ensemble pour un Monde Durable : mot du PCA, vision, missions, objectifs et organigramme de gouvernance.",
};

export default function QuiSommesNousPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-center text-white">
        <div className="container">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
            Découvrir l&apos;ONG
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Qui Sommes-Nous ?</h1>
        </div>
      </div>
      <PcaSection />
      <FoundingTextsTabs />
      <OrgChart />
    </div>
  );
}

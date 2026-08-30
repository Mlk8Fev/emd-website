import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { RealisationsGallery } from "@/components/realisations/RealisationsGallery";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: "La galerie photo des activités et réalisations de l'ONG Ensemble pour un Monde Durable à San Pedro.",
};

export default async function RealisationsPage() {
  const photos = await prisma.photo.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-center text-white">
        <div className="container">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
            En Images
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Nos Réalisations</h1>
        </div>
      </div>
      <div className="container py-16">
        <RealisationsGallery photos={photos} />
      </div>
    </div>
  );
}

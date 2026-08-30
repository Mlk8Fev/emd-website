import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { ActualitesList } from "@/components/actualites/ActualitesList";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Toute l'actualité de l'ONG Ensemble pour un Monde Durable : projets, événements et initiatives à San Pedro.",
};

export default async function ActualitesPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-center text-white">
        <div className="container">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
            Suivez-Nous
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Actualités</h1>
        </div>
      </div>
      <div className="container py-16">
        <ActualitesList articles={articles} />
      </div>
    </div>
  );
}

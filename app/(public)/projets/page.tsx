import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { TombolaFeature } from "@/components/projets/TombolaFeature";
import { OtherProjectsGrid } from "@/components/projets/OtherProjectsGrid";
import { TOMBOLA_PROJECT } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nos Projets",
  description:
    "Découvrez les projets d'Ensemble pour un Monde Durable, dont la Tombola Solidaire, notre premier grand projet au service des ODD.",
};

export default async function ProjetsPage() {
  const allProjects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  const otherProjects = allProjects.filter((p) => p.title !== TOMBOLA_PROJECT.title);

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-center text-white">
        <div className="container">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
            Sur Le Terrain
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Nos Projets</h1>
        </div>
      </div>
      <TombolaFeature />
      <OtherProjectsGrid projects={otherProjects} />
    </div>
  );
}

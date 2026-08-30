import { FolderKanban } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@prisma/client";

export function OtherProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-emd-creme py-24">
      <div className="container">
        <SectionTitle eyebrow="Nos Initiatives" title="Autres Chantiers en Préparation" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            let odds: number[] = [];
            try {
              odds = JSON.parse(project.odds);
            } catch {}
            return (
              <AnimatedSection key={project.id} delay={(i % 3) * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-emd-vert-fonce/10">
                      <FolderKanban className="h-6 w-6 text-emd-vert-fonce" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant={project.status === "Terminé" ? "outline" : "success"}>{project.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-emd-gris-texte">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {odds.map((n) => (
                        <Badge key={n} variant="soft">
                          ODD {n}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

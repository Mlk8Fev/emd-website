"use client";

import { Eye, Target, Milestone, Table2, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { MISSIONS, CADRE_LOGIQUE, OBJECTIFS_TIMELINE } from "@/lib/data";

export function FoundingTextsTabs() {
  return (
    <section id="presentation" className="scroll-mt-28 bg-emd-creme py-24">
      <div className="container">
        <SectionTitle eyebrow="Nos Fondements" title="Textes Fondamentaux" />

        <Tabs defaultValue="vision" className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="vision">Notre Vision</TabsTrigger>
            <TabsTrigger value="missions">Nos Missions</TabsTrigger>
            <TabsTrigger value="objectifs">Nos Objectifs</TabsTrigger>
            <TabsTrigger value="cadre">Cadre Logique</TabsTrigger>
          </TabsList>

          <TabsContent value="vision" className="w-full max-w-3xl">
            <AnimatedSection className="rounded-card bg-white p-8 shadow-soft sm:p-12">
              <Eye className="mb-4 h-10 w-10 text-emd-vert-fonce" />
              <h3 className="mb-4 font-heading text-2xl font-bold text-emd-vert-fonce">Notre Vision</h3>
              <p className="text-lg leading-relaxed text-emd-gris-texte">
                Être une référence dans la promotion du développement local durable en Côte
                d&apos;Ivoire, reconnue pour son efficacité, sa transparence et son impact mesurable
                sur les communautés les plus vulnérables, en particulier les populations rurales de
                San Pedro.
              </p>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="missions" className="w-full max-w-3xl">
            <AnimatedSection className="rounded-card bg-white p-8 shadow-soft sm:p-12">
              <Target className="mb-4 h-10 w-10 text-emd-vert-fonce" />
              <h3 className="mb-6 font-heading text-2xl font-bold text-emd-vert-fonce">Nos Missions</h3>
              <ul className="flex flex-col gap-3">
                {MISSIONS.map((mission, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emd-or" />
                    <span className="text-emd-gris-texte">{mission}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="objectifs" className="w-full max-w-3xl">
            <AnimatedSection className="rounded-card bg-white p-8 shadow-soft sm:p-12">
              <Milestone className="mb-4 h-10 w-10 text-emd-vert-fonce" />
              <h3 className="mb-2 font-heading text-2xl font-bold text-emd-vert-fonce">Nos Objectifs</h3>
              <p className="mb-8 text-emd-gris-texte">
                Nos objectifs s&apos;articulent en une trajectoire progressive, alignée sur les
                Objectifs de Développement Durable des Nations Unies.
              </p>
              <div className="relative flex flex-col gap-8 border-l-2 border-emd-vert-clair/40 pl-6">
                {OBJECTIFS_TIMELINE.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emd-or ring-4 ring-white" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wide text-emd-or">
                      {item.year}
                    </span>
                    <h4 className="mt-1 font-heading text-lg font-bold text-emd-vert-fonce">{item.title}</h4>
                    <p className="mt-1 text-sm text-emd-gris-texte">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="cadre" className="w-full max-w-5xl">
            <AnimatedSection className="rounded-card bg-white p-6 shadow-soft sm:p-10">
              <Table2 className="mb-4 h-10 w-10 text-emd-vert-fonce" />
              <h3 className="mb-6 font-heading text-2xl font-bold text-emd-vert-fonce">
                Cadre Logique d&apos;Intervention
              </h3>
              <div className="scrollbar-thin overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-emd-vert-fonce text-white">
                      {["Niveau", "Description", "Indicateurs", "Sources de vérification", "Hypothèses"].map((h) => (
                        <th key={h} className="px-4 py-3 font-heading font-semibold first:rounded-l-lg last:rounded-r-lg">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CADRE_LOGIQUE.map((row, i) => (
                      <tr key={row.niveau} className={i % 2 === 0 ? "bg-emd-gris-leger/60" : "bg-white"}>
                        <td className="px-4 py-3 font-heading font-bold text-emd-vert-fonce">{row.niveau}</td>
                        <td className="px-4 py-3 text-emd-gris-texte">{row.description}</td>
                        <td className="px-4 py-3 text-emd-gris-texte">{row.indicateurs}</td>
                        <td className="px-4 py-3 text-emd-gris-texte">{row.sources}</td>
                        <td className="px-4 py-3 text-emd-gris-texte">{row.hypotheses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

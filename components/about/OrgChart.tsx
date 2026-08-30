"use client";

import { useState } from "react";
import { Users, User } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ORG_CHART, OrgPerson } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PersonCardProps {
  name: string;
  role: string;
  tone: "dark" | "medium" | "light";
  onClick: () => void;
}

function PersonCard({ name, role, tone, onClick }: PersonCardProps) {
  const tones = {
    dark: "bg-emd-vert-fonce text-white",
    medium: "bg-emd-vert-moyen text-white",
    light: "bg-emd-vert-clair/15 text-emd-vert-fonce border border-emd-vert-clair/40",
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex min-w-[150px] flex-col items-center gap-1 rounded-2xl px-4 py-3 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg",
        tones[tone]
      )}
    >
      <User className="h-5 w-5 opacity-80" />
      <span className="font-heading text-sm font-bold leading-tight">{name}</span>
      <span className="text-[11px] opacity-90">{role}</span>
    </button>
  );
}

const Connector = () => <div className="mx-auto h-8 w-0.5 bg-emd-vert-clair/50" />;

export function OrgChart() {
  const [selected, setSelected] = useState<OrgPerson | null>(null);

  return (
    <section id="organigramme" className="scroll-mt-28 bg-white py-24">
      <div className="container">
        <SectionTitle eyebrow="Notre Structure" title="Organigramme" subtitle="La gouvernance d'Ensemble pour un Monde Durable, structurée en trois niveaux complémentaires." />

        <AnimatedSection>
          <div className="scrollbar-thin overflow-x-auto pb-6">
            <div className="mx-auto flex min-w-[900px] flex-col items-center">
              {/* Niveau 0 */}
              <div
                className="flex items-center gap-2 rounded-full bg-emd-terre px-6 py-3 text-white shadow-soft cursor-default"
              >
                <Users className="h-5 w-5" />
                <span className="font-heading font-bold">{ORG_CHART.assembleeGenerale}</span>
              </div>
              <Connector />

              {/* Niveau 1 - CA */}
              <div className="flex flex-col items-center gap-4 rounded-card border-2 border-dashed border-emd-vert-fonce/20 p-6">
                <span className="font-heading text-xs font-bold uppercase tracking-wide text-emd-vert-fonce">
                  Conseil d&apos;Administration
                </span>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <PersonCard
                    name={ORG_CHART.conseilAdministration.president}
                    role="Président du CA"
                    tone="dark"
                    onClick={() => setSelected({ name: ORG_CHART.conseilAdministration.president, role: "Président du Conseil d'Administration" })}
                  />
                  {ORG_CHART.conseilAdministration.members.map((m) => (
                    <PersonCard
                      key={m}
                      name={m}
                      role="Membre du CA"
                      tone="dark"
                      onClick={() => setSelected({ name: m, role: "Membre du Conseil d'Administration" })}
                    />
                  ))}
                </div>
              </div>
              <Connector />

              {/* Niveau 2 - Bureau Exécutif */}
              <div className="flex flex-col items-center gap-4 rounded-card border-2 border-dashed border-emd-vert-moyen/30 p-6">
                <span className="font-heading text-xs font-bold uppercase tracking-wide text-emd-vert-moyen">
                  Bureau Exécutif
                </span>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {ORG_CHART.bureauExecutif.map((p) => (
                    <PersonCard key={p.role} name={p.name} role={p.role} tone="medium" onClick={() => setSelected(p)} />
                  ))}
                </div>
              </div>
              <Connector />

              {/* Niveau 3 - Organes de contrôle */}
              <div className="grid w-full gap-6 sm:grid-cols-2">
                <div className="flex flex-col items-center gap-4 rounded-card border-2 border-dashed border-emd-vert-clair/40 p-6">
                  <span className="font-heading text-xs font-bold uppercase tracking-wide text-emd-vert-clair">
                    Commissariat aux Comptes
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {ORG_CHART.commissariatComptes.map((p) => (
                      <PersonCard key={p.name} name={p.name} role={p.role} tone="light" onClick={() => setSelected(p)} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-card border-2 border-dashed border-emd-vert-clair/40 p-6">
                  <span className="font-heading text-xs font-bold uppercase tracking-wide text-emd-vert-clair">
                    Comité Éthique et Gouvernance
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {ORG_CHART.comiteEthique.map((p) => (
                      <PersonCard key={p.name} name={p.name} role={p.role} tone="light" onClick={() => setSelected(p)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selected?.name}</DialogTitle>
              <DialogDescription>{selected?.role}</DialogDescription>
            </DialogHeader>
            <p className="text-sm text-emd-gris-texte">
              Membre engagé de l&apos;ONG Ensemble pour un Monde Durable, contribuant activement à la
              gouvernance et à la réalisation des missions de l&apos;organisation au service des
              communautés de San Pedro.
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

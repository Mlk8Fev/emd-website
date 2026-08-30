import { CalendarCheck, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { OddBadge } from "@/components/shared/OddBadge";
import { Badge } from "@/components/ui/badge";
import { TOMBOLA_PROJECT } from "@/lib/data";

const GALLERY_COLORS = ["#52B788", "#D4A017", "#2E8B57", "#8B4513", "#F4C842", "#1A6B3A"];

export function TombolaFeature() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <AnimatedSection>
          <div className="overflow-hidden rounded-card border border-emd-gris-leger shadow-soft-lg">
            <div className="relative bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen p-8 text-white sm:p-12">
              <div className="kente-pattern absolute inset-0 opacity-20" />
              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Trophy className="h-12 w-12 text-emd-or-clair" />
                  <div>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
                      Projet Phare
                    </span>
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">{TOMBOLA_PROJECT.title}</h2>
                  </div>
                </div>
                <Badge variant="success" className="w-fit animate-blink">
                  ● {TOMBOLA_PROJECT.status.toUpperCase()}
                </Badge>
              </div>
            </div>

            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="mb-3 font-heading text-lg font-bold text-emd-vert-fonce">Description complète</h3>
                <p className="leading-relaxed text-emd-gris-texte">{TOMBOLA_PROJECT.description}</p>

                <h3 className="mb-4 mt-10 font-heading text-lg font-bold text-emd-vert-fonce">Galerie de l&apos;événement</h3>
                <div className="scrollbar-thin flex gap-4 overflow-x-auto pb-3">
                  {GALLERY_COLORS.map((color, i) => (
                    <div
                      key={i}
                      className="flex h-32 w-48 shrink-0 items-center justify-center rounded-xl text-white/70"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}
                    >
                      <Trophy className="h-8 w-8" />
                    </div>
                  ))}
                </div>

                <h3 className="mb-4 mt-10 font-heading text-lg font-bold text-emd-vert-fonce">Chronologie du projet</h3>
                <div className="relative flex flex-col gap-6 border-l-2 border-emd-vert-clair/40 pl-6">
                  {TOMBOLA_PROJECT.timeline.map((step, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emd-or ring-4 ring-white" />
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="h-4 w-4 text-emd-vert-fonce" />
                        <h4 className="font-heading font-bold text-emd-vert-fonce">{step.step}</h4>
                      </div>
                      <p className="mt-1 text-sm text-emd-gris-texte">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-heading text-lg font-bold text-emd-vert-fonce">ODD mobilisés</h3>
                <div className="grid grid-cols-4 gap-3">
                  {TOMBOLA_PROJECT.odds.map((n) => (
                    <OddBadge key={n} number={n} size="sm" />
                  ))}
                </div>

                <h3 className="mb-3 mt-10 font-heading text-lg font-bold text-emd-vert-fonce">Impact attendu</h3>
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl bg-emd-gris-leger p-4">
                    <span className="block font-display text-2xl font-bold text-emd-vert-fonce">À venir</span>
                    <span className="text-xs text-emd-gris-texte">Bénéficiaires directs</span>
                  </div>
                  <div className="rounded-xl bg-emd-gris-leger p-4">
                    <span className="block font-display text-2xl font-bold text-emd-vert-fonce">À venir</span>
                    <span className="text-xs text-emd-gris-texte">Fonds collectés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

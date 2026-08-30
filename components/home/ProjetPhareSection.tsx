import Link from "next/link";
import { Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TOMBOLA_PROJECT } from "@/lib/data";

export function ProjetPhareSection() {
  return (
    <section className="bg-emd-gris-leger py-24">
      <div className="container">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen p-8 shadow-soft-lg sm:p-12">
            <div className="kente-pattern absolute inset-0 opacity-20" />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-emd-or/20">
                <Trophy className="h-12 w-12 animate-pulse text-emd-or-clair" />
              </div>
              <div>
                <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
                  Notre Premier Grand Projet
                </span>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {TOMBOLA_PROJECT.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm text-white/85 sm:text-base">
                  {TOMBOLA_PROJECT.description}
                </p>
                <Badge variant="success" className="mt-4 animate-blink">
                  ● EN COURS
                </Badge>
              </div>
              <Button variant="gold" size="lg" asChild className="shrink-0">
                <Link href="/actualites">Suivre l&apos;actualité</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <AnimatedSection>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-card border-4 border-emd-vert-clair bg-gradient-to-br from-emd-vert-clair/20 to-emd-or/10 shadow-soft-lg">
            <svg viewBox="0 0 400 300" className="h-full w-full">
              <rect width="400" height="300" fill="#EFEAE0" />
              <circle cx="120" cy="150" r="42" fill="#C9BBA4" />
              <circle cx="200" cy="140" r="46" fill="#B8A88C" />
              <circle cx="280" cy="150" r="42" fill="#C9BBA4" />
              <path d="M40 300 C40 230 80 200 120 200 C160 200 175 230 175 260 L175 300 Z" fill="#C9BBA4" />
              <path d="M130 300 C130 220 165 190 200 190 C235 190 270 220 270 300 Z" fill="#B8A88C" />
              <path d="M225 300 L225 260 C225 230 240 200 280 200 C320 200 360 230 360 300 Z" fill="#C9BBA4" />
            </svg>
            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-heading font-semibold text-emd-vert-fonce shadow-soft">
              Équipe fondatrice — photo à venir
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <span className="mb-3 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or">
            Découvrir l&apos;ONG
          </span>
          <h2 className="font-display text-3xl font-bold text-emd-vert-fonce sm:text-4xl md:text-5xl">
            Qui Sommes-Nous ?
          </h2>
          <div className="divider-gold my-5" />
          <p className="text-base leading-relaxed text-emd-gris-texte sm:text-lg">
            Fondée le 18 mai 2026 à San Pedro, <strong>Ensemble pour un Monde Durable</strong> est
            une organisation non gouvernementale de droit ivoirien née d&apos;une conviction
            partagée par ses membres fondateurs : le développement durable des communautés les plus
            vulnérables n&apos;est pas une option, mais une nécessité impérieuse. Guidée par les 17
            Objectifs de Développement Durable des Nations Unies, notre ONG agit chaque jour pour
            transformer durablement la vie des populations rurales de Côte d&apos;Ivoire.
          </p>
          <Button asChild className="mt-8">
            <Link href="/qui-sommes-nous">
              En savoir plus <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

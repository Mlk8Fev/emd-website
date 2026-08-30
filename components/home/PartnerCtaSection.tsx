import Link from "next/link";
import { Mail } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/data";

export function PartnerCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emd-or via-emd-or-clair to-emd-vert-fonce py-24">
      <div className="kente-pattern absolute inset-0 opacity-10" />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-white drop-shadow-sm sm:text-4xl md:text-5xl">
            Ensemble, Nous Pouvons Changer Le Monde
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/95">
            Rejoignez-nous dans notre mission pour un développement durable et inclusif
          </p>
          <Button variant="white" size="lg" asChild className="mt-8">
            <Link href="/contact">Nous Contacter pour un Partenariat</Link>
          </Button>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="mt-5 flex items-center gap-2 text-white/95 underline-offset-4 hover:underline"
          >
            <Mail className="h-4 w-4" /> {CONTACT_INFO.email}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

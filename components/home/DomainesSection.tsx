import {
  Sprout,
  GraduationCap,
  Leaf,
  HeartPulse,
  Wheat,
  Scale,
  HandHeart,
  Droplets,
  Palette,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DOMAINES } from "@/lib/data";

const ICON_MAP: Record<string, LucideIcon> = {
  Sprout,
  GraduationCap,
  Leaf,
  HeartPulse,
  Wheat,
  Scale,
  HandHeart,
  Droplets,
  Palette,
};

export function DomainesSection() {
  return (
    <section id="missions" className="bg-white py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Notre Champ d'Action"
          title="Nos Domaines d'Intervention"
          subtitle="Neuf domaines complémentaires pour un développement durable et inclusif des communautés de San Pedro."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINES.map((domaine, i) => {
            const Icon = ICON_MAP[domaine.icon] ?? Sprout;
            return (
              <AnimatedSection key={domaine.slug} delay={(i % 3) * 0.1}>
                <Link href={`/domaines#${domaine.slug}`}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-emd-vert-fonce/10">
                        <Icon className="h-7 w-7 text-emd-vert-fonce" />
                      </div>
                      <CardTitle>{domaine.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-emd-gris-texte">{domaine.short}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
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
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OddBadge } from "@/components/shared/OddBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DOMAINES, Domaine } from "@/lib/data";

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

export function DomainesGrid() {
  const [selected, setSelected] = useState<Domaine | null>(null);

  return (
    <section className="bg-emd-creme py-24">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINES.map((domaine, i) => {
            const Icon = ICON_MAP[domaine.icon] ?? Sprout;
            return (
              <AnimatedSection key={domaine.slug} delay={(i % 3) * 0.1} id={domaine.slug}>
                <Card className="flex h-full scroll-mt-28 flex-col">
                  <CardHeader>
                    <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-emd-vert-fonce/10">
                      <Icon className="h-7 w-7 text-emd-vert-fonce" />
                    </div>
                    <CardTitle>{domaine.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-emd-gris-texte">{domaine.short}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {domaine.odds.map((n) => (
                        <Badge key={n} variant="soft">
                          ODD {n}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" onClick={() => setSelected(domaine)}>
                      En savoir plus
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-emd-gris-texte">{selected.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {selected.odds.map((n) => (
                  <OddBadge key={n} number={n} size="sm" />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

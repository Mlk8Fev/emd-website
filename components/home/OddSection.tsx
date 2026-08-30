"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ODD_LIST } from "@/lib/data";

export function OddSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Notre Cadre de Référence"
          title="Les 17 ODD — Notre Boussole d'Action"
          subtitle="Nos actions s'inscrivent directement dans le cadre des 17 Objectifs de Développement Durable des Nations Unies."
        />
        <AnimatedSection>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
            {ODD_LIST.map((odd) => (
              <div key={odd.number} className="relative">
                <button
                  onClick={() => setActive(active === odd.number ? null : odd.number)}
                  className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-2xl p-2 text-center text-white shadow-soft transition-transform hover:scale-105"
                  style={{ backgroundColor: odd.color }}
                >
                  <span className="font-display text-xl font-bold sm:text-2xl">{odd.number}</span>
                </button>
                <AnimatePresence>
                  {active === odd.number && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute left-1/2 top-full z-20 mt-2 w-44 -translate-x-1/2 rounded-xl border border-emd-gris-leger bg-white p-3 text-center shadow-soft-lg"
                    >
                      <p className="text-xs font-heading font-semibold text-emd-vert-fonce">{odd.title}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

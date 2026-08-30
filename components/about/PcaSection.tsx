import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";
import { PCA_MESSAGE } from "@/lib/data";

export function PcaSection() {
  return (
    <section id="pca" className="scroll-mt-28 bg-white py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <AnimatedSection className="flex flex-col items-center">
          <PortraitPlaceholder size={200} />
          <h3 className="mt-5 text-center font-heading text-lg font-bold text-emd-vert-fonce">
            EBAKPOLE ANTOINE
          </h3>
          <p className="text-center text-sm font-body text-emd-gris-texte">
            Président du Conseil d&apos;Administration
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Quote className="mb-4 h-10 w-10 text-emd-or/50" />
          <p className="font-quote text-lg italic leading-relaxed text-emd-gris-texte sm:text-xl">
            {PCA_MESSAGE}
          </p>
          <p className="mt-6 font-heading font-bold text-emd-vert-fonce">— EBAKPOLE ANTOINE, PCA</p>
        </AnimatedSection>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATUTS_CTA, STATUTS_SECTIONS, STATUTS_TAGLINE, type StatutBlock } from "@/lib/statuts";

function Block({ block }: { block: StatutBlock }) {
  switch (block.type) {
    case "p":
      return <p className="leading-relaxed text-emd-gris-texte">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="rounded-r-2xl border-l-4 border-emd-or bg-emd-creme px-5 py-4 font-quote text-lg italic leading-relaxed text-emd-vert-fonce">
          « {block.text} »
        </blockquote>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emd-or" />
              <span className="text-emd-gris-texte">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "defs":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.items.map((def) => (
            <div key={def.term} className="rounded-2xl border border-emd-gris-leger bg-emd-gris-leger/40 p-5">
              <h4 className="mb-2 font-heading text-base font-bold text-emd-vert-fonce">{def.term}</h4>
              <div className="flex flex-col gap-2 text-sm leading-relaxed text-emd-gris-texte">
                {def.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "steps":
      return (
        <ol className="flex flex-wrap items-center gap-2">
          {block.items.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-emd-vert-fonce px-4 py-2 font-heading text-sm font-semibold text-white">
                {step}
              </span>
              {i < block.items.length - 1 && <ArrowRight className="h-4 w-4 text-emd-or" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      );
  }
}

export function StatutsReglement() {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-card bg-white p-8 shadow-soft sm:p-10">
        <Scale className="mb-4 h-10 w-10 text-emd-vert-fonce" />
        <h3 className="font-heading text-2xl font-bold text-emd-vert-fonce">Statuts &amp; Règlement Intérieur</h3>
        <p className="mt-1 font-quote italic text-emd-gris-texte">{STATUTS_TAGLINE}</p>
        <p className="mt-5 text-sm font-heading font-semibold uppercase tracking-wide text-emd-or">Sommaire</p>
        <nav aria-label="Sommaire des statuts" className="mt-3 flex flex-wrap gap-2">
          {STATUTS_SECTIONS.map((section, i) => (
            <a
              key={section.id}
              href={`#statut-${section.id}`}
              className="rounded-full bg-emd-gris-leger px-3.5 py-1.5 text-xs font-heading font-semibold text-emd-gris-texte transition-colors hover:bg-emd-vert-fonce hover:text-white"
            >
              {i + 1}. {section.title.split(" : ")[0]}
            </a>
          ))}
        </nav>
      </div>

      {STATUTS_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={`statut-${section.id}`}
          className="scroll-mt-28 rounded-card bg-white p-6 shadow-soft sm:p-10"
        >
          <div className="mb-6 flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emd-or font-heading text-sm font-extrabold text-emd-vert-fonce">
              {i + 1}
            </span>
            <h3 className="pt-1.5 font-heading text-xl font-bold leading-snug text-emd-vert-fonce">{section.title}</h3>
          </div>
          <div className="flex flex-col gap-5">
            {section.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden rounded-card bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen p-8 text-center text-white shadow-soft-lg sm:p-12">
        <div className="kente-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">{STATUTS_CTA.title}</h3>
          <div className="mx-auto mt-4 flex max-w-2xl flex-col gap-3 text-white/90">
            {STATUTS_CTA.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <p className="mt-5 font-quote text-lg italic text-emd-or-clair">{STATUTS_CTA.closing}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold">
              <Link href="/soutenir">Nous soutenir</Link>
            </Button>
            <Button asChild variant="outline-white">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

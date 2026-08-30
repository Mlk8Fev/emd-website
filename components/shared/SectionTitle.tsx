interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, align = "center", light = false }: SectionTitleProps) {
  return (
    <div className={`mb-14 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <span
          className={`mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-emd-or-clair" : "text-emd-or"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-emd-vert-fonce"
        }`}
      >
        {title}
      </h2>
      <div className="divider-gold my-5" />
      {subtitle && (
        <p className={`max-w-2xl text-base sm:text-lg ${light ? "text-white/85" : "text-emd-gris-texte"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

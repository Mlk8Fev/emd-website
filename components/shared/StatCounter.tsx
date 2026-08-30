"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatCounter({ end, suffix = "", prefix = "", label }: StatCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="font-display text-5xl font-bold text-emd-vert-fonce sm:text-6xl">
        {prefix}
        {inView ? <CountUp end={end} duration={2.2} /> : 0}
        {suffix}
      </span>
      <span className="font-heading text-sm font-semibold uppercase tracking-wide text-emd-gris-texte">
        {label}
      </span>
    </div>
  );
}

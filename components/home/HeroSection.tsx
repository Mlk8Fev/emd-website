"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { ODD_LIST } from "@/lib/data";

const FLOATING_ODDS = ODD_LIST.filter((o) => [1, 3, 4, 6, 8, 13, 15].includes(o.number));

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emd-vert-fonce via-emd-vert-moyen to-[#0F3D22]">
      <div className="kente-pattern absolute inset-0 opacity-30" />

      {/* Floating ODD particles */}
      <div className="pointer-events-none absolute inset-0">
        {FLOATING_ODDS.map((odd, i) => (
          <motion.div
            key={odd.number}
            className="absolute hidden h-14 w-14 items-center justify-center rounded-xl text-sm font-heading font-extrabold text-white shadow-lg sm:flex"
            style={{
              backgroundColor: odd.color,
              left: `${8 + i * 13}%`,
              top: `${15 + (i % 3) * 25}%`,
              opacity: 0.5,
            }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            {odd.number}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Logo variant="full" priority className="h-40 w-40 shadow-2xl ring-4 ring-white/30 sm:h-48 sm:w-48" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          ENSEMBLE POUR UN MONDE DURABLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl font-quote text-lg italic text-white/90 sm:text-xl"
        >
          Agir aujourd&apos;hui pour les générations de demain — San Pedro, Côte d&apos;Ivoire
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="#missions">Découvrir nos missions</a>
          </Button>
          <Button size="lg" variant="outline-white" asChild>
            <Link href="/contact">Nous soutenir</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { DOMAINES } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  {
    label: "Qui Sommes-Nous",
    href: "/qui-sommes-nous",
    dropdown: [
      { label: "Mot du PCA", href: "/qui-sommes-nous#pca" },
      { label: "Présentation", href: "/qui-sommes-nous#presentation" },
      { label: "Organigramme", href: "/qui-sommes-nous#organigramme" },
    ],
  },
  {
    label: "Domaines",
    href: "/domaines",
    dropdown: DOMAINES.map((d) => ({ label: d.title, href: `/domaines#${d.slug}` })),
  },
  { label: "Projets", href: "/projets" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-soft"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo variant="mark" className="h-11 w-11" />
          <span
            className={cn(
              "font-heading text-sm font-extrabold leading-tight sm:text-base",
              transparent ? "text-white" : "text-emd-vert-fonce"
            )}
          >
            ENSEMBLE POUR UN
            <br />
            MONDE DURABLE
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors",
                  transparent ? "text-white hover:bg-white/15" : "text-emd-gris-texte hover:bg-emd-gris-leger hover:text-emd-vert-fonce"
                )}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              <AnimatePresence>
                {link.dropdown && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-1 max-h-[70vh] w-64 overflow-y-auto rounded-2xl border border-emd-gris-leger bg-white p-2 shadow-soft-lg"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-body text-emd-gris-texte transition-colors hover:bg-emd-gris-leger hover:text-emd-vert-fonce"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="gold">
            <Link href="/soutenir">Nous Soutenir</Link>
          </Button>
        </div>

        <button
          className={cn("rounded-full p-2 lg:hidden", transparent ? "text-white" : "text-emd-vert-fonce")}
          onClick={() => setMobileOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-soft-lg"
          >
            <div className="mb-8 flex items-center justify-between">
              <Logo variant="mark" className="h-10 w-10" />
              <button onClick={() => setMobileOpen(false)} aria-label="Fermer le menu">
                <X className="h-6 w-6 text-emd-vert-fonce" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3 font-heading font-semibold text-emd-vert-fonce hover:bg-emd-gris-leger"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 flex flex-col border-l-2 border-emd-gris-leger pl-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-lg px-2 py-2 text-sm font-body text-emd-gris-texte hover:text-emd-vert-fonce"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Button asChild variant="gold" className="mt-6 w-full">
              <Link href="/soutenir">Nous Soutenir</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

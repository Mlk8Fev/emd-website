import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { CONTACT_INFO, ODD_LIST } from "@/lib/data";
import { SOCIALS, SocialIcon } from "@/components/shared/SocialIcons";

const NAV = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos domaines", href: "/domaines" },
  { label: "Nos projets", href: "/projets" },
  { label: "Nos réalisations", href: "/realisations" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F3D22] text-white/90">
      <div className="container grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Logo variant="mark" monochrome="light" className="h-12 w-12" />
            <span className="font-heading text-sm font-extrabold leading-tight text-white">
              ENSEMBLE POUR UN
              <br />
              MONDE DURABLE
            </span>
          </Link>
          <p className="mt-4 font-quote italic text-white/70">Agir pour un Monde Durable</p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-emd-or hover:text-emd-vert-fonce"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide text-emd-or-clair">Navigation</h4>
          <ul className="flex flex-col gap-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-white/80 transition-colors hover:text-emd-or-clair">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide text-emd-or-clair">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emd-or-clair" />
              {CONTACT_INFO.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-emd-or-clair" />
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-emd-or-clair">
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-emd-or-clair" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-emd-or-clair break-all">
                {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide text-emd-or-clair">
            Partenaires &amp; ODD
          </h4>
          <div className="flex flex-wrap gap-2">
            {ODD_LIST.slice(0, 5).map((odd) => (
              <div
                key={odd.number}
                title={odd.title}
                className="flex h-9 w-9 items-center justify-center rounded-md text-xs font-heading font-bold text-white"
                style={{ backgroundColor: odd.color }}
              >
                {odd.number}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/70">Fiers de contribuer aux ODD de l&apos;ONU</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Ensemble pour un Monde Durable — ONG de droit ivoirien. Tous droits réservés.</p>
          <Link href="/admin" className="text-white/50 underline-offset-4 transition-colors hover:text-white/80 hover:underline">
            Administration ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}

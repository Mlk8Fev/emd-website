import { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'ONG Ensemble pour un Monde Durable à San Pedro, Côte d'Ivoire, pour toute demande de partenariat, don ou information.",
};

const INFO_ITEMS = [
  { icon: MapPin, text: CONTACT_INFO.address },
  { icon: Phone, text: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phoneRaw}` },
  { icon: Mail, text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Clock, text: CONTACT_INFO.hours },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-center text-white">
        <div className="container">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emd-or-clair">
            Parlons-en
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Contactez-Nous</h1>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="container grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <AnimatedSection>
            <div className="rounded-card bg-emd-gris-leger p-8 shadow-soft sm:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="mb-6 font-heading text-2xl font-bold text-emd-vert-fonce">Nos Coordonnées</h2>
            <div className="flex flex-col gap-6">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emd-vert-fonce/10">
                    <item.icon className="h-5 w-5 text-emd-vert-fonce" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="pt-2 text-emd-gris-texte hover:text-emd-vert-fonce">
                      {item.text}
                    </a>
                  ) : (
                    <p className="pt-2 text-emd-gris-texte">{item.text}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 aspect-square w-full overflow-hidden rounded-card bg-gradient-to-br from-emd-vert-clair/20 to-emd-or/10">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-emd-vert-fonce/60">
                <MapPin className="h-10 w-10" />
                <span className="text-sm font-heading font-semibold">San Pedro, Côte d&apos;Ivoire</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

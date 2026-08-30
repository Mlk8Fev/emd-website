import { Metadata } from "next";
import { HeartHandshake, Mail, UserPlus, Wallet } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nous Soutenir",
  description:
    "Devenez membre, faites un don ou devenez partenaire d'Ensemble pour un Monde Durable pour amplifier notre impact à San Pedro.",
};

const SUPPORT_MODES = [
  {
    icon: UserPlus,
    title: "Devenir Membre",
    description: "Rejoignez l'ONG en tant que membre actif et participez directement à nos actions de terrain.",
  },
  {
    icon: Wallet,
    title: "Faire un Don",
    description: "Apportez un soutien financier ponctuel ou régulier pour financer nos projets communautaires.",
  },
  {
    icon: HeartHandshake,
    title: "Devenir Partenaire",
    description: "Établissez un partenariat institutionnel ou financier durable avec notre organisation.",
  },
];

export default function SoutenirPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emd-or via-emd-or-clair to-emd-vert-fonce py-16 text-center text-white">
        <div className="container">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Pourquoi Nous Soutenir ?</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/95">
            Votre soutien est essentiel pour amplifier notre impact
          </p>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-3">
            {SUPPORT_MODES.map((mode, i) => (
              <AnimatedSection key={mode.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <CardHeader className="items-center">
                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-emd-or/15">
                      <mode.icon className="h-8 w-8 text-emd-or" />
                    </div>
                    <CardTitle>{mode.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-emd-gris-texte">{mode.description}</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-emd-vert-fonce hover:text-emd-or"
                    >
                      <Mail className="h-4 w-4" /> Écrire à l&apos;ONG
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mx-auto mt-16 max-w-2xl rounded-card bg-emd-creme p-8 text-center sm:p-12">
            <p className="text-emd-gris-texte">
              Pour toute demande de partenariat ou de soutien, veuillez nous écrire à :
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-3 inline-flex items-center gap-2 font-display text-xl font-bold text-emd-vert-fonce hover:text-emd-or sm:text-2xl"
            >
              <Mail className="h-6 w-6" /> {CONTACT_INFO.email}
            </a>
            <p className="mt-2 text-sm text-emd-gris-texte">
              Ou utilisez notre{" "}
              <a href="/contact" className="font-semibold text-emd-vert-fonce underline underline-offset-2">
                formulaire de Contact
              </a>{" "}
              ci-dessous.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-emd-gris-leger py-24">
        <div className="container max-w-2xl">
          <SectionTitle title="Formulaire de Contact" />
          <div className="rounded-card bg-white p-8 shadow-soft sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

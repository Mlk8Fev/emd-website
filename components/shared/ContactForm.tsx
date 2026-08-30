"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { contactSchema } from "@/lib/validation";

const SUBJECTS = ["Partenariat", "Don", "Adhésion", "Information", "Autre"];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject,
      message: String(formData.get("message") || ""),
      consent,
    };

    const result = contactSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Veuillez corriger les erreurs du formulaire.");
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      toast.success("Votre message a bien été envoyé. Merci de nous avoir contactés !");
      form.reset();
      setSubject("");
      setConsent(false);
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input id="name" name="name" placeholder="Votre nom" required />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="vous@exemple.com" required />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" name="phone" placeholder="+225 ..." />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Sujet *</Label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Choisir un sujet" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.subject && <p className="text-xs text-red-600">{errors.subject}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" placeholder="Votre message..." required />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} />
        <Label htmlFor="consent" className="font-body text-sm font-normal leading-snug text-emd-gris-texte">
          J&apos;accepte que mes données soient utilisées pour répondre à ma demande
        </Label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

      <Button type="submit" size="lg" disabled={loading} className="mt-2 self-start">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}

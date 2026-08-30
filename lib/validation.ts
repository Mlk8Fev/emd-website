import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Veuillez indiquer votre nom complet"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Veuillez choisir un sujet"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
  consent: z.boolean().refine((v) => v === true, "Vous devez accepter l'utilisation de vos données"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const articleSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(10),
  category: z.string().min(1),
  coverImage: z.string().optional(),
  published: z.boolean().optional(),
});

export const projectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  status: z.string().min(1),
  odds: z.array(z.number()).default([]),
  coverImage: z.string().optional(),
});

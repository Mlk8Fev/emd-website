import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validation";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  }

  const { name, email, phone, subject, message } = result.data;

  const contact = await prisma.contact.create({
    data: { name, email, phone, subject, message },
  });

  try {
    await sendContactNotification({ name, email, phone, subject, message });
  } catch (err) {
    console.error("[EMD][contact] Échec de l'envoi de l'email:", err);
  }

  return NextResponse.json({ ok: true, id: contact.id });
}

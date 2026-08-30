import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const messages = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(messages);
}

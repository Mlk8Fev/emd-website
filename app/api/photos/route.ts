import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const photos = await prisma.photo.findMany({
    where: category && category !== "Tous" ? { category } : undefined,
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json(photos);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await req.json();
  const { url, title, description, category } = body;

  if (!url) return NextResponse.json({ error: "URL requise" }, { status: 400 });

  const count = await prisma.photo.count();
  const photo = await prisma.photo.create({
    data: {
      url,
      title: title || null,
      description: description || null,
      category: category || "Général",
      order: count,
    },
  });

  return NextResponse.json(photo, { status: 201 });
}

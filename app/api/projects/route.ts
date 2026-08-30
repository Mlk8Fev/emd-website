import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await req.json();
  const { title, description, status, odds, coverImage } = body;

  if (!title || !description) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const project = await prisma.project.create({
    data: {
      title,
      description,
      status: status || "En cours",
      odds: JSON.stringify(odds || []),
      coverImage: coverImage || null,
      photos: "[]",
    },
  });

  return NextResponse.json(project, { status: 201 });
}

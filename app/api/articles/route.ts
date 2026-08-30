import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { slugify } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const publishedOnly = searchParams.get("all") !== "true";

  const articles = await prisma.article.findMany({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(articles);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await req.json();
  const { title, excerpt, content, category, coverImage, published } = body;

  if (!title || !excerpt || !content) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  let slug = slugify(title);
  const existing = await prisma.article.findUnique({ where: { slug } });
  if (existing) slug = `${slug}-${Date.now().toString(36)}`;

  const article = await prisma.article.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      category: category || "Actualite",
      coverImage: coverImage || null,
      published: Boolean(published),
    },
  });

  return NextResponse.json(article, { status: 201 });
}

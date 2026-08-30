import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Newspaper } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await prisma.article.findUnique({ where: { slug: params.slug } });
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await prisma.article.findUnique({ where: { slug: params.slug } });

  if (!article || !article.published) notFound();

  return (
    <article className="pt-20">
      <div className="bg-gradient-to-br from-emd-vert-fonce to-emd-vert-moyen py-16 text-white">
        <div className="container max-w-3xl">
          <Link href="/actualites" className="mb-6 flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Retour aux actualités
          </Link>
          <Badge variant="gold" className="mb-4">
            {article.category}
          </Badge>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{article.title}</h1>
          <p className="mt-4 text-sm text-white/70">{formatDate(article.createdAt)}</p>
        </div>
      </div>

      <div className="container max-w-3xl py-16">
        <div className="mb-10 flex aspect-video items-center justify-center overflow-hidden rounded-card bg-gradient-to-br from-emd-vert-clair/20 to-emd-or/15">
          <Newspaper className="h-14 w-14 text-emd-vert-fonce/40" />
        </div>
        <div
          className="article-content font-body text-lg leading-loose text-emd-gris-texte"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}

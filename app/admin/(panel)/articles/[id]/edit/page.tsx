import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArticleForm } from "@/components/admin/ArticleForm";

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const article = await prisma.article.findUnique({ where: { id: params.id } });
  if (!article) notFound();

  return (
    <div>
      <h1 className="mb-8 font-display text-3xl font-bold text-emd-vert-fonce">Modifier l&apos;Article</h1>
      <ArticleForm article={article} />
    </div>
  );
}

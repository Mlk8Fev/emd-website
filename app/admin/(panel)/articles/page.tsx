import Link from "next/link";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { ArticlesTable } from "@/components/admin/ArticlesTable";

export const dynamic = "force-dynamic";

export default async function AdminArticlesPage() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-emd-vert-fonce">Articles</h1>
          <p className="text-emd-gris-texte">Gérez les actualités du site</p>
        </div>
        <Button asChild>
          <Link href="/admin/articles/new">
            <Plus className="h-4 w-4" /> Nouvel article
          </Link>
        </Button>
      </div>
      <ArticlesTable articles={articles} />
    </div>
  );
}

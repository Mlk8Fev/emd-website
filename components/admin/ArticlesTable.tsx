"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { Article } from "@prisma/client";

export function ArticlesTable({ articles }: { articles: Article[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!confirm("Supprimer définitivement cet article ?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast.success("Article supprimé.");
      router.refresh();
    } catch {
      toast.error("Erreur lors de la suppression.");
    } finally {
      setDeletingId(null);
    }
  }

  if (articles.length === 0) {
    return <p className="rounded-card bg-white p-10 text-center text-emd-gris-texte shadow-soft">Aucun article pour le moment.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-card bg-white shadow-soft">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-emd-gris-leger text-xs uppercase tracking-wide text-gray-400">
            <th className="px-5 py-4">Titre</th>
            <th className="px-5 py-4">Catégorie</th>
            <th className="px-5 py-4">Date</th>
            <th className="px-5 py-4">Statut</th>
            <th className="px-5 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b border-emd-gris-leger last:border-0">
              <td className="max-w-xs truncate px-5 py-4 font-heading font-semibold text-emd-vert-fonce">
                {article.title}
              </td>
              <td className="px-5 py-4">
                <Badge variant="soft">{article.category}</Badge>
              </td>
              <td className="px-5 py-4 text-gray-500">{formatDate(article.createdAt)}</td>
              <td className="px-5 py-4">
                <Badge variant={article.published ? "success" : "warning"}>
                  {article.published ? "Publié" : "Brouillon"}
                </Badge>
              </td>
              <td className="px-5 py-4">
                <div className="flex justify-end gap-2">
                  <Button asChild size="icon" variant="ghost">
                    <Link href={`/admin/articles/${article.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    disabled={deletingId === article.id}
                    onClick={() => handleDelete(article.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

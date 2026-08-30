"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Newspaper, Search } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatDate, cn } from "@/lib/utils";
import type { Article } from "@prisma/client";

const PAGE_SIZE = 6;

export function ActualitesList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))], [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = category === "Tous" || a.category === category;
      const matchesSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Rechercher un article..."
            className="pl-10"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button
              key={c}
              size="sm"
              variant={category === c ? "default" : "outline"}
              onClick={() => {
                setCategory(c);
                setPage(1);
              }}
              className={cn(category !== c && "border-emd-vert-fonce text-emd-vert-fonce")}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>

      {paginated.length === 0 ? (
        <div className="mx-auto flex max-w-lg flex-col items-center rounded-card bg-white p-12 text-center shadow-soft">
          <Newspaper className="mb-4 h-10 w-10 text-emd-vert-clair" />
          <p className="text-emd-gris-texte">Aucun article ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((article, i) => (
            <AnimatedSection key={article.id} delay={(i % 3) * 0.1}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emd-vert-clair/20 to-emd-or/15">
                  <Newspaper className="h-10 w-10 text-emd-vert-fonce/40" />
                </div>
                <CardHeader>
                  <Badge variant="soft" className="mb-2 w-fit">
                    {article.category}
                  </Badge>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="line-clamp-3 text-sm text-emd-gris-texte">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-xs text-gray-400">{formatDate(article.createdAt)}</span>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="flex items-center gap-1 text-sm font-heading font-semibold text-emd-vert-fonce hover:text-emd-or"
                  >
                    Lire la suite <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full font-heading text-sm font-semibold transition-colors",
                page === p ? "bg-emd-vert-fonce text-white" : "bg-emd-gris-leger text-emd-gris-texte hover:bg-emd-vert-clair/20"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

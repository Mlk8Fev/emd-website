import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface ArticlePreview {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: Date;
}

export function ActualitesSection({ articles }: { articles: ArticlePreview[] }) {
  return (
    <section className="bg-emd-creme py-24">
      <div className="container">
        <SectionTitle eyebrow="Suivez-Nous" title="Dernières Actualités" />

        {articles.length === 0 ? (
          <div className="mx-auto flex max-w-lg flex-col items-center rounded-card bg-white p-12 text-center shadow-soft">
            <Newspaper className="mb-4 h-10 w-10 text-emd-vert-clair" />
            <p className="text-emd-gris-texte">
              Nos premières actualités seront bientôt publiées. Restez connectés !
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 0.1}>
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
                      Lire <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/actualites">Toutes les actualités</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

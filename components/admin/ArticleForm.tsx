"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { ImageUpload } from "@/components/admin/ImageUpload";
import type { Article } from "@prisma/client";

const CATEGORIES = ["Actualite", "Projet", "Événement", "Communiqué"];

export function ArticleForm({ article }: { article?: Article }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(article?.title || "");
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(article?.content || "");
  const [category, setCategory] = useState(article?.category || "Actualite");
  const [coverImage, setCoverImage] = useState<string | null>(article?.coverImage || null);
  const [published, setPublished] = useState(article?.published ?? false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title || !excerpt || !content) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoading(true);
    try {
      const payload = { title, excerpt, content, category, coverImage, published };
      const res = await fetch(article ? `/api/articles/${article.id}` : "/api/articles", {
        method: article ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();

      toast.success(article ? "Article mis à jour." : "Article créé.");
      router.push("/admin/articles");
      router.refresh();
    } catch {
      toast.error("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Titre *</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="excerpt">Résumé (extrait) *</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Contenu *</Label>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label>Catégorie</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Image de couverture</Label>
            <ImageUpload value={coverImage} onChange={setCoverImage} />
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
            <Checkbox id="published" checked={published} onCheckedChange={(v) => setPublished(v === true)} />
            <Label htmlFor="published" className="font-body font-normal">
              Publier immédiatement
            </Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          Annuler
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {article ? "Enregistrer" : "Créer l'article"}
        </Button>
      </div>
    </form>
  );
}

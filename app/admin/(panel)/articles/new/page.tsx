import { ArticleForm } from "@/components/admin/ArticleForm";

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="mb-8 font-display text-3xl font-bold text-emd-vert-fonce">Nouvel Article</h1>
      <ArticleForm />
    </div>
  );
}

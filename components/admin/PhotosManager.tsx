"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Trash2, UploadCloud } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import type { Photo } from "@prisma/client";

const CATEGORIES = ["Général", "Éducation", "Santé", "Environnement", "Sport", "Événements"];

export function PhotosManager({ photos }: { photos: Photo[] }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);

  async function uploadFiles(files: FileList | File[]) {
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
        if (!uploadRes.ok) continue;
        const { url } = await uploadRes.json();

        await fetch("/api/photos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, category: "Général" }),
        });
      }
      toast.success("Photos ajoutées à la galerie.");
      router.refresh();
    } catch {
      toast.error("Erreur lors de l'upload.");
    } finally {
      setUploading(false);
    }
  }

  async function updateCategory(id: string, category: string) {
    await fetch(`/api/photos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category }),
    });
    router.refresh();
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette photo ?")) return;
    await fetch(`/api/photos/${id}`, { method: "DELETE" });
    toast.success("Photo supprimée.");
    router.refresh();
  }

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`mb-10 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-card border-2 border-dashed p-12 text-center transition-colors ${
          dragging ? "border-emd-vert-clair bg-emd-vert-clair/10" : "border-emd-gris-leger bg-white"
        }`}
      >
        {uploading ? (
          <Loader2 className="h-8 w-8 animate-spin text-emd-vert-fonce" />
        ) : (
          <UploadCloud className="h-8 w-8 text-emd-vert-fonce" />
        )}
        <p className="font-heading font-semibold text-emd-vert-fonce">
          {uploading ? "Envoi en cours..." : "Glissez-déposez des images ici, ou cliquez pour parcourir"}
        </p>
        <p className="text-xs text-gray-400">JPEG, PNG, WebP, GIF — 8 Mo max par image</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.length) uploadFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {photos.length === 0 ? (
        <p className="rounded-card bg-white p-10 text-center text-emd-gris-texte shadow-soft">
          Aucune photo dans la galerie pour le moment.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-card bg-white shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.url} alt={photo.title || ""} className="aspect-square w-full object-cover" />
              <div className="flex flex-col gap-2 p-3">
                <Select value={photo.category} onValueChange={(v) => updateCategory(photo.id, v)}>
                  <SelectTrigger className="h-9 text-xs">
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
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-red-50 py-1.5 text-xs font-heading font-semibold text-red-600 hover:bg-red-100"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

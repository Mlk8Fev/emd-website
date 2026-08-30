"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ODD_LIST } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Project } from "@prisma/client";

const STATUSES = ["En cours", "Terminé", "À venir"];

export function ProjectsManager({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedOdds, setSelectedOdds] = useState<number[]>([]);

  function openCreate() {
    setEditing(null);
    setSelectedOdds([]);
    setOpen(true);
  }

  function openEdit(project: Project) {
    setEditing(project);
    try {
      setSelectedOdds(JSON.parse(project.odds));
    } catch {
      setSelectedOdds([]);
    }
    setOpen(true);
  }

  function toggleOdd(n: number) {
    setSelectedOdds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      status: String(formData.get("status")),
      odds: selectedOdds,
    };

    setLoading(true);
    try {
      const res = await fetch(editing ? `/api/projects/${editing.id}` : "/api/projects", {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      toast.success(editing ? "Projet mis à jour." : "Projet créé.");
      setOpen(false);
      router.refresh();
    } catch {
      toast.error("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce projet ?")) return;
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    toast.success("Projet supprimé.");
    router.refresh();
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-emd-vert-fonce">Projets</h1>
          <p className="text-emd-gris-texte">Gérez les projets et domaines d&apos;intervention</p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4" /> Nouveau projet
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          let odds: number[] = [];
          try {
            odds = JSON.parse(project.odds);
          } catch {}
          return (
            <div key={project.id} className="flex flex-col rounded-card bg-white p-5 shadow-soft">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-heading font-bold text-emd-vert-fonce">{project.title}</h3>
                <Badge variant={project.status === "Terminé" ? "outline" : "success"}>{project.status}</Badge>
              </div>
              <p className="mb-3 line-clamp-3 text-sm text-emd-gris-texte">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-1">
                {odds.map((n) => (
                  <Badge key={n} variant="soft">
                    ODD {n}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex justify-end gap-2">
                <Button size="icon" variant="ghost" onClick={() => openEdit(project)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => handleDelete(project.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{editing ? "Modifier le projet" : "Nouveau projet"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Titre *</Label>
              <Input id="title" name="title" defaultValue={editing?.title} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea id="description" name="description" defaultValue={editing?.description} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Statut</Label>
              <Select name="status" defaultValue={editing?.status || "En cours"}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>ODD associés</Label>
              <div className="grid grid-cols-6 gap-2">
                {ODD_LIST.map((odd) => (
                  <button
                    type="button"
                    key={odd.number}
                    onClick={() => toggleOdd(odd.number)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-md text-xs font-heading font-bold text-white transition-transform",
                      selectedOdds.includes(odd.number) ? "scale-110 ring-2 ring-emd-vert-fonce ring-offset-2" : "opacity-50"
                    )}
                    style={{ backgroundColor: odd.color }}
                  >
                    {odd.number}
                  </button>
                ))}
              </div>
            </div>
            <Button type="submit" disabled={loading} className="mt-2">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {editing ? "Enregistrer" : "Créer"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

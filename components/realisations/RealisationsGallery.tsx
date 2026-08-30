"use client";

import { useMemo, useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import type { Photo } from "@prisma/client";

const CATEGORIES = ["Tous", "Éducation", "Santé", "Environnement", "Sport", "Événements"];
const HEIGHT_CYCLE = [600, 800, 500, 700, 900, 550];

export function RealisationsGallery({ photos }: { photos: Photo[] }) {
  const [category, setCategory] = useState("Tous");
  const [selected, setSelected] = useState<Photo | null>(null);

  const filtered = useMemo(
    () => (category === "Tous" ? photos : photos.filter((p) => p.category === category)),
    [photos, category]
  );

  const albumPhotos = filtered.map((p, i) => ({
    key: p.id,
    src: p.url,
    width: 800,
    height: HEIGHT_CYCLE[i % HEIGHT_CYCLE.length],
    alt: p.title || "Réalisation EMD",
  }));

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <Button
            key={c}
            size="sm"
            variant={category === c ? "default" : "outline"}
            onClick={() => setCategory(c)}
            className={cn(category !== c && "border-emd-vert-fonce text-emd-vert-fonce")}
          >
            {c}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <AnimatedSection className="mx-auto flex max-w-lg flex-col items-center rounded-card bg-white p-12 text-center shadow-soft">
          <ImageOff className="mb-4 h-10 w-10 text-emd-vert-clair" />
          <p className="text-emd-gris-texte">
            Nos premières réalisations seront bientôt publiées. Restez connectés !
          </p>
        </AnimatedSection>
      ) : (
        <MasonryPhotoAlbum
          photos={albumPhotos}
          columns={(width) => (width < 640 ? 1 : width < 1024 ? 2 : 3)}
          spacing={16}
          onClick={({ index }) => setSelected(filtered[index])}
        />
      )}

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title || "Réalisation EMD"}</DialogTitle>
                {selected.description && <DialogDescription>{selected.description}</DialogDescription>}
              </DialogHeader>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selected.url} alt={selected.title || "Réalisation EMD"} className="w-full rounded-xl" />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

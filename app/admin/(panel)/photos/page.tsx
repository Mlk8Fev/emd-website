import { prisma } from "@/lib/prisma";
import { PhotosManager } from "@/components/admin/PhotosManager";

export const dynamic = "force-dynamic";

export default async function AdminPhotosPage() {
  const photos = await prisma.photo.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-emd-vert-fonce">Galerie de Réalisations</h1>
      <p className="mb-8 text-emd-gris-texte">Ajoutez et organisez les photos affichées sur le site</p>
      <PhotosManager photos={photos} />
    </div>
  );
}

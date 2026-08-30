import { prisma } from "@/lib/prisma";
import { MessagesManager } from "@/components/admin/MessagesManager";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const messages = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-emd-vert-fonce">Messages Reçus</h1>
      <p className="mb-8 text-emd-gris-texte">Les demandes envoyées via le formulaire de contact</p>
      <MessagesManager messages={messages} />
    </div>
  );
}

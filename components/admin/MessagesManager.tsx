"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Mail, MailOpen, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Contact } from "@prisma/client";

export function MessagesManager({ messages }: { messages: Contact[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Contact | null>(null);

  async function openMessage(message: Contact) {
    setSelected(message);
    if (!message.read) {
      await fetch(`/api/messages/${message.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
      router.refresh();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce message ?")) return;
    await fetch(`/api/messages/${id}`, { method: "DELETE" });
    toast.success("Message supprimé.");
    setSelected(null);
    router.refresh();
  }

  if (messages.length === 0) {
    return <p className="rounded-card bg-white p-10 text-center text-emd-gris-texte shadow-soft">Aucun message reçu pour le moment.</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-3">
        {messages.map((message) => (
          <button
            key={message.id}
            onClick={() => openMessage(message)}
            className={cn(
              "flex items-center gap-4 rounded-card bg-white p-4 text-left shadow-soft transition-shadow hover:shadow-soft-lg",
              !message.read && "border-l-4 border-emd-or"
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emd-vert-fonce/10">
              {message.read ? (
                <MailOpen className="h-5 w-5 text-emd-gris-texte" />
              ) : (
                <Mail className="h-5 w-5 text-emd-or" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className={cn("font-heading font-bold", !message.read ? "text-emd-vert-fonce" : "text-emd-gris-texte")}>
                  {message.name}
                </span>
                <Badge variant="soft">{message.subject}</Badge>
              </div>
              <p className="truncate text-sm text-gray-500">{message.message}</p>
            </div>
            <span className="shrink-0 text-xs text-gray-400">{formatDate(message.createdAt)}</span>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>
                  {selected.email} {selected.phone && `· ${selected.phone}`}
                </DialogDescription>
              </DialogHeader>
              <Badge variant="soft" className="mb-4 w-fit">
                {selected.subject}
              </Badge>
              <p className="whitespace-pre-line text-sm leading-relaxed text-emd-gris-texte">{selected.message}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-gray-400">{formatDate(selected.createdAt)}</span>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${selected.email}`}
                    className="rounded-full bg-emd-vert-fonce px-4 py-2 text-xs font-heading font-semibold text-white hover:bg-emd-vert-moyen"
                  >
                    Répondre par email
                  </a>
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-2 text-xs font-heading font-semibold text-red-600 hover:bg-red-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Supprimer
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

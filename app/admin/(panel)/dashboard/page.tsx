import { Newspaper, Images, Mail, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [articleCount, photoCount, unreadCount, totalMessages, lastArticle] = await Promise.all([
    prisma.article.count({ where: { published: true } }),
    prisma.photo.count(),
    prisma.contact.count({ where: { read: false } }),
    prisma.contact.count(),
    prisma.article.findFirst({ orderBy: { updatedAt: "desc" } }),
  ]);

  const stats = [
    { label: "Articles publiés", value: articleCount, icon: Newspaper, color: "text-emd-vert-fonce" },
    { label: "Photos en galerie", value: photoCount, icon: Images, color: "text-emd-vert-fonce" },
    {
      label: "Messages non lus",
      value: unreadCount,
      icon: Mail,
      color: unreadCount > 0 ? "text-red-600" : "text-emd-vert-fonce",
      sub: `${totalMessages} au total`,
    },
  ];

  return (
    <div>
      <h1 className="mb-1 font-display text-3xl font-bold text-emd-vert-fonce">Tableau de Bord</h1>
      <p className="mb-8 text-emd-gris-texte">Vue d&apos;ensemble du site Ensemble pour un Monde Durable</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emd-vert-fonce/10">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-emd-gris-texte">{stat.label}</p>
                {stat.sub && <p className="text-[11px] text-gray-400">{stat.sub}</p>}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emd-vert-fonce/10">
              <Clock className="h-6 w-6 text-emd-vert-fonce" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-emd-vert-fonce">
                {lastArticle ? formatDate(lastArticle.updatedAt) : "—"}
              </p>
              <p className="text-xs text-emd-gris-texte">Dernière mise à jour</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

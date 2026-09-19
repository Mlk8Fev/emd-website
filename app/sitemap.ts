import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ong-emd.com";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/qui-sommes-nous",
    "/domaines",
    "/projets",
    "/realisations",
    "/actualites",
    "/soutenir",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const articles = await prisma.article.findMany({ where: { published: true } });
  const articleRoutes = articles.map((article) => ({
    url: `${BASE_URL}/actualites/${article.slug}`,
    lastModified: article.updatedAt,
  }));

  return [...staticRoutes, ...articleRoutes];
}

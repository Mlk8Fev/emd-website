import { prisma } from "@/lib/prisma";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { DomainesSection } from "@/components/home/DomainesSection";
import { ProjetPhareSection } from "@/components/home/ProjetPhareSection";
import { OddSection } from "@/components/home/OddSection";
import { PartnerCtaSection } from "@/components/home/PartnerCtaSection";
import { ActualitesSection } from "@/components/home/ActualitesSection";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DomainesSection />
      <ProjetPhareSection />
      <OddSection />
      <PartnerCtaSection />
      <ActualitesSection articles={articles} />
    </>
  );
}

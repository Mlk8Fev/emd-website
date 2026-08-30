import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("FamSonG1@-", 10);

  await prisma.user.upsert({
    where: { username: "Admin01" },
    update: { password: passwordHash },
    create: { username: "Admin01", password: passwordHash },
  });
  console.log("✔ Utilisateur admin créé (Admin01)");

  await prisma.article.upsert({
    where: { slug: "tombola-solidaire-emd-succes-odd" },
    update: {},
    create: {
      title: "La Tombola Solidaire de l'ONG EMD : Un Succès pour les ODD",
      slug: "tombola-solidaire-emd-succes-odd",
      excerpt:
        "L'ONG Ensemble pour un Monde Durable poursuit avec succès son premier grand projet : l'organisation d'une tombola solidaire dans le cadre d'une activité sportive communautaire à San Pedro.",
      content: `<p>L'ONG Ensemble pour un Monde Durable poursuit avec succès son premier grand projet : l'organisation d'une tombola solidaire dans le cadre d'une activité sportive communautaire à San Pedro. Cette initiative innovante permet de mobiliser la communauté locale tout en finançant des actions directement liées aux Objectifs de Développement Durable.</p><p>Les fonds collectés sont destinés à des programmes d'aide aux populations vulnérables de la région. L'organisation remercie chaleureusement tous les participants et partenaires qui ont rendu possible cette belle aventure solidaire.</p><p>Restez connectés pour découvrir les résultats complets de cette campagne.</p>`,
      category: "Projet",
      published: true,
    },
  });
  console.log("✔ Article de la tombola créé");

  const domaineProjects = [
    { title: "Développement Économique Rural", description: "Favoriser l'essor économique des populations rurales de San Pedro.", odds: JSON.stringify([1, 8, 10]) },
    { title: "Éducation & Formation", description: "Promouvoir l'éducation, la formation et l'autonomisation des jeunes et des femmes.", odds: JSON.stringify([4, 5, 10]) },
    { title: "Environnement & Climat", description: "Protéger l'environnement et lutter contre les changements climatiques.", odds: JSON.stringify([13, 15]) },
    { title: "Santé Communautaire", description: "Promouvoir la santé communautaire pour les populations vulnérables.", odds: JSON.stringify([3]) },
    { title: "Agriculture Durable", description: "Développer des projets agricoles durables et responsables.", odds: JSON.stringify([2, 12, 15]) },
    { title: "Droits Humains & Inclusion", description: "Promouvoir les droits humains, l'égalité des chances et l'inclusion sociale.", odds: JSON.stringify([5, 10, 16]) },
    { title: "Cohésion Sociale & Paix", description: "Soutenir les initiatives de paix, de cohésion sociale et de gouvernance locale.", odds: JSON.stringify([16, 17]) },
    { title: "Accès à l'Eau Potable", description: "Promouvoir la santé communautaire et l'accès à l'eau potable.", odds: JSON.stringify([6]) },
    { title: "Art & Culture", description: "Valoriser le patrimoine culturel et artistique local.", odds: JSON.stringify([11, 17]) },
  ];

  for (const domaine of domaineProjects) {
    const existing = await prisma.project.findFirst({ where: { title: domaine.title } });
    if (!existing) {
      await prisma.project.create({
        data: {
          title: domaine.title,
          description: domaine.description,
          status: "En cours",
          odds: domaine.odds,
          photos: "[]",
        },
      });
    }
  }
  console.log("✔ 9 domaines d'intervention créés comme projets");

  const tombolaExisting = await prisma.project.findFirst({
    where: { title: "Tombola Solidaire — Sport & Développement Durable" },
  });
  if (!tombolaExisting) {
    await prisma.project.create({
      data: {
        title: "Tombola Solidaire — Sport & Développement Durable",
        description:
          "Dans le cadre de sa première grande initiative, l'ONG Ensemble pour un Monde Durable a participé à une activité sportive communautaire à San Pedro. À l'occasion de cet événement, l'ONG a organisé une tombola solidaire dont les bénéfices ont été entièrement reversés à des actions alignées sur les Objectifs de Développement Durable.",
        status: "En cours",
        odds: JSON.stringify([1, 2, 3, 4, 8, 10, 11, 17]),
        photos: "[]",
      },
    });
  }
  console.log("✔ Projet phare Tombola Solidaire créé");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

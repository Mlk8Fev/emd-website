// Met à jour les textes déjà en base après les retours client de septembre 2026
// (lieu de la tombola : Gabaguhé / Zakéoua ; suppression de "de San Pedro" sur la carte
// "Développement Économique Rural"). Idempotent : peut être relancé sans risque.
// Usage : DATABASE_URL="mysql://..." node prisma/scripts/update-content-retours.js
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
const OLD = "dans le cadre d'une activité sportive communautaire à San Pedro.";
const NEW = "dans le cadre d'une activité sportive communautaire villageoise de Gabaguhé et de Zakéoua, dans la Sous-Préfecture de Grand-Zattry (région de la Nawa).";
(async () => {
  const a = await p.article.findUnique({ where: { slug: 'tombola-solidaire-emd-succes-odd' } });
  if (a) {
    await p.article.update({ where: { id: a.id }, data: {
      excerpt: a.excerpt.replace(OLD, NEW),
      content: a.content.replace(OLD, NEW),
    }});
    console.log('article mis à jour');
  } else console.log('article introuvable');
  const r1 = await p.project.updateMany({
    where: { title: 'Développement Économique Rural' },
    data: { description: "Favoriser l'essor économique des populations rurales." },
  });
  const t = await p.project.findFirst({ where: { title: 'Tombola Solidaire — Sport & Développement Durable' } });
  let r2 = 0;
  if (t) {
    await p.project.update({ where: { id: t.id }, data: { description: t.description.replace(
      "a participé à une activité sportive communautaire à San Pedro. À l'occasion",
      "a participé à une activité sportive communautaire villageoise de Gabaguhé et de Zakéoua dans la Sous-Préfecture de Grand-Zattry, région de la Nawa. À l'occasion") }});
    r2 = 1;
  }
  console.log('projets domaine:', r1.count, '| projet tombola:', r2);
  const check = await p.article.findUnique({ where: { slug: 'tombola-solidaire-emd-succes-odd' } });
  console.log('San Pedro dans article ?', /San Pedro/.test(check.content + check.excerpt));
  await p.$disconnect();
})().catch(e => { console.error('ERREUR:', e.message.split('\n').slice(-4).join(' ')); process.exit(1); });

# Ensemble pour un Monde Durable — Site Web

Site web officiel de l'ONG **Ensemble pour un Monde Durable (EMD)**, basée à San Pedro, Côte d'Ivoire.

## Stack technique

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Framer Motion** pour les animations
- **Prisma** + **MySQL** pour la base de données
- **NextAuth.js v5** pour l'authentification de l'administration
- **Sharp** pour l'optimisation automatique des images
- **Nodemailer** pour le formulaire de contact
- **Tiptap** pour l'éditeur d'articles

## Base de données MySQL

Ce projet nécessite un serveur MySQL accessible (local ou distant).

### En local (macOS, via Homebrew)

```bash
brew install mysql
brew services start mysql

mysql -u root -e "
  CREATE DATABASE emd_website CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  CREATE USER 'emd_user'@'localhost' IDENTIFIED BY 'votre_mot_de_passe';
  GRANT ALL PRIVILEGES ON emd_website.* TO 'emd_user'@'localhost';
  FLUSH PRIVILEGES;
"
```

Puis renseignez dans `.env` **et** `.env.local` :

```env
DATABASE_URL="mysql://emd_user:votre_mot_de_passe@localhost:3306/emd_website"
```

### Sur Hostinger (production)

1. Dans hPanel → **Bases de données** → **Bases de données MySQL**, créez une base et un utilisateur
2. Hostinger vous donne une chaîne au format `mysql://utilisateur:motdepasse@hôte:3306/nom_base` (ou fournit séparément hôte/utilisateur/mot de passe/nom — à assembler vous-même dans ce format)
3. Renseignez cette valeur dans les variables d'environnement de votre app Node.js (section *Environment Variables* du tableau de bord Node.js Web App)

## Démarrage rapide

```bash
./setup.sh
```

Ou manuellement :

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Le site est ensuite accessible sur **http://localhost:3000**.

## Accès à l'administration

Rendez-vous sur **http://localhost:3000/admin** (ou cliquez sur le lien « Administration » discret en bas de chaque page).

- **Identifiant :** `Admin01`
- **Mot de passe :** `FamSonG1@-`

⚠️ **Important :** changez ce mot de passe avant toute mise en ligne publique du site (voir section « Sécurité » ci-dessous).

Depuis le tableau de bord, vous pouvez :

- **Articles** — rédiger, publier et gérer les actualités du site (éditeur de texte riche avec mise en forme, image de couverture)
- **Galerie** — glisser-déposer des photos pour la page « Nos Réalisations », les classer par catégorie
- **Projets** — créer et modifier les projets et domaines d'intervention affichés sur le site
- **Messages** — consulter les messages envoyés depuis le formulaire de contact

## Configuration de l'envoi d'emails (optionnel)

Par défaut, les messages du formulaire de contact sont enregistrés dans la base de données et affichés dans la console du serveur — aucun email n'est requis pour que le site fonctionne.

Pour activer l'envoi réel des notifications par email (Gmail) :

1. Activez la validation en deux étapes sur le compte Gmail `ensemblemondedurable@gmail.com`
2. Générez un **mot de passe d'application** depuis les paramètres de sécurité Google
3. Renseignez-le dans le fichier `.env.local` :

```env
SMTP_PASS="votre-mot-de-passe-application"
```

4. Redémarrez le serveur

## Déploiement de preview sur Vercel

Pour un aperçu rapide (revue client, tests) avant la mise en ligne définitive sur Hostinger :

1. Le dépôt est connecté à Vercel via GitHub — chaque push sur `main` déclenche un nouveau déploiement
2. Une base MySQL gratuite (Aiven) est utilisée pour cette preview, indépendante de la base de production
3. Variables d'environnement à renseigner dans Vercel (Settings → Environment Variables) : `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
4. ⚠️ L'upload de photos/images depuis l'admin ne fonctionne pas sur Vercel (système de fichiers en lecture seule côté serverless) — cette fonctionnalité nécessite un stockage externe (Vercel Blob, S3...) qui n'est pas encore branché pour la preview

## Sécurité avant mise en ligne

- Changez `NEXTAUTH_SECRET` dans `.env.local` par une valeur aléatoire et secrète
- Changez le mot de passe administrateur (modifiez `prisma/seed.ts` puis relancez `npm run db:seed`, ou mettez à jour directement l'enregistrement `User` en base)
- Ne committez jamais le fichier `.env.local` dans un dépôt public

## Structure du projet

```
emd-website/
├── app/
│   ├── (public)/        # Pages publiques (accueil, domaines, projets, contact...)
│   ├── admin/            # Panneau d'administration (protégé par authentification)
│   └── api/              # Routes API (articles, photos, projets, contact, upload)
├── components/
│   ├── home/, about/, domaines/, projets/, actualites/, realisations/
│   ├── admin/            # Composants du panneau d'administration
│   ├── layout/           # Header, Footer, navigation admin
│   ├── shared/            # Logo, formulaires, badges ODD, animations
│   └── ui/                # Composants d'interface réutilisables (boutons, cartes...)
├── lib/                  # Prisma, authentification, email, données statiques
└── prisma/                # Schéma de base de données et script de seed
```

## Déploiement en production

```bash
npm run build
npm run start
```

Pensez à adapter `NEXTAUTH_URL` et `DATABASE_URL` à votre environnement de production. Sur un hébergement de type Node.js Web App (Hostinger, etc.), configurez la base MySQL fournie par l'hébergeur (voir section ci-dessus) et vérifiez que le dossier `public/uploads` persiste bien entre les redéploiements — sinon, prévoyez un stockage externe (S3, Cloudinary...) pour les images uploadées depuis l'admin.

---

**Contact ONG :**
📞 05 66 08 64 96 · ✉️ ensemblemondedurable@gmail.com · 📍 01 BP 2000 SAN-PEDRO 01, Côte d'Ivoire

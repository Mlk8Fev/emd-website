#!/bin/bash
set -e

echo "🌍 Installation du site Ensemble pour un Monde Durable..."
echo ""
echo "⚠️  Ce projet utilise MySQL. Assurez-vous d'avoir :"
echo "   1. Un serveur MySQL démarré et accessible"
echo "   2. Une base de données créée (voir README.md)"
echo "   3. La variable DATABASE_URL configurée dans .env et .env.local"
echo ""

npm install
npx prisma generate
npx prisma db push
npm run db:seed

echo ""
echo "✅ Installation terminée !"
echo "   Identifiant admin : Admin01"
echo "   Mot de passe admin : FamSonG1@-"
echo ""
echo "Démarrage du serveur de développement..."
npm run dev

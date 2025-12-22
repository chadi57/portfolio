#!/bin/bash

echo "🔧 Correction du repository Git..."
echo ""

cd "$(dirname "$0")"

# Supprimer le sous-dossier portfolio cloné par erreur
if [ -d "portfolio" ]; then
    echo "🗑️  Suppression du sous-dossier portfolio..."
    rm -rf portfolio
fi

# Supprimer le cache git du sous-dossier
git rm --cached portfolio 2>/dev/null || true

# Récupérer les changements de GitHub (le README.md)
echo "📥 Récupération des changements de GitHub..."
git pull origin main --allow-unrelated-histories || git pull origin main --no-edit

# Ajouter tous les fichiers du portfolio
echo "📝 Ajout de tous les fichiers..."
git add .

# Créer un commit
echo "💾 Création du commit..."
git commit -m "Portfolio complet - Chadi El Fai" || echo "Aucun changement à commiter"

# Pousser vers GitHub
echo "⬆️  Push vers GitHub..."
git push -u origin main

echo ""
echo "✅ Terminé ! Votre portfolio est maintenant sur GitHub"
echo "🌐 Allez sur https://vercel.com pour déployer"


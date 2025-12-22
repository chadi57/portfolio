#!/bin/bash

echo "🚀 Push complet du portfolio vers GitHub..."
echo ""

cd "$(dirname "$0")"

# Vérifier si on est dans le bon dossier
if [ ! -f "package.json" ]; then
    echo "❌ Erreur : Vous n'êtes pas dans le dossier portfolio"
    exit 1
fi

# Initialiser git si nécessaire
if [ ! -d ".git" ]; then
    echo "📦 Initialisation de git..."
    git init
fi

# Configurer le remote
echo "🔗 Configuration du remote GitHub..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/chadi57/portfolio.git

# Récupérer le README initial de GitHub
echo "📥 Récupération du README initial..."
git fetch origin
git branch -M main
git pull origin main --allow-unrelated-histories --no-edit || true

# Supprimer le sous-dossier portfolio s'il existe
if [ -d "portfolio" ]; then
    echo "🗑️  Suppression du sous-dossier portfolio..."
    rm -rf portfolio
    git rm --cached portfolio 2>/dev/null || true
fi

# Ajouter tous les fichiers
echo "📝 Ajout de tous les fichiers..."
git add .

# Créer un commit
echo "💾 Création du commit..."
git commit -m "Portfolio complet - Chadi El Fai" || echo "Aucun changement à commiter"

# Pousser vers GitHub
echo "⬆️  Push vers GitHub..."
git push -u origin main --force

echo ""
echo "✅ Terminé ! Votre portfolio est maintenant sur GitHub"
echo "🌐 Vérifiez sur : https://github.com/chadi57/portfolio"
echo "🚀 Allez sur https://vercel.com pour déployer"


#!/bin/bash

echo "🚀 Préparation du push vers GitHub..."
echo ""

cd "$(dirname "$0")"

# Vérifier si git est initialisé
if [ ! -d ".git" ]; then
    echo "📦 Initialisation de git..."
    git init
fi

# Vérifier si le remote existe
if ! git remote get-url origin &> /dev/null; then
    echo "⚠️  Aucun remote GitHub configuré."
    echo ""
    echo "Pour connecter votre repository GitHub, exécutez :"
    echo "  git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git"
    echo ""
    echo "Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub"
    echo ""
    read -p "Voulez-vous continuer quand même ? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Ajouter tous les fichiers
echo "📝 Ajout des fichiers..."
git add .

# Commit
echo "💾 Création du commit..."
git commit -m "Portfolio complet - Chadi El Fai" || echo "Aucun changement à commiter"

# Push
echo "⬆️  Push vers GitHub..."
if git remote get-url origin &> /dev/null; then
    git branch -M main
    git push -u origin main
    echo ""
    echo "✅ Code poussé vers GitHub avec succès !"
    echo ""
    echo "🌐 Maintenant, allez sur https://vercel.com pour déployer votre portfolio"
else
    echo ""
    echo "⚠️  Configurez d'abord le remote GitHub :"
    echo "   git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi


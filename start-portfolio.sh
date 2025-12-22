#!/bin/bash

echo "🚀 Démarrage du portfolio..."
echo ""

# Vérifier Node.js
echo "📋 Vérification de Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    exit 1
fi

echo "✅ Node.js: $(node --version)"
echo "✅ npm: $(npm --version)"
echo ""

# Aller dans le dossier
cd "$(dirname "$0")"

# Nettoyer le cache npm si nécessaire
echo "🧹 Nettoyage du cache npm..."
npm cache clean --force 2>/dev/null || true

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Tuer le processus sur le port 5173 s'il existe
if lsof -ti:5173 &> /dev/null; then
    echo "🔄 Libération du port 5173..."
    kill -9 $(lsof -ti:5173) 2>/dev/null
    sleep 1
fi

# Lancer le serveur
echo ""
echo "🌟 Lancement du serveur de développement..."
echo "📱 Le portfolio sera accessible sur http://localhost:5173"
echo ""
npm run dev


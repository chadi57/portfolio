#!/bin/bash

# Script de démarrage du portfolio
cd "$(dirname "$0")"

echo "🚀 Démarrage du portfolio..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez installer Node.js depuis https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Tuer le processus sur le port 5173 s'il existe
if lsof -ti:5173 &> /dev/null; then
    echo "🔄 Libération du port 5173..."
    kill -9 $(lsof -ti:5173) 2>/dev/null
    sleep 1
fi

# Lancer le serveur
echo "🌟 Lancement du serveur de développement..."
npm run dev


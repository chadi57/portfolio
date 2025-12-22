#!/bin/bash

echo "🔍 Vérification de conda..."
if command -v conda &> /dev/null; then
    echo "✅ Conda trouvé!"
    echo "📦 Installation de Node.js via conda..."
    conda install -c conda-forge nodejs npm -y
    echo "✅ Node.js installé!"
    echo ""
    echo "Vérification:"
    node --version
    npm --version
else
    echo "❌ Conda non trouvé. Veuillez installer Node.js manuellement depuis https://nodejs.org/"
fi


#!/bin/bash

# Script pour copier le CV dans le dossier public
SOURCE="/Users/chadielfai/Downloads/White Simple Bordered Infographic Resume-1.pdf"
DEST="/Users/chadielfai/Desktop/portfolio/public/cv-chadi-elfai.pdf"

if [ -f "$SOURCE" ]; then
    cp "$SOURCE" "$DEST"
    echo "✅ CV copié avec succès dans public/cv-chadi-elfai.pdf"
else
    echo "❌ Fichier CV non trouvé à : $SOURCE"
    echo "Veuillez vérifier le chemin du fichier."
fi


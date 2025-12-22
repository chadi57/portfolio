# Déploiement sur Vercel (GRATUIT)

## Méthode 1 : Via l'interface web (Le plus simple)

### Étape 1 : Préparer votre code
1. Assurez-vous que votre code fonctionne en local (`npm run dev`)
2. Créez un compte GitHub si vous n'en avez pas : https://github.com

### Étape 2 : Pousser votre code sur GitHub
```bash
cd /Users/chadielfai/Desktop/portfolio

# Initialiser git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit - Portfolio Chadi El Fai"

# Créer un nouveau repository sur GitHub, puis :
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel
1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Importez votre repository GitHub (portfolio)
5. Vercel détectera automatiquement Vite
6. Cliquez sur "Deploy"
7. Attendez 1-2 minutes
8. Votre portfolio sera en ligne avec un lien comme : `https://votre-portfolio.vercel.app`

## Méthode 2 : Via Vercel CLI (Plus rapide)

### Installation
```bash
npm install -g vercel
```

### Déploiement
```bash
cd /Users/chadielfai/Desktop/portfolio
vercel
```

Suivez les instructions :
- Login avec votre compte Vercel/GitHub
- Appuyez sur Entrée pour accepter les paramètres par défaut
- Votre site sera déployé en quelques secondes !

### Mise à jour
À chaque fois que vous modifiez votre code :
```bash
vercel --prod
```

## Configuration automatique

Le fichier `vercel.json` est déjà configuré pour votre projet. Vercel va :
- Détecter automatiquement Vite
- Builder le projet avec `npm run build`
- Servir les fichiers depuis `dist/`
- Rediriger toutes les routes vers `index.html` (pour React Router)

## Domaine personnalisé (Optionnel)

1. Dans Vercel, allez dans votre projet
2. Settings > Domains
3. Ajoutez votre propre domaine (si vous en avez un)

## Avantages de Vercel
- ✅ Gratuit pour toujours
- ✅ Déploiement en quelques secondes
- ✅ HTTPS automatique
- ✅ CDN global (rapide partout dans le monde)
- ✅ Déploiements automatiques à chaque push sur GitHub
- ✅ Preview pour chaque pull request


# Guide de déploiement

Ce guide vous explique comment déployer le portfolio sur différentes plateformes.

## 🚀 Vercel (Recommandé)

### Option 1 : Via l'interface web

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub/GitLab/Bitbucket
3. Importez le repository
4. Vercel détectera automatiquement Vite
5. Cliquez sur "Deploy"

### Option 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Pour la production
vercel --prod
```

## 🌐 Netlify

### Option 1 : Via l'interface web

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre repository
3. Configuration :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Cliquez sur "Deploy"

### Option 2 : Via CLI

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Déployer
netlify deploy --prod --dir=dist
```

## 📦 GitHub Pages

1. Installer `gh-pages` :
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans `package.json` :
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Configurer la base dans `vite.config.ts` :
```typescript
export default defineConfig({
  base: '/portfolio/', // Remplacez par votre nom de repo
  plugins: [react()],
})
```

4. Déployer :
```bash
npm run deploy
```

## 🔧 Configuration personnalisée

### Variables d'environnement

Créez un fichier `.env` pour les variables d'environnement :

```env
VITE_CONTACT_EMAIL=votre-email@example.com
VITE_LINKEDIN_URL=https://linkedin.com/in/votre-profil
VITE_GITHUB_URL=https://github.com/votre-username
```

Puis mettez à jour `src/data.ts` pour utiliser ces variables.

### Domaine personnalisé

1. **Vercel** : Settings > Domains > Add Domain
2. **Netlify** : Domain settings > Add custom domain

## 📝 Checklist avant déploiement

- [ ] Mettre à jour les informations dans `src/data.ts`
- [ ] Ajouter les vraies images dans `public/projects/`
- [ ] Ajouter le CV PDF dans `public/`
- [ ] Vérifier les liens (LinkedIn, GitHub, Email)
- [ ] Tester en local avec `npm run build && npm run preview`
- [ ] Vérifier le responsive sur mobile
- [ ] Optimiser les images (compression)
- [ ] Mettre à jour les meta tags dans `index.html`

## 🐛 Résolution de problèmes

### Les images ne s'affichent pas

- Vérifiez que les chemins dans `data.ts` commencent par `/`
- Vérifiez que les fichiers existent dans `public/projects/`
- Vérifiez la casse des noms de fichiers

### Erreur 404 sur les routes

- Vercel : Le fichier `vercel.json` est déjà configuré
- Netlify : Créez `public/_redirects` avec `/* /index.html 200`
- GitHub Pages : Vérifiez la configuration de base dans `vite.config.ts`

### Build échoue

- Vérifiez que toutes les dépendances sont dans `package.json`
- Exécutez `npm install` avant de build
- Vérifiez les erreurs TypeScript avec `npm run build`


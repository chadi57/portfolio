# Guide de démarrage rapide

## 🚀 Installation et lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:5173 dans votre navigateur
```

## 📝 Personnalisation rapide

### 1. Mettre à jour vos informations

Éditez `src/data.ts` et modifiez :

```typescript
// Contact
export const contact: Contact = {
  email: 'votre-email@example.com',  // ← Votre email
  linkedin: 'https://linkedin.com/in/votre-profil',  // ← Votre LinkedIn
  github: 'https://github.com/votre-username',  // ← Votre GitHub
  cvUrl: '/cv-chadi-elfai.pdf',  // ← Chemin vers votre CV
}
```

### 2. Ajouter votre CV

1. Placez votre CV PDF dans le dossier `public/`
2. Renommez-le si nécessaire (ex: `cv-chadi-elfai.pdf`)
3. Mettez à jour `cvUrl` dans `src/data.ts`

### 3. Ajouter des screenshots de projets

1. **Préparer vos images** :
   - Format : JPG, PNG ou WebP
   - Taille optimisée : max 1-2 MB par image
   - Dimensions recommandées : 1920x1080px

2. **Placer les images** :
   ```
   public/projects/
   ├── polynomial-labs/
   │   ├── dashboard-defi.jpg      ← Vos images ici
   │   ├── pipeline-onchain.jpg
   │   └── ml-model.jpg
   ├── churn-prediction/
   │   ├── cover.jpg
   │   └── ...
   ```

3. **Vérifier les chemins** dans `src/data.ts` :
   ```typescript
   screenshots: [
     {
       id: 'poly-1',
       title: 'Dashboard Analytics DeFi',
       description: '...',
       imagePath: '/projects/polynomial-labs/dashboard-defi.jpg',  // ← Vérifier le chemin
     },
   ]
   ```

### 4. Personnaliser les projets

Dans `src/data.ts`, section `projects`, vous pouvez :

- Modifier les descriptions
- Ajouter/supprimer des projets
- Changer les technologies utilisées
- Mettre à jour les métriques
- Ajouter des liens GitHub/Demo

### 5. Ajuster les compétences

Dans `src/data.ts`, section `skills` :

```typescript
export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'language' },  // ← Modifier le niveau
  // Ajouter vos compétences
]
```

## 🎨 Personnalisation avancée

### Changer les couleurs

Éditez `tailwind.config.js` :

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // ← Votre couleur principale
    600: '#0284c7',
    // ...
  },
}
```

### Modifier les animations

Les animations sont gérées par Framer Motion dans chaque composant. Vous pouvez ajuster :

- `duration` : Durée de l'animation
- `delay` : Délai avant l'animation
- `ease` : Type d'animation

## 📦 Build pour production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

Le dossier `dist/` contient les fichiers optimisés pour la production.

## 🌐 Déploiement

Voir `DEPLOYMENT.md` pour les instructions détaillées.

**Déploiement rapide sur Vercel** :

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Cliquez sur "Deploy"

C'est tout ! 🎉

## ✅ Checklist avant de partager

- [ ] Email mis à jour
- [ ] Liens LinkedIn et GitHub corrects
- [ ] CV ajouté et accessible
- [ ] Screenshots de projets ajoutés
- [ ] Informations dans `data.ts` à jour
- [ ] Testé en local (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Responsive testé sur mobile
- [ ] Tous les liens fonctionnent

## 🐛 Problèmes courants

### Les images ne s'affichent pas
- Vérifiez que les chemins commencent par `/`
- Vérifiez que les fichiers existent dans `public/`
- Vérifiez la casse des noms de fichiers

### Erreur de build
- Exécutez `npm install` à nouveau
- Vérifiez les erreurs TypeScript dans la console
- Vérifiez que tous les imports sont corrects

### Animations ne fonctionnent pas
- Vérifiez que Framer Motion est installé : `npm install framer-motion`
- Vérifiez la console pour les erreurs

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation Vite](https://vitejs.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Framer Motion](https://www.framer.com/motion)

---

**Besoin d'aide ?** Consultez le `README.md` pour plus de détails.


# Portfolio Chadi El Fai - Data Scientist

Portfolio web interactif et professionnel pour un Data Scientist / Data Analyst / ML Engineer junior.

## 🚀 Technologies utilisées

- **React.js** + **Vite** - Framework et build tool
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne
- **Framer Motion** - Animations fluides
- **React Router** - Navigation
- **Lucide Icons** - Icônes
- **Recharts** - Visualisations de données

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
portfolio/
├── public/
│   └── projects/          # Dossier pour les screenshots de projets
│       ├── polynomial-labs/
│       ├── iooikos/
│       ├── freelance/
│       ├── churn-prediction/
│       ├── recommendation-system/
│       ├── sales-forecasting/
│       └── anomaly-detection/
├── src/
│   ├── components/
│   │   ├── sections/      # Sections principales
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experiences.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ScreenshotGallery.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── data.ts            # Données centralisées
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Personnalisation

### Modifier les données

Toutes les données sont centralisées dans `src/data.ts`. Vous pouvez facilement modifier :

- **Profil** : Nom, titre, bio, tagline
- **Parcours académique** : Diplômes, formations
- **Expériences** : Stages, emplois, réalisations
- **Projets** : Projets académiques, POC, descriptions
- **Compétences** : Hard skills, soft skills, niveaux
- **Contact** : Email, LinkedIn, GitHub, CV

### Ajouter des screenshots

1. Créer les dossiers dans `public/projects/{project-slug}/`
2. Ajouter les images (JPG, PNG, WebP recommandés)
3. Mettre à jour les chemins dans `src/data.ts` :

```typescript
screenshots: [
  {
    id: 'unique-id',
    title: 'Titre du screenshot',
    description: 'Description orientée métier',
    imagePath: '/projects/{project-slug}/image.jpg',
    businessImpact: 'Impact métier du screenshot',
  },
]
```

### Personnaliser les couleurs

Modifier `tailwind.config.js` pour changer la palette de couleurs :

```javascript
colors: {
  primary: {
    // Vos couleurs personnalisées
  },
}
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. Installer Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivre les instructions

### Netlify

1. Installer Netlify CLI : `npm i -g netlify-cli`
2. Build : `npm run build`
3. Déployer : `netlify deploy --prod --dir=dist`

### Autres plateformes

Le projet génère un dossier `dist/` après `npm run build` qui peut être déployé sur n'importe quel hébergeur statique.

## 📝 Notes importantes

- **Dark mode par défaut** : Le portfolio est optimisé pour un thème sombre
- **Responsive** : Optimisé pour desktop et mobile
- **Performance** : Images optimisées recommandées (WebP, compression)
- **SEO** : Mettre à jour les meta tags dans `index.html`
- **CV** : Ajouter le fichier PDF dans `public/` et mettre à jour `contact.cvUrl` dans `data.ts`

## 🔧 Fonctionnalités

- ✅ Navigation fluide avec scroll smooth
- ✅ Animations Framer Motion
- ✅ Galerie de screenshots avec modal plein écran
- ✅ Cards interactives pour expériences et projets
- ✅ Visualisations de compétences (barres, radar chart)
- ✅ Responsive design
- ✅ Dark mode optimisé
- ✅ Performance optimisée

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à me contacter.

---

**Développé avec ❤️ pour Chadi El Fai**


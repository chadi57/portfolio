# Architecture et choix de design

Ce document explique les choix d'architecture et de design du portfolio, orienté pour un recruteur Data / IA.

## 🏗️ Architecture technique

### Stack choisie

- **React + Vite** : Performance optimale, hot reload rapide, build moderne
- **TypeScript** : Typage fort pour éviter les erreurs, meilleure maintenabilité
- **Tailwind CSS** : Styling rapide, responsive facile, dark mode natif
- **Framer Motion** : Animations fluides et performantes, UX premium
- **React Router** : Navigation SPA, URLs propres
- **Recharts** : Visualisations de données cohérentes avec le profil Data

### Structure des données

Toutes les données sont centralisées dans `src/data.ts` :

- ✅ **Séparation des données et de la présentation**
- ✅ **Facile à mettre à jour** (pas besoin de toucher aux composants)
- ✅ **Type-safe** avec TypeScript
- ✅ **Scalable** (facile d'ajouter des projets/expériences)

### Architecture des composants

```
components/
├── Layout.tsx              # Structure globale
├── Navigation.tsx          # Navigation sticky avec scroll smooth
├── Footer.tsx              # Footer avec liens sociaux
├── ScreenshotGallery.tsx   # Composant réutilisable pour galeries
└── sections/               # Sections principales
    ├── Hero.tsx            # Landing page avec CTA
    ├── About.tsx           # Timeline académique
    ├── Experiences.tsx     # Cards interactives
    ├── Projects.tsx        # Projets avec galerie
    ├── Skills.tsx          # Visualisations compétences
    └── Contact.tsx         # Formulaire de contact
```

**Principe** : Un composant = une responsabilité, réutilisable et modulaire.

## 🎨 Choix de design UX/UI

### Pourquoi un dark mode par défaut ?

1. **Contexte Data Science** : Les data scientists travaillent souvent dans des environnements sombres (IDE, notebooks)
2. **Modernité** : Le dark mode est associé à la tech moderne
3. **Lisibilité** : Meilleure lisibilité pour les screenshots de dashboards et graphiques
4. **Différenciation** : Se démarque des portfolios classiques

### Design "Data-driven"

- **Couleurs** : Palette bleue (primary) évoquant la tech et la data
- **Typographie** : Inter (moderne, lisible, professionnel)
- **Espacements** : Généreux pour une lecture confortable
- **Glassmorphism** : Effet de verre pour un look premium et moderne

### Navigation optimisée pour recruteurs

1. **Sticky navigation** : Toujours accessible, même en scrollant
2. **Scroll smooth** : Navigation fluide entre sections
3. **Ancres claires** : Sections bien identifiées
4. **Mobile-first** : Menu hamburger sur mobile

### Mise en avant des screenshots

**Pourquoi c'est crucial pour un Data Scientist** :

- Les recruteurs veulent voir des **livrables concrets**
- Les dashboards et graphiques montrent la **capacité de visualisation**
- Les screenshots démontrent l'**impact métier** réel

**Implémentation** :

- Galerie avec hover effects
- Modal plein écran avec zoom
- Descriptions orientées métier (pas seulement technique)
- Carrousel pour navigation entre images

### Sections optimisées pour lecture rapide

#### Hero (Landing Page)
- **Accroche en 5 secondes** : Nom, titre, tagline
- **CTAs clairs** : Voir projets, Télécharger CV, Contacter
- **Animation subtile** : Attire l'attention sans distraire

#### À propos
- **Bio courte** : Maximum 3-4 phrases
- **Timeline visuelle** : Parcours académique clair
- **Vision professionnelle** : Objectif clair

#### Expériences
- **Cards expandables** : Vue d'ensemble d'abord, détails sur demande
- **Métriques visibles** : Technologies, période, type
- **Screenshots intégrés** : Preuve concrète du travail

#### Projets
- **Problème → Solution → Impact** : Structure claire pour recruteurs non-tech
- **Métriques de performance** : Chiffres concrets (précision, ROI, etc.)
- **Badge "Projet académique"** : Transparence sur la nature des projets

#### Compétences
- **Visualisations multiples** : Radar chart + barres de progression
- **Catégorisation claire** : Langages, Frameworks, Outils, Méthodologies
- **Niveaux réalistes** : Pas de sur-évaluation

#### Contact
- **Multiples canaux** : Email, LinkedIn, GitHub
- **CTA principal** : Bouton "Envoyer un message" proéminent
- **Téléchargement CV** : Facilement accessible

## 🎯 Optimisations pour recruteurs Data / IA

### 1. Langage orienté métier

Au lieu de :
> "J'ai utilisé Random Forest pour classifier les données"

On écrit :
> "Modèle ML permettant d'identifier 87% des clients à risque, générant un ROI de +35%"

### 2. Métriques visibles

Chaque projet affiche :
- Précision du modèle
- Impact business (ROI, économies, gains)
- Temps de traitement
- Taux de détection

### 3. Screenshots avec contexte

Chaque screenshot a :
- **Titre** : Ce que c'est
- **Description** : Ce que ça fait
- **Impact métier** : Pourquoi c'est important

### 4. Structure claire pour non-tech

- Problème métier expliqué simplement
- Solution technique accessible
- Résultats quantifiés

## ⚡ Performance

### Optimisations implémentées

1. **Code splitting** : React Router charge les composants à la demande
2. **Lazy loading images** : Les images se chargent au scroll (via Framer Motion)
3. **Animations performantes** : Framer Motion utilise GPU acceleration
4. **Build optimisé** : Vite optimise automatiquement le bundle

### Métriques cibles

- **First Contentful Paint** : < 1.5s
- **Time to Interactive** : < 3s
- **Lighthouse Score** : > 90

## 📱 Responsive Design

### Breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

### Adaptations mobiles

- Menu hamburger
- Cards en colonne unique
- Galerie en grille 1 colonne
- Textes ajustés
- Espacements réduits

## 🔒 Accessibilité

- **Navigation clavier** : Toutes les interactions accessibles au clavier
- **Contraste** : Respect des ratios WCAG AA
- **Labels ARIA** : Boutons et liens étiquetés
- **Focus visible** : États de focus clairs

## 🚀 Évolutivité

### Facile d'ajouter

- **Nouveaux projets** : Ajouter dans `data.ts`
- **Nouvelles expériences** : Ajouter dans `data.ts`
- **Nouvelles sections** : Créer un composant dans `sections/`
- **Nouvelles compétences** : Ajouter dans `data.ts`

### Facile de modifier

- **Design** : Modifier `tailwind.config.js` et `index.css`
- **Animations** : Modifier les props Framer Motion
- **Contenu** : Tout dans `data.ts`

## 📊 Comparaison avec autres portfolios

### Avantages de cette approche

1. **Orienté Data** : Visualisations, métriques, impact métier
2. **Screenshots centraux** : Preuve concrète du travail
3. **Langage métier** : Compréhensible par recruteurs non-tech
4. **Performance** : Chargement rapide, animations fluides
5. **Maintenabilité** : Code propre, bien structuré

### Points d'attention

- **Images requises** : Besoin de vraies screenshots pour être crédible
- **Contenu à jour** : Nécessite de maintenir les données
- **Personnalisation** : Peut nécessiter des connaissances React

## 🎓 Conclusion

Ce portfolio est conçu pour :

1. **Impressionner en 2 minutes** : Structure claire, informations clés visibles
2. **Montrer des livrables concrets** : Screenshots, métriques, résultats
3. **Démontrer la compréhension métier** : Langage orienté impact business
4. **Faciliter le contact** : CTAs clairs, liens accessibles

**Objectif atteint** : Donner envie au recruteur de contacter le candidat et de lui proposer un entretien.


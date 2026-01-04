// Structure de données centralisée pour le portfolio
// Facilement modifiable pour mise à jour future

export interface Screenshot {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  businessImpact?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: 'professional' | 'academic' | 'freelance';
  coverImage: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  screenshots: Screenshot[];
  businessImpact: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  type: 'internship' | 'freelance' | 'fulltime';
  description: string;
  achievements: string[];
  technologies: string[];
  screenshots?: Screenshot[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'methodology';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  cvUrl?: string;
}

// Données du profil
export const profile = {
  name: 'Chadi El Fai',
  title: 'Data Scientist',
  subtitle: 'Spécialisé en analyse, visualisation et prédiction',
  tagline: 'Transformer les données complexes en décisions exploitables',
  bio: `Passionné par la data science et l'intelligence artificielle, je transforme des données brutes en insights actionnables pour prendre des décisions éclairées. Mon parcours académique en Master Informatique Décisionnel – Data, IA, Machine Learning, combiné à mes expériences professionnelles, m'a permis de développer une expertise solide en analyse de données, modélisation prédictive et visualisation.`,
  location: 'France',
  avatar: '/avatar.jpg', // À ajouter plus tard
};

// Parcours académique
export const education: Education[] = [
  {
    degree: 'Master Informatique Décisionnel – Data, IA, Machine Learning',
    institution: 'Université',
    period: '2023 - 2025',
    location: 'France',
    description: 'Formation approfondie en data science, machine learning, deep learning, et analyse décisionnelle',
  },
  {
    degree: 'Licence Informatique',
    institution: 'Université de Metz',
    period: '2020 - 2023',
    location: 'Metz, France',
  },
];

// Expériences professionnelles
export const experiences: Experience[] = [
  {
    id: 'polynomial-labs',
    company: 'Polynomial Labs',
    position: 'Stagiaire Data / IA',
    period: 'Mai - Septembre 2025',
    location: 'Remote / France',
    type: 'internship',
    description: `Stage spécialisé dans l'analyse de données blockchain et la modélisation prédictive pour la finance décentralisée (DeFi).`,
    achievements: [
      'Développement de pipelines de données automatisés pour l\'analyse on-chain',
      'Création de dashboards analytics pour visualiser les tendances DeFi',
      'Conception et déploiement de modèles ML pour prédire les comportements de marché',
      'Analyse de grandes quantités de transactions blockchain',
      'Optimisation des performances des modèles prédictifs',
    ],
    technologies: ['Python', 'SQL', 'Machine Learning', 'Blockchain Analytics', 'DeFi', 'Pandas', 'Scikit-learn'],
    screenshots: [
      {
        id: 'poly-1',
        title: 'Dashboard Analytics DeFi',
        description: 'Visualisation des métriques clés du marché DeFi avec indicateurs en temps réel',
        imagePath: '/projects/polynomial-labs/dashboard-defi.png',
        businessImpact: 'Permet une prise de décision rapide sur les opportunités de marché',
      },
      {
        id: 'poly-2',
        title: 'Pipeline de données on-chain',
        description: 'Architecture automatisée de collecte et traitement des données blockchain',
        imagePath: '/projects/polynomial-labs/ia-model.png',
        businessImpact: 'Réduction de 80% du temps de traitement des données',
      },
      {
        id: 'poly-3',
        title: 'Modèle prédictif DeFi',
        description: 'Modèle ML pour anticiper les mouvements de marché avec métriques de performance',
        imagePath: '/projects/polynomial-labs/overview.png',
        businessImpact: 'Précision de 75% sur les prédictions à court terme',
      },
    ],
  },
  {
    id: 'iooikos',
    company: 'IOOIKOS',
    position: 'Stagiaire Développeur Python',
    period: 'Avril - Août 2023',
    location: 'France',
    type: 'internship',
    description: `Stage axé sur l'automatisation de processus métier et la gestion de données d'entreprise.`,
    achievements: [
      'Automatisation de tâches répétitives avec Python',
      'Alimentation et gestion du Datawarehouse',
      'Développement d\'un chatbot client avec traitement du langage naturel',
      'Amélioration de l\'efficacité opérationnelle',
      'Documentation technique des processus automatisés',
    ],
    technologies: ['Python', 'SQL', 'Datawarehouse', 'NLP', 'Automation', 'ETL'],
    // Garder uniquement les captures pertinentes demandées (tickets, estimation, retools)
    screenshots: [
      {
        id: 'ioo-ticket',
        title: 'Tickets — clôturés (mois précédent)',
        description: "Liste des tickets clients clos le mois dernier avec temps passé, client et ID de ticket.",
        imagePath: '/projects/iooikos/ticket.png',
        businessImpact: 'Permet de suivre le temps passé par client et prioriser la facturation',
      },
      {
        id: 'ioo-estimation',
        title: 'Génération d\'estimation',
        description: "Écran d'estimation générée reprenant tous les clients, tickets et horaires pour produire une estimation modifiable.",
        imagePath: '/projects/iooikos/estimation.png',
        businessImpact: 'Automatisation des estimations permettant de transformer facilement en facture',
      },
      {
        id: 'ioo-retools',
        title: 'Dashboard Retool',
        description: 'Dashboard centralisant plusieurs données métiers (clients, tickets, factures).',
        imagePath: '/projects/iooikos/retools.png',
        businessImpact: 'Centralisation améliorant la visibilité et la prise de décision opérationnelle',
      },
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'Data Analyst',
    period: '2023 - Présent',
    location: 'Remote',
    type: 'freelance',
    description: `Prestations de conseil en analyse de données pour diverses entreprises.`,
    achievements: [
      'Analyse de données complexes avec Python et SQL',
      'Nettoyage et intégration de sources multiples (CSV, API, SQL)',
      'Création de dashboards interactifs Power BI & Qlik Sense',
      'Modélisation prédictive pour différents secteurs',
      'Livraison de rapports documentés et actionnables',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Qlik Sense', 'Machine Learning', 'Data Visualization'],
    screenshots: [
      {
        id: 'free-1',
        title: 'Dashboard Power BI',
        description: 'Dashboard exécutif avec KPIs et visualisations interactives',
        imagePath: '/projects/freelance/powerbi-dashboard.jpg',
        businessImpact: 'Amélioration de la visibilité sur les performances business',
      },
      {
        id: 'free-2',
        title: 'Modèle prédictif ventes',
        description: 'Modèle ML pour prévoir les ventes avec analyse de tendances',
        imagePath: '/projects/freelance/sales-prediction.jpg',
        businessImpact: 'Précision de 82% sur les prévisions mensuelles',
      },
    ],
  },
];

// Projets académiques / POC
export const projects: Project[] = []

// Compétences
export const skills: Skill[] = [
  // Langages
  { name: 'Python', level: 90, category: 'language' },
  { name: 'SQL', level: 85, category: 'language' },
  { name: 'R', level: 70, category: 'language' },
  
  // Frameworks & Libraries
  { name: 'Pandas', level: 90, category: 'framework' },
  { name: 'Scikit-learn', level: 85, category: 'framework' },
  { name: 'TensorFlow', level: 75, category: 'framework' },
  { name: 'PyTorch', level: 70, category: 'framework' },
  { name: 'NumPy', level: 88, category: 'framework' },
  
  // Outils
  { name: 'Power BI', level: 85, category: 'tool' },
  { name: 'Qlik Sense', level: 80, category: 'tool' },
  { name: 'Apache Superset', level: 75, category: 'tool' },
  { name: 'Git', level: 80, category: 'tool' },
  { name: 'Docker', level: 70, category: 'tool' },
  
  // Méthodologies
  { name: 'Machine Learning', level: 85, category: 'methodology' },
  { name: 'Deep Learning', level: 75, category: 'methodology' },
  { name: 'Data Pipelines', level: 80, category: 'methodology' },
  { name: 'Data Visualization', level: 88, category: 'methodology' },
  { name: 'Statistical Analysis', level: 85, category: 'methodology' },
];

// Soft skills
export const softSkills = [
  'Analyse critique',
  'Résolution de problèmes',
  'Communication technique',
  'Travail en équipe',
  'Autonomie',
  'Curiosité intellectuelle',
  'Rigueur',
];

// Contact
export const contact: Contact = {
  email: 'elfaichadi@outlook.fr',
  linkedin: 'https://www.linkedin.com/in/elfaichadi/',
  github: 'https://github.com/ELFAIChadi',
  cvUrl: '/CV_chadi.pdf',
};


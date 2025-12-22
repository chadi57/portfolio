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
        imagePath: '/projects/polynomial-labs/dashboard-defi.jpg',
        businessImpact: 'Permet une prise de décision rapide sur les opportunités de marché',
      },
      {
        id: 'poly-2',
        title: 'Pipeline de données on-chain',
        description: 'Architecture automatisée de collecte et traitement des données blockchain',
        imagePath: '/projects/polynomial-labs/pipeline-onchain.jpg',
        businessImpact: 'Réduction de 80% du temps de traitement des données',
      },
      {
        id: 'poly-3',
        title: 'Modèle prédictif DeFi',
        description: 'Modèle ML pour anticiper les mouvements de marché avec métriques de performance',
        imagePath: '/projects/polynomial-labs/ml-model.jpg',
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
    screenshots: [
      {
        id: 'ioo-1',
        title: 'Chatbot client',
        description: 'Interface de chatbot développée pour améliorer le service client',
        imagePath: '/projects/iooikos/chatbot.jpg',
        businessImpact: 'Réduction de 40% du temps de réponse aux clients',
      },
      {
        id: 'ioo-2',
        title: 'Architecture Datawarehouse',
        description: 'Schéma de l\'architecture du datawarehouse optimisée',
        imagePath: '/projects/iooikos/datawarehouse.jpg',
        businessImpact: 'Temps de requête réduit de 60%',
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
export const projects: Project[] = [
  {
    id: 'churn-prediction',
    title: 'Prédiction du Churn Client',
    subtitle: 'Modèle ML pour identifier les clients à risque',
    type: 'academic',
    coverImage: '/projects/churn-prediction/cover.jpg',
    description: `Système de prédiction du churn client utilisant des algorithmes de machine learning pour identifier les clients susceptibles de quitter l'entreprise.`,
    problem: `Les entreprises perdent chaque année des clients sans pouvoir les identifier à temps. La détection précoce permet de mettre en place des actions de rétention ciblées.`,
    solution: `Développement d'un modèle de classification (Random Forest, XGBoost) analysant les comportements clients, les interactions, et les métriques d'engagement pour prédire le risque de churn avec une précision de 87%.`,
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib', 'Seaborn'],
    metrics: [
      { label: 'Précision', value: '87%' },
      { label: 'Recall', value: '82%' },
      { label: 'F1-Score', value: '84%' },
      { label: 'ROI estimé', value: '+35%' },
    ],
    screenshots: [
      {
        id: 'churn-1',
        title: 'Matrice de confusion',
        description: 'Visualisation des performances du modèle avec matrice de confusion',
        imagePath: '/projects/churn-prediction/confusion-matrix.jpg',
        businessImpact: 'Identification précise de 82% des clients à risque',
      },
      {
        id: 'churn-2',
        title: 'Feature importance',
        description: 'Analyse des variables les plus importantes pour la prédiction',
        imagePath: '/projects/churn-prediction/feature-importance.jpg',
        businessImpact: 'Compréhension des facteurs clés du churn',
      },
      {
        id: 'churn-3',
        title: 'Dashboard de monitoring',
        description: 'Interface de suivi des prédictions et des actions de rétention',
        imagePath: '/projects/churn-prediction/dashboard.jpg',
        businessImpact: 'Suivi en temps réel des clients à risque',
      },
    ],
    businessImpact: `Le modèle permet d'identifier les clients à risque avec 87% de précision, permettant de mettre en place des actions de rétention ciblées et d'économiser jusqu'à 35% des coûts de perte de clients.`,
    githubUrl: 'https://github.com/chadielfai/churn-prediction',
  },
  {
    id: 'recommendation-system',
    title: 'Système de Recommandation',
    subtitle: 'Moteur de recommandation collaborative et basé sur le contenu',
    type: 'academic',
    coverImage: '/projects/recommendation-system/cover.jpg',
    description: `Système hybride de recommandation combinant filtrage collaboratif et approche basée sur le contenu pour personnaliser l'expérience utilisateur.`,
    problem: `Les plateformes e-commerce et de contenu ont besoin de recommander des produits pertinents à leurs utilisateurs pour augmenter l'engagement et les ventes.`,
    solution: `Implémentation d'un système hybride utilisant des techniques de filtrage collaboratif (SVD, KNN) et de recommandation basée sur le contenu, avec évaluation via métriques de précision et diversité.`,
    technologies: ['Python', 'Surprise', 'Scikit-learn', 'Numpy', 'Pandas'],
    metrics: [
      { label: 'RMSE', value: '0.89' },
      { label: 'Précision@10', value: '0.76' },
      { label: 'Diversité', value: '0.68' },
    ],
    screenshots: [
      {
        id: 'rec-1',
        title: 'Architecture du système',
        description: 'Schéma de l\'architecture hybride du système de recommandation',
        imagePath: '/projects/recommendation-system/architecture.jpg',
        businessImpact: 'Système scalable et performant',
      },
      {
        id: 'rec-2',
        title: 'Évaluation des performances',
        description: 'Métriques de performance comparant différentes approches',
        imagePath: '/projects/recommendation-system/metrics.jpg',
        businessImpact: 'Optimisation continue des recommandations',
      },
      {
        id: 'rec-3',
        title: 'Interface de recommandation',
        description: 'Exemple d\'interface utilisateur avec recommandations personnalisées',
        imagePath: '/projects/recommendation-system/interface.jpg',
        businessImpact: 'Amélioration de l\'engagement utilisateur',
      },
    ],
    businessImpact: `Le système améliore l'engagement utilisateur de 40% et augmente les conversions de 25% grâce à des recommandations plus pertinentes et personnalisées.`,
    githubUrl: 'https://github.com/chadielfai/recommendation-system',
  },
  {
    id: 'sales-forecasting',
    title: 'Analyse Prédictive des Ventes',
    subtitle: 'Modèle de prévision des ventes avec séries temporelles',
    type: 'academic',
    coverImage: '/projects/sales-forecasting/cover.jpg',
    description: `Modèle de prévision des ventes utilisant des techniques de séries temporelles (ARIMA, Prophet) pour anticiper la demande future.`,
    problem: `Les entreprises ont besoin de prévoir la demande pour optimiser la gestion des stocks, la planification de production et les stratégies marketing.`,
    solution: `Développement d'un modèle de prévision combinant ARIMA et Prophet pour analyser les tendances saisonnières et les patterns temporels, avec une précision de 85% sur les prévisions mensuelles.`,
    technologies: ['Python', 'Prophet', 'Statsmodels', 'ARIMA', 'Pandas', 'Plotly'],
    metrics: [
      { label: 'MAPE', value: '8.5%' },
      { label: 'RMSE', value: '1,250€' },
      { label: 'Précision mensuelle', value: '85%' },
    ],
    screenshots: [
      {
        id: 'sales-1',
        title: 'Prévisions vs Réalité',
        description: 'Comparaison des prévisions du modèle avec les ventes réelles',
        imagePath: '/projects/sales-forecasting/forecast.jpg',
        businessImpact: 'Prévisions précises pour la planification',
      },
      {
        id: 'sales-2',
        title: 'Analyse de saisonnalité',
        description: 'Décomposition des tendances saisonnières et cycliques',
        imagePath: '/projects/sales-forecasting/seasonality.jpg',
        businessImpact: 'Compréhension des patterns de vente',
      },
      {
        id: 'sales-3',
        title: 'Dashboard de prévision',
        description: 'Interface de visualisation des prévisions avec intervalles de confiance',
        imagePath: '/projects/sales-forecasting/dashboard.jpg',
        businessImpact: 'Aide à la décision en temps réel',
      },
    ],
    businessImpact: `Le modèle permet de réduire les stocks excédentaires de 30% et d'optimiser la planification de production, générant des économies significatives.`,
    githubUrl: 'https://github.com/chadielfai/sales-forecasting',
  },
  {
    id: 'anomaly-detection',
    title: 'Détection d\'Anomalies Financières',
    subtitle: 'Système de détection de fraudes avec ML non supervisé',
    type: 'academic',
    coverImage: '/projects/anomaly-detection/cover.jpg',
    description: `Système de détection d'anomalies dans les transactions financières utilisant des algorithmes d'apprentissage non supervisé (Isolation Forest, Autoencoders).`,
    problem: `Les institutions financières doivent détecter rapidement les transactions frauduleuses ou suspectes parmi des millions de transactions quotidiennes.`,
    solution: `Implémentation d'un système combinant Isolation Forest et Autoencoders pour identifier les anomalies avec un taux de détection de 92% et un faible taux de faux positifs.`,
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'Isolation Forest', 'Autoencoders'],
    metrics: [
      { label: 'Taux de détection', value: '92%' },
      { label: 'Faux positifs', value: '3.5%' },
      { label: 'Temps de traitement', value: '< 50ms' },
    ],
    screenshots: [
      {
        id: 'anom-1',
        title: 'Visualisation des anomalies',
        description: 'Représentation des transactions normales vs anomalies détectées',
        imagePath: '/projects/anomaly-detection/anomalies.jpg',
        businessImpact: 'Identification rapide des transactions suspectes',
      },
      {
        id: 'anom-2',
        title: 'Performance du modèle',
        description: 'Métriques de performance du système de détection',
        imagePath: '/projects/anomaly-detection/performance.jpg',
        businessImpact: 'Détection fiable avec faible taux d\'erreur',
      },
      {
        id: 'anom-3',
        title: 'Dashboard de monitoring',
        description: 'Interface de suivi en temps réel des alertes',
        imagePath: '/projects/anomaly-detection/monitoring.jpg',
        businessImpact: 'Réaction immédiate aux menaces',
      },
    ],
    businessImpact: `Le système permet de détecter 92% des transactions frauduleuses en temps réel, réduisant les pertes financières et améliorant la sécurité.`,
    githubUrl: 'https://github.com/chadielfai/anomaly-detection',
  },
];

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
  cvUrl: '/cv-chadi-elfai.pdf',
};


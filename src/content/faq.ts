// Shown on the home page and repeated in its FAQPage schema: the two must stay identical.
export const faq: { question: string; answer: string }[] = [
  {
    question: 'Qu’est-ce que Conance ?',
    answer:
      'Conance est un logiciel français, en ligne, de gestion des commissions pour les cabinets de conseil en gestion de patrimoine. Il importe les bordereaux des partenaires dans une base consolidée, contrôle l’exhaustivité des commissions perçues, établit le prévisionnel et prépare les données de la FRA CIF ainsi que l’export comptable.'
  },
  {
    question: 'À qui s’adresse Conance ?',
    answer:
      'Aux cabinets de conseil en gestion de patrimoine (CGP, CIF, courtiers en assurance), du conseiller indépendant au cabinet multi-conseillers et multi-entités, ainsi qu’aux prestataires qui traitent les commissions de plusieurs cabinets (offres Multi-Cabinets).'
  },
  {
    question: 'Conance remplace-t-il mon CRM patrimonial ?',
    answer:
      'Non. Conance s’ajoute à votre CRM ou à votre logiciel patrimonial (O2S, Wizio, Majors…). Ces outils suivent vos clients et leurs placements ; Conance assure le suivi des commissions que le cabinet perçoit de ses partenaires.'
  },
  {
    question: 'Quels formats de bordereaux Conance sait-il lire ?',
    answer:
      'Excel, CSV, OpenDocument et PDF. Conance identifie les colonnes, contrôle les données avant toute intégration et mémorise le format de chaque partenaire pour les bordereaux suivants. Une soixantaine de modèles de bordereaux sont déjà prêts à l’emploi.'
  },
  {
    question: 'Combien coûte Conance ?',
    answer:
      'Conance est gratuit jusqu’à 5 000 commissions et 3 partenaires. Les offres payantes coûtent 100, 200, 400 ou 800 € par mois selon le volume, et les offres Multi-Cabinets commencent à 180 € par mois. L’abonnement annuel offre 2 mois.'
  },
  {
    question: 'Où sont hébergées les données ?',
    answer:
      'En France : l’application, la base de données, les fichiers et les sauvegardes. L’accès est protégé par une double authentification, qui peut être rendue obligatoire pour tout le cabinet, et par des droits d’accès définis par rôle.'
  },
  {
    question: 'Quel est le rôle de l’IA dans Conance ?',
    answer:
      'L’IA est un assistant optionnel : elle propose, vous validez. L’import des bordereaux fonctionne sans IA. Un PDF est d’abord traité sur nos serveurs. Rien n’est envoyé à un prestataire d’IA sans le consentement d’un administrateur du cabinet et, pour un document, sans votre confirmation. Les fonctionnalités IA sont incluses à partir de l’offre Starter.'
  },
  {
    question: 'Conance remplit-il la FRA CIF ?',
    answer:
      'Conance prépare les chiffres : rétrocessions, honoraires et courtage de l’exercice, clients, contrats et encours au 31 décembre. Vous les vérifiez, les exportez en Excel et les reportez dans le formulaire de votre association professionnelle. Conance ne dépose pas la déclaration à votre place.'
  },
  {
    question: 'Comment commencer ?',
    answer:
      'Créez un compte sur app.conance.io, choisissez l’offre gratuite, qui ne demande aucun paiement, et importez un premier bordereau.'
  }
]

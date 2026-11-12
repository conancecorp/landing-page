export type GuideIllustration = 'match' | 'rhythm' | 'forecast' | 'fra' | 'compare'

// Shown on the home page, on the guides index and under each guide
export const guides: { path: string; title: string; summary: string; illustration: GuideIllustration }[] = [
  {
    path: '/guide-rapprochement-bordereaux-commissions',
    title: 'Rapprocher ses bordereaux de commissions',
    summary: 'Un format par partenaire, un bordereau sans numéro de contrat, un conseiller qui change.',
    illustration: 'match'
  },
  {
    path: '/guide-commissions-manquantes',
    title: 'Contrôler l’exhaustivité de ses commissions',
    summary: 'Un contrat sans versement, un droit d’entrée non perçu, un montant différent de l’attendu.',
    illustration: 'rhythm'
  },
  {
    path: '/guide-prevision-commissions',
    title: 'Établir son prévisionnel de commissions',
    summary: 'Le reste à encaisser jusqu’au 31 décembre, et la part exposée à des retards de versement.',
    illustration: 'forecast'
  },
  {
    path: '/guide-chiffres-fra-cif',
    title: 'Préparer les données de la FRA CIF',
    summary: 'Les données de la fiche de renseignements annuelle d’un CIF et les éléments restant à compléter.',
    illustration: 'fra'
  },
  {
    path: '/comparatif-gestion-commissions-cgp',
    title: 'Excel, CRM, prestataire ou logiciel dédié',
    summary: 'Ce que chaque approche couvre, et quand elle convient.',
    illustration: 'compare'
  }
]

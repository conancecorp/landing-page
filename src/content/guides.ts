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
    title: 'Repérer les commissions qui ne sont pas arrivées',
    summary: 'Un contrat qui ne paie plus, un droit d’entrée jamais versé, un montant qui diffère.',
    illustration: 'rhythm'
  },
  {
    path: '/guide-prevision-commissions',
    title: 'Prévoir ses commissions de l’année',
    summary: 'Ce qui reste à encaisser d’ici décembre, et la part de ce chiffre qui est sûre.',
    illustration: 'forecast'
  },
  {
    path: '/guide-chiffres-fra-cif',
    title: 'Préparer les chiffres de la FRA CIF',
    summary: 'Retrouver les chiffres de la fiche annuelle d’un CIF et voir ce qu’il reste à compléter.',
    illustration: 'fra'
  },
  {
    path: '/comparatif-gestion-commissions-cgp',
    title: 'Excel, CRM, prestataire ou logiciel dédié',
    summary: 'Ce que chaque approche couvre, et quand elle convient.',
    illustration: 'compare'
  }
]

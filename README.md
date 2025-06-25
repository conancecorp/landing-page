# Site Vitrine Conance

Site vitrine moderne pour l'application Conance, développé avec Vue 3, TypeScript, PrimeVue 3 et Tailwind CSS.

## Activité

![Alt](https://repobeats.axiom.co/api/embed/a23cf608b530daeeb926ca912090d8b8593ce8eb.svg "Repobeats analytics image")

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Configuration
1. Copiez le fichier d'exemple des variables d'environnement :
```bash
cp env.example .env
```

2. Modifiez le fichier `.env` selon vos besoins :
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_ENVIRONMENT=development
```

### Développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5174`

### Build de production
```bash
npm run build
```

## 🔧 Configuration des variables d'environnement

### Variables disponibles
- `VITE_API_BASE_URL` : URL de base de l'API (ex: `https://api.conance.io/api/v1`)
- `VITE_ENVIRONMENT` : Environnement (`development`, `production`)

### Configuration GitHub Pages

Pour déployer sur GitHub Pages, configurez les secrets GitHub suivants :

1. Allez dans **Settings** > **Secrets and variables** > **Actions**
2. Ajoutez les secrets suivants :
   - `VITE_API_BASE_URL` : URL de votre API de production (ex: `https://api.conance.io/api/v1`)

### Déploiement automatique

Le site se déploie automatiquement sur GitHub Pages à chaque push sur `main`/`master` qui modifie le dossier `landing-page/`.

## 📁 Structure du projet

```
src/
├── components/         # Composants Vue réutilisables
├── services/          # Services API et utilitaires
├── views/             # Pages principales
├── assets/            # Images, styles, etc.
└── main.ts           # Point d'entrée de l'application
```

## 🎨 Thème et styles

Le site utilise une palette de couleurs personnalisée basée sur l'identité visuelle Conance :
- Primaire : #23B086 (vert Conance)
- Accent : #33FFC2 (vert clair)
- Fond sombre : #0F2F2C

## 📞 Fonctionnalités

- **Page d'accueil** : Hero, fonctionnalités, tarifs, contact
- **Formulaire de contact** : Envoi d'emails via l'API backend
- **Pages légales** : CGU et mentions légales
- **Responsive design** : Optimisé pour tous les écrans
- **SEO optimisé** : Meta tags et structure sémantique

## 🔗 Liens utiles

- [Application principale](https://app.conance.io)
- [Documentation API](https://api.conance.io/docs)
- [Support](mailto:contact@conance.io)

## Structure du site

Le site vitrine sera une page unique (one-page) avec les sections suivantes :

1. **Hero Section**
   - Logo Conance
   - Titre accrocheur : "Simplifiez la gestion des commissions de votre cabinet"
   - Sous-titre : "Solution SaaS complète pour les cabinets de gestion de patrimoine"
   - CTA principal : "Démarrer gratuitement" (redirige vers app.conance.io)
   - CTA secondaire : "Voir les tarifs" (ancre vers la section prix)

2. **Fonctionnalités principales**
   - Gestion des conseillers et clients
   - Suivi des contrats et commissions
   - Import/export de données
   - Tableaux de bord et rapports
   - Gestion multi-entreprises
   - Rôles et permissions avancés

3. **Tarifs et abonnements**
   - Plan Starter
   - Plan Business
   - Plan Enterprise
   - Comparatif des fonctionnalités
   - CTA : "Choisir un plan" (redirige vers app.conance.io)

4. **Contact**
   - Formulaire de contact
   - Email : contact@conance.io
   - Adresse : [Adresse de l'entreprise]
   - Téléphone : [Numéro de téléphone]

5. **Footer**
   - Liens vers les CGU
   - Liens vers les mentions légales
   - Liens sociaux
   - Copyright

## Pages additionnelles

1. **CGU (Conditions Générales d'Utilisation)**
   - Accessible via le footer
   - Contenu légal complet

2. **Mentions Légales**
   - Accessible via le footer
   - Informations légales de l'entreprise

## Design et UX

- Design moderne et professionnel
- Palette de couleurs cohérente avec l'application
- Responsive design (mobile-first)
- Animations subtiles pour améliorer l'expérience utilisateur
- Navigation fluide avec ancres

## Technologies utilisées

- Vue.js 3 avec TypeScript
- PrimeVue 3 pour les composants UI
- Tailwind CSS pour le styling personnalisé
- Vue Router pour la navigation
- Vite pour le build et le développement

## Déploiement

- Hébergement sur Vercel
- Domaine : conance.io
- SSL obligatoire
- Assets optimisés avec Vite

## SEO

- Meta tags optimisés
- Structure HTML sémantique
- Schema.org pour les prix et l'entreprise
- Sitemap.xml
- robots.txt

## Analytics

- Vercel Analytics intégré
- Suivi des performances et du trafic

## Maintenance

- Mise à jour régulière des prix et fonctionnalités
- Surveillance des performances
- Tests réguliers des formulaires et liens
- Sauvegardes automatiques 
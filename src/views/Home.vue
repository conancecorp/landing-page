<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section v-scroll:page class="heros bg-deep">
      <SiteNav :dark="navbarDark" />

      <!-- Text content with container constraint -->
      <div class="container relative pt-28">
        <div class="text-center max-w-4xl mx-auto">
          <h1 v-reveal class="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-blanc mb-6 leading-tight md:leading-none">
            Simplifiez la gestion de vos <span class="texte-degrade">commissions</span>
          </h1>
          <p v-reveal="120" class="text-lg md:text-xl text-brume/90 mb-10 max-w-2xl mx-auto font-light">
            Le back-office des commissions des cabinets de conseil en gestion de patrimoine&nbsp;:
            importez vos bordereaux, contrôlez l'exhaustivité de vos commissions, maîtrisez votre prévisionnel.
          </p>
          <div v-reveal="240" class="flex flex-col sm:flex-row justify-center gap-3 mb-12 md:mb-16">
            <a href="https://app.conance.io/register?plan=gratuit" class="btn-accent px-6 py-3">
              Démarrer gratuitement
            </a>
            <router-link to="/tarifs" class="btn-secondary px-6 py-3">
              Voir les tarifs
            </router-link>
          </div>
        </div>
      </div>

      <!-- Capture du tableau de bord : inclinée en arrivant, elle se redresse au défilement et
           déborde sur la section suivante ; trois pastilles tirées des vrais écrans flottent devant -->
      <div class="heros-scene">
        <div class="heros-halo" aria-hidden="true"></div>
        <div v-reveal="360" class="heros-entree">
        <div class="heros-maquette">
        <div class="browser-window">
          <!-- Chrome Title Bar with macOS buttons + Tab -->
          <div class="browser-titlebar">
            <!-- macOS Traffic Lights -->
            <div class="window-controls">
              <span class="window-control close"></span>
              <span class="window-control minimize"></span>
              <span class="window-control maximize"></span>
            </div>
            <!-- Tabs Container -->
            <div class="browser-tabs-container">
              <div class="browser-tab">
                <img src="/favicon/favicon-96x96.png" alt="" class="browser-tab-icon" />
                <span class="browser-tab-title">Conance - Tableau de bord</span>
                <span class="browser-tab-close">×</span>
              </div>
            </div>
          </div>
          <!-- URL Bar / Toolbar -->
          <div class="browser-toolbar">
            <div class="browser-nav">
              <span class="browser-nav-btn disabled">←</span>
              <span class="browser-nav-btn disabled">→</span>
              <span class="browser-nav-btn">↻</span>
            </div>
            <a href="https://app.conance.io" target="_blank" rel="noopener noreferrer" class="browser-url browser-url-link">
              <span class="browser-url-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <span class="browser-url-text"><span class="url-dimmed">https://</span>app.conance.io</span>
            </a>
          </div>
          <div class="browser-content cursor-pointer" @click="openLightbox(capture('dashboard', sombre), 'Aperçu du tableau de bord Conance')">
            <img
              fetchpriority="high"
              width="2000"
              height="1958"
              :src="capture('dashboard', sombre)"
              alt="Aperçu du tableau de bord Conance"
            />
          </div>
        </div>
        </div>
        </div>

        <div class="flottante flottante--prevision" aria-hidden="true">
          <div v-reveal.scale="900" class="pastille">
            <div class="pastille-entete">
              <span class="pastille-tuile"><i class="pi pi-chart-bar"></i></span>
              <span class="pastille-etiquette">Prévisionnel 2026</span>
            </div>
            <strong class="pastille-chiffre">~{{ prevision.toLocaleString('fr-FR') }} €</strong>
            <div class="mini-barres">
              <span v-for="(hauteur, i) in barresPrevision" :key="i" :class="{ 'a-venir': i >= 9 }" :style="{ height: `${hauteur}%`, '--i': i }"></span>
            </div>
            <div class="mini-mois"><span v-for="(m, i) in 'JFMAMJJASOND'" :key="i">{{ m }}</span></div>
            <div class="mini-legende"><span>Encaissé</span><span class="a-venir">À venir</span></div>
          </div>
        </div>
        <div class="flottante flottante--attendues" aria-hidden="true">
          <div v-reveal.scale="1080" class="pastille">
            <div class="pastille-entete">
              <span class="pastille-tuile pastille-tuile--alerte"><i class="pi pi-bell"></i></span>
              <span class="pastille-etiquette">Commissions attendues</span>
              <span class="pastille-compte">12</span>
            </div>
            <ul class="mini-lignes">
              <li v-for="(ligne, i) in contratsMuets" :key="ligne.numero" :style="{ '--i': i }">
                <span class="mini-contrat"><b>{{ ligne.numero }}</b>{{ ligne.partenaire }}</span>
                <span class="manque">~{{ ligne.manque }} €</span>
              </li>
            </ul>
            <div class="pastille-pied"><strong class="manque">~14 800 €</strong> non perçus (estimation)</div>
          </div>
        </div>
        <div class="flottante flottante--import" aria-hidden="true">
          <div v-reveal.scale="1260" class="pastille">
            <div class="pastille-entete">
              <span class="pastille-tuile"><i class="pi pi-file-excel"></i></span>
              <span>
                <span class="pastille-etiquette">CORUM.xlsx</span>
                <span class="pastille-sous">Configuration Corum appliquée</span>
              </span>
            </div>
            <div class="mini-colonnes"><span v-for="i in 12" :key="i" :style="{ '--i': i }"></span></div>
            <div class="pastille-ok"><i class="pi pi-check-circle"></i>12 colonnes reconnues</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Complémentarité CRM -->
    <section class="apres-heros pb-20 bg-page">
      <div class="container">
        <div v-reveal class="max-w-3xl mx-auto text-center">
          <span class="section-badge"><i class="pi pi-link"></i>Complémentaire de vos outils</span>
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Votre CRM gère vos clients.<br />Conance gère vos commissions.
          </h2>
          <p class="text-lg text-gray-600 mb-4">
            Les logiciels patrimoniaux (CRM, agrégateurs, outils de conformité) couvrent la relation
            client et le suivi des placements. Aucun n'est conçu pour le <strong class="text-gray-900">suivi
            et le contrôle des commissions perçues</strong> par votre cabinet.
          </p>
          <p class="text-lg text-gray-600">
            Conance ne remplace pas votre CRM, il le complète. Conservez vos outils et
            confiez-nous le suivi et l'analyse de vos commissions.
          </p>
        </div>
      </div>
    </section>

    <!-- Monthly cycle: five steps, each one links to its section -->
    <section id="fonctionnalites" class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="text-center mb-14">
          <span class="section-badge"><i class="pi pi-calendar"></i>Le cycle mensuel</span>
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Du bordereau à la déclaration
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Chaque mois, cinq étapes. Conance assure le traitement, vous conservez la maîtrise des décisions.
          </p>
        </div>

        <!-- Les étapes s'allument une à une au défilement, le fil se remplit derrière elles -->
        <div v-scroll:entree="allumerEtapes" class="etapes-scene">
        <div class="etapes-fil" aria-hidden="true"><span class="etapes-fil-plein"></span></div>
        <ol class="etapes">
          <li v-for="(etape, i) in etapes" :key="etape.ancre" v-reveal="i * 90">
            <a :href="`#${etape.ancre}`" :class="['etape', { 'is-active': i < etapesAllumees }]">
              <span class="etape-tuile"><i :class="['pi', etape.icone]"></i></span>
              <span class="etape-corps">
                <span class="etape-num">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="etape-titre heading-font">{{ etape.titre }}</span>
                <span class="etape-texte">{{ etape.texte }}</span>
              </span>
            </a>
          </li>
        </ol>
        </div>
      </div>
    </section>

    <!-- Importer -->
    <section id="import" class="py-20 bg-page">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div v-reveal.left>
            <span class="section-badge"><i class="pi pi-upload"></i>Import</span>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Importez vos bordereaux, quel que soit leur format
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Déposez le bordereau du partenaire : Conance identifie ses colonnes, contrôle les données
              avant toute intégration et mémorise le format pour les bordereaux suivants.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Excel, CSV et PDF : un bordereau PDF est converti en tableau exploitable</span></li>
              <li><i class="pi pi-check-circle"></i><span>Colonnes reconnues, configuration mémorisée par partenaire</span></li>
              <li><i class="pi pi-check-circle"></i><span>Contrôle des données et détection des anomalies avant intégration</span></li>
              <li><i class="pi pi-check-circle"></i><span>Un import peut être annulé intégralement, y compris les contrats et clients qu'il a créés</span></li>
            </ul>
            <router-link to="/guide-rapprochement-bordereaux-commissions" class="lien-fleche mt-6">Lire le guide : rapprocher ses bordereaux <i class="pi pi-arrow-right"></i></router-link>
          </div>
          <Parallaxe>
            <BrowserFrame v-reveal.right="120" :src="capture('import', sombre)" alt="Aperçu de l'import de données" tab="Import" path="import" @zoom="openLightbox" />
          </Parallaxe>
        </div>
      </div>
    </section>

    <!-- Prévoir : pilotage et prévisionnel (section phare) -->
    <section id="previsionnel" class="py-20 bg-deep overflow-hidden relative">
      <div class="container relative">
        <div v-reveal class="text-center max-w-3xl mx-auto mb-12">
          <span class="section-badge section-badge--sombre"><i class="pi pi-chart-line"></i>Pilotage et prévisionnel</span>
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-blanc mb-6">
            Maîtrisez votre prévisionnel, mois par mois
          </h2>
          <p class="text-lg text-brume/90 font-light">
            Conance analyse la périodicité de versement de chaque contrat dans vos bordereaux et en déduit
            vos encaissements prévisionnels jusqu'au 31 décembre, mois par mois et contrat par contrat.
            Un contrat en retard est signalé ; une périodicité mal interprétée se corrige en deux clics.
          </p>
          <router-link to="/guide-prevision-commissions" class="lien-fleche lien-fleche--sombre mt-6">Lire le guide : établir son prévisionnel <i class="pi pi-arrow-right"></i></router-link>
        </div>

        <ul class="points-sombres">
          <li v-reveal>
            <i class="pi pi-wallet"></i>
            <h3>Encours et production</h3>
            <p>L'encours communiqué par vos partenaires et la production de l'année, avec leur évolution mensuelle.</p>
          </li>
          <li v-reveal="120">
            <i class="pi pi-chart-bar"></i>
            <h3>Prévisionnel de l'année</h3>
            <p>L'encaissé et le reste à encaisser jusqu'au 31 décembre, dont la part liée à des contrats en retard.</p>
          </li>
          <li v-reveal="240">
            <i class="pi pi-list"></i>
            <h3>Contrat par contrat</h3>
            <p>Chaque échéance et sa périodicité. Une périodicité peut être corrigée, un contrat exclu du prévisionnel.</p>
          </li>
        </ul>

        <!-- La capture arrive couchée et se redresse en montant ; un halo s'allume derrière -->
        <div v-scroll:entree class="pilotage-scene">
          <div class="pilotage-halo" aria-hidden="true"></div>
          <div class="pilotage-incline">
            <BrowserFrame :src="capture('pilotage', sombre)" alt="Aperçu du pilotage et du prévisionnel" tab="Pilotage" path="pilotage" @zoom="openLightbox" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contrôler : commissions attendues -->
    <section id="attendues" class="py-20 bg-page">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div v-reveal.left>
            <span class="section-badge"><i class="pi pi-bell"></i>Commissions attendues</span>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contrôlez l'exhaustivité de vos commissions
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Un contrat commissionné chaque trimestre et sans versement depuis six mois est signalé
              automatiquement, avec le montant attendu. Une commission annoncée par un partenaire, un droit
              d'entrée par exemple, est enregistrée comme attendue puis rapprochée des bordereaux reçus.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Contrats sans versement au regard de leur périodicité, montants non perçus chiffrés</span></li>
              <li><i class="pi pi-check-circle"></i><span>Commissions attendues rapprochées à l'import, écart signalé en cas de différence de montant</span></li>
              <li><i class="pi pi-check-circle"></i><span>Conance signale, vous décidez : contrat résilié, commission attendue annulée</span></li>
            </ul>
            <router-link to="/guide-commissions-manquantes" class="lien-fleche mt-6">Lire le guide : contrôler l'exhaustivité de ses commissions <i class="pi pi-arrow-right"></i></router-link>
          </div>
          <Parallaxe :force="90">
            <div class="cadre-pastille">
              <BrowserFrame v-reveal.right="120" :src="capture('attendues', sombre)" alt="Aperçu des commissions attendues" tab="Pilotage" path="pilotage" @zoom="openLightbox" />
              <div v-reveal.scale="650" class="pastille pastille--ligne pastille-manque" aria-hidden="true">
                <span class="pastille-tuile pastille-tuile--alerte"><i class="pi pi-bell"></i></span>
                <span>
                  <span class="pastille-titre"><strong class="manque">~14 800 €</strong> non perçus (estimation)</span>
                  <span class="pastille-sous">12 contrats à vérifier</span>
                </span>
              </div>
            </div>
          </Parallaxe>
        </div>
      </div>
    </section>

    <!-- Analyser : commissions -->
    <section id="analyse" class="py-20 bg-warm">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Parallaxe class="order-2 lg:order-1">
            <BrowserFrame v-reveal.left="120" :src="capture('commissions', sombre)" alt="Aperçu de la gestion des commissions" tab="Commissions" path="commissions" @zoom="openLightbox" />
          </Parallaxe>
          <div v-reveal.right class="order-1 lg:order-2">
            <span class="section-badge"><i class="pi pi-money-bill"></i>Commissions</span>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              L'analyse de votre chiffre d'affaires
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Ventilez votre chiffre d'affaires selon les axes utiles au pilotage du cabinet, en quelques clics.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Par conseiller, partenaire, produit et client</span></li>
              <li><i class="pi pi-check-circle"></i><span>Par nature : commissions sur encours (récurrentes) ou droits d'entrée (ponctuels)</span></li>
              <li><i class="pi pi-check-circle"></i><span>Par activité : CIF, courtage, IOBSP…</span></li>
              <li><i class="pi pi-check-circle"></i><span>Par entité juridique, avec l'historique et la traçabilité de chaque commission</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Regulatory figures and accounting export -->
    <section id="declarer" class="py-20 bg-page">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div v-reveal.left>
            <span class="section-badge"><i class="pi pi-file-check"></i>Réglementaire et export comptable</span>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La FRA CIF et l'export comptable, sans ressaisie
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Les données de la fiche de renseignements annuelle sont calculées à partir de vos commissions,
              avec les éléments restant à compléter. Vous vérifiez, vous exportez.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Rétrocessions, honoraires et courtage de l'exercice, clients, contrats, encours au 31 décembre</span></li>
              <li><i class="pi pi-check-circle"></i><span>Rubriques paramétrables selon vos natures de commission</span></li>
              <li><i class="pi pi-check-circle"></i><span>Alerte en cas de donnée manquante, export Excel</span></li>
            </ul>
            <router-link to="/guide-chiffres-fra-cif" class="lien-fleche mt-6">Lire le guide : préparer la FRA CIF <i class="pi pi-arrow-right"></i></router-link>
          </div>
          <Parallaxe>
            <BrowserFrame v-reveal.right="120" :src="capture('reglementaire', sombre)" alt="Aperçu de la FRA CIF préparée par Conance" tab="Réglementaire" path="pilotage/reglementaire" @zoom="openLightbox" />
          </Parallaxe>
        </div>

        <div v-reveal class="carte-export">
          <span class="carte-export-tuile"><i class="pi pi-calculator"></i></span>
          <div class="carte-export-texte">
            <h3 class="heading-font">Export comptable</h3>
            <p>
              Une écriture par commission, imputée au compte de produit de sa nature et au compte du
              partenaire. Le fichier se transmet à votre expert-comptable ou s'importe dans Pennylane.
            </p>
          </div>
          <div class="carte-export-formats">
            <span>FEC</span>
            <span>CSV</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Sécurité et équipe -->
    <section id="securite" class="py-20 bg-warm">
      <div class="container">
        <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center max-w-5xl mx-auto">
          <div>
            <span v-reveal class="section-badge"><i class="pi pi-shield"></i>Sécurité et équipe</span>
            <h2 v-reveal="80" class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Vos données vous appartiennent
            </h2>
            <ul class="garanties">
              <li v-reveal="160">
                <span class="garantie-tuile"><i class="pi pi-lock"></i></span>
                <div>
                  <h3>Double authentification</h3>
                  <p>Par code, clé d'accès (Touch ID, Face ID, clé physique) ou e-mail, pouvant être rendue obligatoire pour tout le cabinet.</p>
                </div>
              </li>
              <li v-reveal="260">
                <span class="garantie-tuile"><i class="pi pi-users"></i></span>
                <div>
                  <h3>Rôles et permissions</h3>
                  <p>Des droits d'accès définis par rôle, fonctionnalité par fonctionnalité.</p>
                </div>
              </li>
              <li v-reveal="360">
                <span class="garantie-tuile"><i class="pi pi-server"></i></span>
                <div>
                  <h3>Données hébergées en France</h3>
                  <p>L'application, la base, les fichiers et les sauvegardes.</p>
                </div>
              </li>
              <li v-reveal="460">
                <span class="garantie-tuile"><i class="pi pi-mobile"></i></span>
                <div>
                  <h3>Accessible sur mobile</h3>
                  <p>Les écrans du quotidien, adaptés au téléphone.</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- Le téléphone monte plus vite que la page et se redresse -->
          <div v-scroll class="telephone-scene">
            <div class="telephone-halo" aria-hidden="true"></div>
            <div class="telephone-couche">
              <div v-reveal.scale="200" class="telephone">
                <img loading="lazy" decoding="async" width="2000" height="4277" :src="capture('mobile', sombre)" alt="Le tableau de bord Conance sur téléphone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Témoignage -->
    <!-- DÉSACTIVÉE : avis fictifs. Pour réactiver, retirer le <template v-if="false"> / </template> qui entourent la section, et remplacer les témoignages factices (tableau `testimonials`) par les vrais avis. -->
    <template v-if="false">
    <section class="py-10 overflow-hidden bg-deep">
      <div class="testimonial-marquee relative">
        <div class="marquee-track flex items-start py-2">
          <div v-for="(t, i) in marqueeTestimonials" :key="i" class="shrink-0 w-[340px] md:w-[440px] flex mr-5" :aria-hidden="i >= testimonials.length ? 'true' : null">
            <div class="flex flex-col h-[330px] md:h-[285px] w-full bg-white rounded-2xl p-6 overflow-hidden" style="box-shadow: 0 2px 4px rgba(6,41,36,0.04), 0 10px 22px -8px rgba(6,41,36,0.16);">
              <span class="heading-font text-4xl leading-none select-none pointer-events-none" style="color: rgba(35, 176, 134, 0.22);">&ldquo;</span>

              <blockquote class="text-[15px] text-gray-700 leading-relaxed mt-2 mb-5">
                {{ quotePreview(t.quote) }}<button v-if="isLongQuote(t.quote)" type="button" @click="openTestimonialModal(t)" class="read-more-link">Lire l'avis complet</button>
              </blockquote>

              <!-- Auteur -->
              <div class="flex items-center pt-5 mt-auto border-t border-gray-100">
                <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-blanc text-xs font-semibold shrink-0" style="background-color: #062924;">
                  {{ t.initials }}
                </div>
                <div class="text-left min-w-0">
                  <p class="font-semibold text-gray-900 text-sm leading-tight truncate">{{ t.name }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ t.role }} <span class="italic">(exemple)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </template>

    <!-- Section Externalisation / Prestataires -->
    <section class="py-20 bg-page">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Illustration schématique (gauche) -->
          <div v-reveal.left class="flex items-center justify-center">
            <div class="w-full max-w-md">
              <!-- Prestataire card -->
              <div class="bg-white rounded-xl shadow-lg border-2 border-primary-700 p-6 mb-4">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 tuile-douce">
                    <i class="pi pi-building text-lg"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Prestataire</h4>
                    <p class="text-sm text-gray-500">Espace d'administration centralisé</p>
                  </div>
                </div>
                <div class="border-t border-gray-100 pt-4">
                  <p class="text-xs text-gray-400 uppercase font-medium mb-3">Cabinets gérés</p>
                  <div class="space-y-2">
                    <div v-reveal.left="300" class="flex items-center p-2 rounded-lg bg-warm">
                      <div class="w-8 h-8 rounded-md flex items-center justify-center mr-3 tuile-douce">
                        <i class="pi pi-briefcase text-sm"></i>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Cabinet Alpha</span>
                    </div>
                    <div v-reveal.left="440" class="flex items-center p-2 rounded-lg bg-warm">
                      <div class="w-8 h-8 rounded-md flex items-center justify-center mr-3 tuile-douce">
                        <i class="pi pi-briefcase text-sm"></i>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Cabinet Beta</span>
                    </div>
                    <div v-reveal.left="580" class="flex items-center p-2 rounded-lg bg-warm">
                      <div class="w-8 h-8 rounded-md flex items-center justify-center mr-3 tuile-douce">
                        <i class="pi pi-briefcase text-sm"></i>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Cabinet Gamma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Texte (droite) -->
          <div v-reveal.right>
            <span class="section-badge"><i class="pi pi-sitemap"></i>Multi-Cabinets</span>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vous traitez les commissions de plusieurs cabinets ?
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              De nombreux cabinets de conseil en gestion de patrimoine confient le traitement
              de leurs commissions à des prestataires spécialisés.
              Conance propose des offres <strong>Multi-Cabinets</strong> conçues spécifiquement
              pour ces prestataires, leur permettant de centraliser la gestion des commissions
              de tous leurs cabinets clients depuis un espace unifié.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Un seul abonnement pour gérer plusieurs cabinets</span></li>
              <li><i class="pi pi-check-circle"></i><span>Chaque cabinet dispose de son propre espace isolé et sécurisé</span></li>
              <li><i class="pi pi-check-circle"></i><span>Basculez entre vos cabinets en un clic</span></li>
              <li><i class="pi pi-check-circle"></i><span>Crédits IA mis en commun entre les cabinets du groupe</span></li>
              <li><i class="pi pi-check-circle"></i><span>Conçu pour les prestataires de back-office externalisé</span></li>
            </ul>
            <div class="mt-8">
              <router-link to="/tarifs#multi-cabinets" class="btn-primary px-6 py-3 inline-block">Voir les offres Multi-Cabinets</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guides -->
    <section id="guides" class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="text-center mb-12">
          <span class="section-badge"><i class="pi pi-book"></i>Guides</span>
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vos commissions, cas par cas
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Les situations que les cabinets rencontrent, et ce que Conance y change.
          </p>
        </div>
        <GuideCards :limit="4" />
        <p class="text-center mt-10">
          <router-link to="/guides" class="lien-fleche">Voir tous les guides <i class="pi pi-arrow-right"></i></router-link>
        </p>
      </div>
    </section>

    <!-- FAQ: same text as the FAQPage schema (content/faq.ts) -->
    <section id="questions" class="pt-20 pb-10 bg-page">
      <div class="container">
        <div v-reveal class="text-center mb-12">
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <details v-for="item in faq" :key="item.question" class="faq-item">
            <summary>
              <h3>{{ item.question }}</h3>
              <i class="pi pi-chevron-down" aria-hidden="true"></i>
            </summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="pt-10 pb-20 bg-page">
      <div class="container">
        <aside v-reveal class="content-cta">
          <div>
            <h2 class="heading-font">Essayez Conance sur un vrai bordereau</h2>
            <p>Gratuit jusqu'à 5 000 commissions et 3 partenaires.</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="https://app.conance.io/register?plan=gratuit" class="btn-accent px-6 py-3">Démarrer gratuitement</a>
            <router-link to="/contact" class="btn-secondary px-6 py-3">Nous contacter</router-link>
          </div>
        </aside>
      </div>
    </section>

    <SiteFooter />

    <!-- Modale Témoignage complet -->
    <Transition name="lightbox">
      <div v-if="testimonialModal" class="fixed inset-0 z-60 flex items-center justify-center p-4" style="background: rgba(6,41,36,0.55);" @click="closeTestimonialModal">
        <div class="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl" @click.stop>
          <button type="button" @click="closeTestimonialModal" aria-label="Fermer" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors">
            <i class="pi pi-times"></i>
          </button>
          <span class="heading-font text-5xl leading-none select-none pointer-events-none" style="color: rgba(35, 176, 134, 0.25);">&ldquo;</span>
          <blockquote class="text-lg text-gray-800 leading-relaxed mt-2 mb-6">
            {{ testimonialModal.quote }}
          </blockquote>
          <div class="flex items-center pt-5 border-t border-gray-100">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mr-3 text-blanc text-sm font-semibold shrink-0" style="background-color: #062924;">
              {{ testimonialModal.initials }}
            </div>
            <div class="text-left">
              <p class="font-semibold text-gray-900 text-sm leading-tight">{{ testimonialModal.name }}</p>
              <p class="text-xs text-gray-500">{{ testimonialModal.role }} <span class="italic">(exemple)</span></p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Lightbox -->
    <Transition name="lightbox">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">
          <i class="pi pi-times"></i>
        </button>
        <div class="lightbox-content">
          <img :src="lightboxImage" :alt="lightboxAlt" @click="closeLightbox" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import BrowserFrame from '../components/BrowserFrame.vue'
import Parallaxe from '../components/Parallaxe.vue'
import GuideCards from '../components/GuideCards.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteNav from '../components/SiteNav.vue'
import { capture, sombre } from '../theme'
import { faq } from '../content/faq'

// Prévisionnel du cabinet de démonstration (capture Pilotage), en k€ de janvier à décembre :
// encaissé jusqu'en septembre, à venir ensuite
const PREVISION_MENSUELLE = [15, 17, 52, 22, 30, 80, 16, 17, 62, 12, 17, 85]
const PREVISION_TOTALE = 424490

export default {
  name: 'Home',
  components: { BrowserFrame, Parallaxe, GuideCards, SiteFooter, SiteNav },
  setup() {
    return { capture, sombre, faq }
  },
  data() {
    return {
      navbarScrollHandler: null,
      resizeHandler: null,
      navbarDark: true,
      // Monthly cycle: each step links to its section, in page order
      etapes: [
        { ancre: 'import', icone: 'pi-upload', titre: 'Importer', texte: 'Excel, CSV ou PDF, le format de chaque partenaire mémorisé.' },
        { ancre: 'previsionnel', icone: 'pi-chart-line', titre: 'Prévoir', texte: "Les encaissements attendus jusqu'au 31 décembre, contrat par contrat." },
        { ancre: 'attendues', icone: 'pi-bell', titre: 'Contrôler', texte: "L'exhaustivité des commissions perçues et les écarts avec les commissions attendues." },
        { ancre: 'analyse', icone: 'pi-chart-pie', titre: 'Analyser', texte: "Le chiffre d'affaires par conseiller, partenaire, produit, nature ou entité." },
        { ancre: 'declarer', icone: 'pi-file-check', titre: 'Déclarer', texte: "Les données de la FRA CIF et l'export destiné à votre expert-comptable." }
      ],
      etapesAllumees: 0,
      barresPrevision: PREVISION_MENSUELLE.map((v) => Math.round((v / Math.max(...PREVISION_MENSUELLE)) * 100)),
      prevision: PREVISION_TOTALE,
      // Trois contrats muets de la capture « Commissions attendues » du cabinet de démonstration
      contratsMuets: [
        { numero: 'CTR481471', partenaire: 'Cardif', manque: '1 680' },
        { numero: 'A2P444610', partenaire: 'Generali Vie', manque: '1 180' },
        { numero: 'CTR591137', partenaire: 'Cardif', manque: '1 110' }
      ],
      lightboxOpen: false,
      lightboxImage: '',
      lightboxAlt: '',
      testimonialModal: null,
      // TODO: remplacer ces témoignages factices par les vrais avis clients avant la mise en production
      testimonials: [
        {
          initials: 'ML',
          name: 'Marie Lambert',
          role: 'Dirigeante — Cabinet Patrimoine Conseil',
          rating: 5,
          quote: "Avant Conance, je passais deux jours par mois à rapprocher mes relevés de commissions sous Excel. Aujourd'hui c'est l'affaire d'une heure, et je sais enfin précisément ce que chaque partenaire me verse, par conseiller, par activité et par produit. Un confort de pilotage que je n'aurais pas imaginé."
        },
        {
          initials: 'TR',
          name: 'Thomas Renaud',
          role: 'Associé — Renaud Gestion Privée',
          rating: 5,
          quote: "Le suivi par activité CIF et Courtage est limpide. Je pilote ma marge par conseiller, et non plus seulement par produit, en quelques clics — fini les tableaux croisés à reconstruire chaque trimestre."
        },
        {
          initials: 'SD',
          name: 'Sophie Dumas',
          role: 'CGP — Cabinet Horizon Patrimoine',
          rating: 5,
          quote: "Je dépose le relevé du partenaire, les colonnes sont reconnues automatiquement, je n'ai plus qu'à valider. Résultat concret : le temps de saisie mensuel divisé par cinq."
        }
      ]
    }
  },
  computed: {
    // Liste dupliquée pour une boucle de défilement continue et sans rupture
    marqueeTestimonials() {
      // Répété 4× : la piste couvre largement la fenêtre, la boucle reste sans trou (translateX -50%)
      return [
        ...this.testimonials,
        ...this.testimonials,
        ...this.testimonials,
        ...this.testimonials
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initNavbarScroll()
    })
    this.compterPrevision()
  },
  beforeUnmount() {
    if (this.navbarScrollHandler) {
      window.removeEventListener('scroll', this.navbarScrollHandler)
    }
  },
  methods: {
    // Le total du prévisionnel défile jusqu'à sa valeur quand sa pastille apparaît
    compterPrevision() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const debut = performance.now() + 900
      const duree = 1400
      this.prevision = 0
      const pas = (maintenant) => {
        const t = Math.min(1, Math.max(0, (maintenant - debut) / duree))
        const adouci = 1 - Math.pow(1 - t, 3)
        this.prevision = Math.round((PREVISION_TOTALE * adouci) / 10) * 10
        if (t < 1) requestAnimationFrame(pas)
      }
      requestAnimationFrame(pas)
    },
    allumerEtapes(p) {
      this.etapesAllumees = Math.min(this.etapes.length, Math.floor(p * (this.etapes.length + 1)))
    },
    initNavbarScroll() {
      // Get the hero section element
      const heroSection = this.$el.querySelector('section')
      if (!heroSection) return

      this.navbarScrollHandler = () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        // Switch to light navbar when hero section is above the navbar (with some offset)
        this.navbarDark = heroBottom > 70
      }

      window.addEventListener('scroll', this.navbarScrollHandler, { passive: true })
      this.navbarScrollHandler()
    },
    openLightbox(imageSrc, alt) {
      this.lightboxImage = imageSrc
      this.lightboxAlt = alt
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    isLongQuote(quote) {
      return quote.length > 210
    },
    quotePreview(quote) {
      if (!this.isLongQuote(quote)) return quote
      let cut = quote.slice(0, 170)
      const lastSpace = cut.lastIndexOf(' ')
      if (lastSpace > 0) cut = cut.slice(0, lastSpace)
      return cut + '… '
    },
    openTestimonialModal(testimonial) {
      this.testimonialModal = testimonial
      document.body.style.overflow = 'hidden'
    },
    closeTestimonialModal() {
      this.testimonialModal = null
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
/* Marquee témoignages : défilement horizontal continu, en pause au survol */
.testimonial-marquee {
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
}
.marquee-track {
  width: max-content;
  animation: testimonial-marquee-scroll 45s linear infinite;
}
.testimonial-marquee:hover .marquee-track {
  animation-play-state: paused;
}
@keyframes testimonial-marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

/* Lien inline « Lire l'avis complet » */
.read-more-link {
  display: inline;
  color: #1a8a6a;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  transition: color 0.2s ease;
}
.read-more-link:hover {
  color: #0f6b50;
}
</style> 
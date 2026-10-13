<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section v-scroll:page class="heros bg-deep">
      <!-- Floating Navigation -->
      <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div :class="['max-w-6xl mx-auto transition-all duration-300', navbarDark ? 'navbar-floating-dark' : 'navbar-floating-light']">
          <div class="flex justify-between items-center h-14 px-4 sm:px-6">
            <div class="flex items-center">
              <a href="#" @click.prevent="scrollToTop" class="flex items-center">
                <img :src="navbarDark || sombre ? '/logo-conance-white.svg' : '/logo-conance.svg'" alt="Conance" class="h-7 w-auto" />
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#fonctionnalites" :class="['transition-colors text-sm', navbarDark ? 'text-brume hover:text-blanc' : 'text-gray-600 hover:text-primary-700']">Fonctionnalités</a>
              <a href="#tarifs" :class="['transition-colors text-sm', navbarDark ? 'text-brume hover:text-blanc' : 'text-gray-600 hover:text-primary-700']">Tarifs</a>
              <a href="#contact" :class="['transition-colors text-sm', navbarDark ? 'text-brume hover:text-blanc' : 'text-gray-600 hover:text-primary-700']">Contact</a>
            </div>
            <div class="flex items-center space-x-3">
              <a href="https://app.conance.io/login" :class="navbarDark ? 'btn-nav-floating-dark' : 'btn-nav-floating-light'">Se connecter</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Text content with container constraint -->
      <div class="container relative pt-28">
        <div class="text-center max-w-4xl mx-auto">
          <h1 v-reveal class="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-blanc mb-6 leading-tight md:leading-none">
            Simplifiez la gestion de vos <span class="texte-degrade">commissions</span>
          </h1>
          <p v-reveal="120" class="text-lg md:text-xl text-brume/90 mb-10 max-w-2xl mx-auto font-light">
            Le back-office des commissions des cabinets de gestion de patrimoine&nbsp;:
            importez vos bordereaux, repérez ce qui manque, prévoyez ce qui va tomber.
          </p>
          <div v-reveal="240" class="flex flex-col sm:flex-row justify-center gap-3 mb-12 md:mb-16">
            <a href="https://app.conance.io/register?plan=gratuit" class="btn-accent px-6 py-3">
              Démarrer gratuitement
            </a>
            <a href="#tarifs" class="btn-secondary px-6 py-3">
              Voir les tarifs
            </a>
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
                <img src="/favicon/favicon.svg" alt="" class="browser-tab-icon" />
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
            <div class="pastille-pied"><strong class="manque">~14 800 €</strong> de manque estimé</div>
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
            Les logiciels patrimoniaux (CRM, agrégateurs d'encours, outils de conformité) savent
            tout sur vos clients et leurs placements. Mais aucun ne tient la <strong class="text-gray-900">comptabilité
            de l'argent qui rentre</strong> dans votre cabinet.
          </p>
          <p class="text-lg text-gray-600">
            Conance ne remplace pas votre CRM : il prend le relais là où il s'arrête. Gardez vos outils,
            confiez-nous le suivi et l'analyse de vos commissions.
          </p>
        </div>
      </div>
    </section>

    <!-- Le mois d'un cabinet : cinq temps, chacun renvoie à sa section -->
    <section id="fonctionnalites" class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="text-center mb-14">
          <span class="section-badge"><i class="pi pi-calendar"></i>Le mois d'un cabinet</span>
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Du bordereau à la déclaration
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Chaque mois, les mêmes cinq temps. Conance fait le travail de fond, vous gardez les décisions.
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
              Importez les bordereaux tels qu'ils arrivent
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Déposez le fichier du partenaire : Conance reconnaît ses colonnes, signale les erreurs
              avant d'écrire quoi que ce soit et retient le format pour la fois suivante.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Excel, CSV et PDF : un relevé PDF devient un tableau importable</span></li>
              <li><i class="pi pi-check-circle"></i><span>Colonnes reconnues, configuration mémorisée par partenaire</span></li>
              <li><i class="pi pi-check-circle"></i><span>Validation et détection des erreurs avant l'import</span></li>
              <li><i class="pi pi-check-circle"></i><span>Un import raté s'annule en entier, contrats et clients créés compris</span></li>
            </ul>
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
            Sachez ce qui va tomber, et quand
          </h2>
          <p class="text-lg text-brume/90 font-light">
            Conance lit le rythme de chaque contrat dans vos bordereaux et en déduit ce que vous allez
            encaisser d'ici décembre, mois par mois et contrat par contrat. Un contrat en retard est
            signalé, un rythme mal compris se corrige en deux clics.
          </p>
        </div>

        <ul class="points-sombres">
          <li v-reveal>
            <i class="pi pi-wallet"></i>
            <h3>Encours et production</h3>
            <p>L'encours retenu par vos partenaires et la production de l'année, avec leur évolution mois par mois.</p>
          </li>
          <li v-reveal="120">
            <i class="pi pi-chart-bar"></i>
            <h3>Prévisionnel de l'année</h3>
            <p>L'encaissé et l'à-venir jusqu'en décembre, avec la part qui repose sur des contrats en retard.</p>
          </li>
          <li v-reveal="240">
            <i class="pi pi-list"></i>
            <h3>Contrat par contrat</h3>
            <p>Chaque échéance avec son rythme. Un rythme se corrige, un contrat se retire du prévisionnel.</p>
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
              Repérez la commission qui n'est pas venue
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Un contrat qui payait tous les trimestres et se tait depuis six mois remonte tout seul,
              avec ce qu'il aurait dû verser. Une commission que l'on vous annonce, un droit d'entrée
              par exemple, se déclare et se rapproche de ce qui arrive dans les bordereaux.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Contrats muets au regard de leur propre rythme, versements manqués chiffrés</span></li>
              <li><i class="pi pi-check-circle"></i><span>Commissions annoncées rapprochées à l'import, écart signalé si le montant diffère</span></li>
              <li><i class="pi pi-check-circle"></i><span>Conance signale, vous tranchez : contrat résilié, attente annulée</span></li>
            </ul>
          </div>
          <Parallaxe :force="90">
            <div class="cadre-pastille">
              <BrowserFrame v-reveal.right="120" :src="capture('attendues', sombre)" alt="Aperçu des commissions attendues" tab="Pilotage" path="pilotage" @zoom="openLightbox" />
              <div v-reveal.scale="650" class="pastille pastille--ligne pastille-manque" aria-hidden="true">
                <span class="pastille-tuile pastille-tuile--alerte"><i class="pi pi-bell"></i></span>
                <span>
                  <span class="pastille-titre"><strong class="manque">~14 800 €</strong> de manque estimé</span>
                  <span class="pastille-sous">12 contrats à regarder</span>
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
              La comptabilité analytique de votre chiffre d'affaires
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Bien plus qu'un simple suivi : ventilez l'ensemble de votre chiffre d'affaires selon
              tous les axes qui comptent pour piloter votre cabinet, et obtenez la réponse en quelques clics.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Par conseiller, partenaire, produit et client</span></li>
              <li><i class="pi pi-check-circle"></i><span>Par nature : récurrent (encours) ou ponctuel (droits d'entrée)</span></li>
              <li><i class="pi pi-check-circle"></i><span>Par activité : CIF, Courtage, IOBSP…</span></li>
              <li><i class="pi pi-check-circle"></i><span>Par entité comptable, avec historique complet et traçabilité</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Déclarer et comptabiliser -->
    <section id="declarer" class="py-20 bg-page">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div v-reveal.left>
            <span class="section-badge"><i class="pi pi-file-check"></i>Déclarer et comptabiliser</span>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La FRA CIF et la comptabilité, sans ressaisie
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Les chiffres de la fiche de renseignements annuels se calculent à partir de vos commissions,
              avec ce qu'il reste à compléter. Vous relisez, vous exportez.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Rétrocessions, honoraires et courtage de l'exercice, clients, contrats, encours au 31 décembre</span></li>
              <li><i class="pi pi-check-circle"></i><span>Rubriques à régler selon vos natures de commission</span></li>
              <li><i class="pi pi-check-circle"></i><span>Alerte quand une donnée manque, export Excel</span></li>
            </ul>
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
              Une écriture par commission, sur un compte de produit choisi selon la nature et sur le compte
              du partenaire qui l'a versée. À remettre à votre expert-comptable ou à importer dans Pennylane.
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
              Vos données restent les vôtres
            </h2>
            <ul class="garanties">
              <li v-reveal="160">
                <span class="garantie-tuile"><i class="pi pi-lock"></i></span>
                <div>
                  <h3>Double authentification</h3>
                  <p>Par code, clé d'accès (Touch ID, Face ID, clé physique) ou e-mail, imposable à tout le cabinet.</p>
                </div>
              </li>
              <li v-reveal="260">
                <span class="garantie-tuile"><i class="pi pi-users"></i></span>
                <div>
                  <h3>Rôles et permissions</h3>
                  <p>Chacun voit et modifie ce que son rôle permet, fonctionnalité par fonctionnalité.</p>
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
                  <h3>Aussi sur téléphone</h3>
                  <p>Les pages du quotidien à portée de main, avec une barre d'onglets.</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- Le téléphone monte plus vite que la page et se redresse -->
          <div v-scroll class="telephone-scene">
            <div class="telephone-halo" aria-hidden="true"></div>
            <div class="telephone-couche">
              <div v-reveal.scale="200" class="telephone">
                <img :src="capture('mobile', sombre)" alt="Le tableau de bord Conance sur téléphone" loading="lazy" />
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
              Vous gérez les commissions pour plusieurs cabinets ?
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              De nombreux cabinets de gestion de patrimoine font le choix d'externaliser
              le traitement de leurs commissions auprès de prestataires spécialisés.
              Conance propose des offres <strong>Multi-Cabinets</strong> conçues spécifiquement
              pour ces prestataires, leur permettant de centraliser la gestion des commissions
              de tous leurs cabinets clients depuis un espace unifié.
            </p>
            <ul class="liste-points">
              <li><i class="pi pi-check-circle"></i><span>Un seul abonnement pour gérer plusieurs cabinets</span></li>
              <li><i class="pi pi-check-circle"></i><span>Chaque cabinet dispose de son propre espace isolé et sécurisé</span></li>
              <li><i class="pi pi-check-circle"></i><span>Basculez entre vos cabinets en un clic</span></li>
              <li><i class="pi pi-check-circle"></i><span>Crédits IA mis en commun entre les cabinets du groupe</span></li>
              <li><i class="pi pi-check-circle"></i><span>Idéal pour les prestataires qui gèrent l'externalisation des commissions</span></li>
            </ul>
            <div class="mt-8">
              <a href="#tarifs" class="btn-primary px-6 py-3 inline-block" @click.prevent="showGroupPricing">Voir les offres Multi-Cabinets</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifs Section -->
    <section id="tarifs" class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="text-center mb-12">
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tarifs transparents
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Des offres adaptées aux cabinets comme aux prestataires multi-cabinets
          </p>
        </div>

        <!-- Sélecteurs tarifs : onglets centrés, toggle périodicité à droite -->
        <div class="relative mb-10">
          <!-- Onglets Cabinet / Multi-Cabinets (centrés) -->
          <div class="flex justify-center">
            <div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-xs">
              <button
                :class="['px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200', pricingTab === 'cabinet' ? 'bg-action text-blanc shadow-xs' : 'text-gray-600 hover:text-gray-900']"
                @click="pricingTab = 'cabinet'"
              >
                <i class="pi pi-building mr-2"></i>Cabinet
              </button>
              <button
                :class="['px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200', pricingTab === 'group' ? 'bg-action text-blanc shadow-xs' : 'text-gray-600 hover:text-gray-900']"
                @click="pricingTab = 'group'"
              >
                <i class="pi pi-sitemap mr-2"></i>Multi-Cabinets
              </button>
            </div>
          </div>

          <!-- Toggle coulissant Mensuel / Annuel (à droite sur desktop, centré sous les onglets sur mobile) -->
          <div class="flex justify-center mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <div class="inline-flex items-center gap-3 select-none">
              <span
                :class="['text-sm cursor-pointer transition-colors', billingPeriod === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500']"
                @click="billingPeriod = 'monthly'"
              >Mensuel</span>
              <button
                type="button"
                role="switch"
                :aria-checked="billingPeriod === 'annual'"
                aria-label="Basculer entre facturation mensuelle et annuelle"
                :class="['relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200', billingPeriod === 'annual' ? 'bg-action' : 'bg-gray-300']"
                @click="billingPeriod = billingPeriod === 'annual' ? 'monthly' : 'annual'"
              >
                <span :class="['inline-block h-4 w-4 transform rounded-full bg-blanc shadow-sm transition-transform duration-200', billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1']"></span>
              </button>
              <span
                :class="['text-sm cursor-pointer transition-colors', billingPeriod === 'annual' ? 'text-gray-900 font-semibold' : 'text-gray-500']"
                @click="billingPeriod = 'annual'"
              >Annuel</span>
              <span class="px-2 py-0.5 rounded-full text-xs font-medium tuile-douce">2 mois offerts</span>
            </div>
          </div>
        </div>

        <!-- Plans Cabinet -->
        <div v-show="pricingTab === 'cabinet'" class="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
          <!-- Plan Gratuit -->
          <div v-reveal="0" class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Gratuit</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour découvrir Conance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">0€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>5 000 commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>3 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>3 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>1 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Support par e-mail</span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=gratuit" class="w-full btn-secondary-light text-center block mt-auto text-sm">Commencer gratuitement</a>
          </div>

          <!-- Plan Starter -->
          <div v-reveal="80" class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les petites structures</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(100) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(100) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>500 000 commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>3 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Support par e-mail</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=starter" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Standard -->
          <div v-reveal="160" class="bg-white rounded-lg shadow-lg p-6 border-2 border-primary-700 relative flex flex-col">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-action text-blanc px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Standard</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les cabinets en croissance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(200) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(200) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>2 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>25 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>50 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Support par e-mail</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=standard" class="w-full btn-primary-card text-center block mt-auto">Choisir ce plan</a>
          </div>

          <!-- Plan Premium -->
          <div v-reveal="240" class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les grands cabinets</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(400) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(400) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>8 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>75 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>25 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>100 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Support par e-mail</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=premium" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Entreprise -->
          <div v-reveal="320" class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Entreprise</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les plus exigeants</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(800) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(800) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>20 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Partenaires illimités</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>100 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>300 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Support dédié</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-star text-primary-700 mr-2"></i>
                <span class="text-primary-700 font-medium">Configuration dédiée</span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=entreprise" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>
        </div>

        <!-- Plans Multi-Cabinets -->
        <div v-show="pricingTab === 'group'">
          <p class="text-center text-gray-500 mb-8 max-w-3xl mx-auto">
            Pour les prestataires qui gèrent les commissions de cabinets ayant choisi d'externaliser leur gestion. Chaque cabinet dispose de son propre espace avec des quotas dédiés.
          </p>
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            <!-- Groupe Starter -->
            <div v-reveal="0" class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
              <div class="text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Groupe Starter</h3>
                <p class="text-gray-600 mb-4 text-sm">Pour débuter en multi-cabinets</p>
                <div class="mb-4">
                  <span class="text-3xl font-bold text-gray-900">{{ displayPrice(180) }}€</span>
                  <span class="text-gray-600">/mois</span>
                  <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(180) }}€/an · 2 mois offerts</p>
                </div>
              </div>
              <ul class="space-y-2 mb-6 grow text-sm">
                <li class="flex items-center">
                  <i class="pi pi-building text-primary-700 mr-2"></i>
                  <span><strong>3 cabinets</strong> inclus</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>10 Go de stockage par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>3 utilisateurs par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>500 000 commissions par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>10 partenaires par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>Imports, Exports et Rapports</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                  <span><strong>Fonctionnalités IA</strong></span>
                </li>
              </ul>
              <a href="https://app.conance.io/register?plan=groupe+starter" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
            </div>

            <!-- Groupe Standard -->
            <div v-reveal="80" class="bg-white rounded-lg shadow-lg p-6 border-2 border-primary-700 relative flex flex-col">
              <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span class="bg-action text-blanc px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
              </div>
              <div class="text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Groupe Standard</h3>
                <p class="text-gray-600 mb-4 text-sm">Pour les prestataires en croissance</p>
                <div class="mb-4">
                  <span class="text-3xl font-bold text-gray-900">{{ displayPrice(550) }}€</span>
                  <span class="text-gray-600">/mois</span>
                  <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(550) }}€/an · 2 mois offerts</p>
                </div>
              </div>
              <ul class="space-y-2 mb-6 grow text-sm">
                <li class="flex items-center">
                  <i class="pi pi-building text-primary-700 mr-2"></i>
                  <span><strong>10 cabinets</strong> inclus</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>10 Go de stockage par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>3 utilisateurs par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>500 000 commissions par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>10 partenaires par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>Imports, Exports et Rapports</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                  <span><strong>Fonctionnalités IA</strong></span>
                </li>
              </ul>
              <a href="https://app.conance.io/register?plan=groupe+standard" class="w-full btn-primary-card text-center block mt-auto">Choisir ce plan</a>
            </div>

            <!-- Groupe Premium -->
            <div v-reveal="160" class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
              <div class="text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Groupe Premium</h3>
                <p class="text-gray-600 mb-4 text-sm">Pour les grands prestataires</p>
                <div class="mb-4">
                  <span class="text-3xl font-bold text-gray-900">{{ displayPrice(1000) }}€</span>
                  <span class="text-gray-600">/mois</span>
                  <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(1000) }}€/an · 2 mois offerts</p>
                </div>
              </div>
              <ul class="space-y-2 mb-6 grow text-sm">
                <li class="flex items-center">
                  <i class="pi pi-building text-primary-700 mr-2"></i>
                  <span><strong>25 cabinets</strong> inclus</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>10 Go de stockage par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>3 utilisateurs par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>500 000 commissions par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>10 partenaires par cabinet</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-check text-primary-700 mr-2"></i>
                  <span>Imports, Exports et Rapports</span>
                </li>
                <li class="flex items-center">
                  <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                  <span><strong>Fonctionnalités IA</strong></span>
                </li>
              </ul>
              <a href="https://app.conance.io/register?plan=groupe+premium" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
            </div>
          </div>

          <p class="text-center text-gray-400 text-sm mt-6">
            Besoin de plus de cabinets ? <a href="#contact" class="text-primary-700 hover:underline">Contactez-nous</a> pour une offre sur mesure.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="text-center mb-16">
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Vous avez des questions ? Notre équipe est là pour vous aider.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Informations de contact</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <i class="pi pi-envelope text-primary-700 mr-4"></i>
                <span>contact@conance.io</span>
              </div>
              <div class="flex items-center">
                <i class="pi pi-phone text-primary-700 mr-4"></i>
                <span>06 99 96 46 97</span>
              </div>
              <div class="flex items-center">
                <i class="pi pi-map-marker text-primary-700 mr-4"></i>
                <span>4 Quai François Mitterrand, 44200 Nantes</span>
              </div>
            </div>
          </div>

          <div>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input type="text" id="name" v-model="form.name" required 
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" v-model="form.email" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <input type="text" id="company" v-model="form.company"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="phone" v-model="form.phone"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" v-model="form.message" rows="5" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                          placeholder="Décrivez votre projet ou vos besoins..."></textarea>
              </div>

              <!-- Message de statut -->
              <div v-if="statusMessage" 
                   :class="[
                     'p-4 rounded-lg border',
                     statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-900' : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900'
                   ]">
                <div v-if="statusType === 'error'" class="whitespace-pre-line">{{ statusMessage }}</div>
                <div v-else>{{ statusMessage }}</div>
              </div>
              
              <button type="submit" class="w-full btn-primary-card" :disabled="isSubmitting">
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-blanc py-12 bg-deep">
      <div class="container">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <img src="/logo-conance-white.svg" alt="Conance" class="h-8 w-auto" />
            </div>
            <p class="text-brume-2">
              Solution SaaS de gestion des commissions pour cabinets de gestion de patrimoine.
            </p>
            <ThemeSelector sur-sombre class="mt-6" />
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Produit</h4>
            <ul class="space-y-2 text-brume-2">
              <li><a href="#fonctionnalites" class="hover:text-blanc transition-colors">Fonctionnalités</a></li>
              <li><a href="#tarifs" class="hover:text-blanc transition-colors">Tarifs</a></li>
              <li><a href="https://app.conance.io/login" class="hover:text-blanc transition-colors">Se connecter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-brume-2">
              <li><a href="https://docs.conance.io" target="_blank" class="hover:text-blanc transition-colors">Documentation</a></li>
              <li><a href="#contact" class="hover:text-blanc transition-colors">Contact</a></li>
              <li><a href="mailto:contact@conance.io" class="hover:text-blanc transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Légal</h4>
            <ul class="space-y-2 text-brume-2">
              <li><router-link to="/cgu" class="hover:text-blanc transition-colors">CGU</router-link></li>
              <li><router-link to="/mentions-legales" class="hover:text-blanc transition-colors">Mentions légales</router-link></li>
              <li><router-link to="/politique-confidentialite" class="hover:text-blanc transition-colors">Politique de confidentialité</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="pt-8 mt-8 text-center text-brume-2">
          <p>&copy; {{ currentYear }} Conance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>

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
import { contactService } from '../services/api'
import BrowserFrame from '../components/BrowserFrame.vue'
import Parallaxe from '../components/Parallaxe.vue'
import ThemeSelector from '../components/ThemeSelector.vue'
import { capture, sombre } from '../theme'

// Prévisionnel du cabinet de démonstration (capture Pilotage), en k€ de janvier à décembre :
// encaissé jusqu'en septembre, à venir ensuite
const PREVISION_MENSUELLE = [15, 17, 52, 22, 30, 80, 16, 17, 62, 12, 17, 85]
const PREVISION_TOTALE = 424490

export default {
  name: 'Home',
  components: { BrowserFrame, Parallaxe, ThemeSelector },
  setup() {
    return { capture, sombre }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        company: '',
        phone: ''
      },
      isSubmitting: false,
      statusMessage: '',
      statusType: 'success', // 'success' or 'error'
      currentYear: new Date().getFullYear(),
      navbarScrollHandler: null,
      resizeHandler: null,
      navbarDark: true,
      pricingTab: 'cabinet',
      billingPeriod: 'monthly', // 'monthly' | 'annual' — l'annuel offre 2 mois (facturé 10× le mensuel)
      // Le mois d'un cabinet : chaque temps renvoie à sa section, dans l'ordre de la page
      etapes: [
        { ancre: 'import', icone: 'pi-upload', titre: 'Importer', texte: 'Excel, CSV ou PDF, le format de chaque partenaire mémorisé.' },
        { ancre: 'previsionnel', icone: 'pi-chart-line', titre: 'Prévoir', texte: "Combien d'ici décembre, et quand, contrat par contrat." },
        { ancre: 'attendues', icone: 'pi-bell', titre: 'Contrôler', texte: 'Les contrats qui ne paient plus, les montants qui ne collent pas.' },
        { ancre: 'analyse', icone: 'pi-chart-pie', titre: 'Analyser', texte: 'Par conseiller, partenaire, produit, nature ou entité.' },
        { ancre: 'declarer', icone: 'pi-file-check', titre: 'Déclarer', texte: "Les chiffres de la FRA CIF et les écritures pour l'expert-comptable." }
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
    },
    // Prix mis en avant : mensuel tel quel, ou équivalent mensuel facturé annuellement (2 mois offerts → 10× le mensuel / 12)
    displayPrice(monthly) {
      const value = (this.billingPeriod === 'annual' && monthly > 0)
        ? Math.round((monthly * 10) / 12)
        : monthly
      return value.toLocaleString('fr-FR')
    },
    // Montant annuel réellement facturé (2 mois offerts)
    annualTotal(monthly) {
      return (monthly * 10).toLocaleString('fr-FR')
    },
    showGroupPricing() {
      this.pricingTab = 'group'
      this.$nextTick(() => {
        document.getElementById('tarifs').scrollIntoView({ behavior: 'smooth' })
      })
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Clear the hash from URL
      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search)
      }
    },
    validateForm() {
      const errors = []
      
      // Validate name
      if (!this.form.name || this.form.name.trim().length < 2) {
        errors.push('Nom: Veuillez saisir un nom d\'au moins 2 caractères')
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.form.email || !emailRegex.test(this.form.email)) {
        errors.push('Email: Veuillez saisir une adresse email valide')
      }
      
      // Validate message
      if (!this.form.message || this.form.message.trim().length < 10) {
        errors.push('Message: Veuillez saisir un message d\'au moins 10 caractères')
      }
      
      // Validate optional fields
      if (this.form.company && this.form.company.length > 100) {
        errors.push('Entreprise: Le nom ne peut pas dépasser 100 caractères')
      }
      
      if (this.form.phone && this.form.phone.length > 20) {
        errors.push('Téléphone: Le numéro ne peut pas dépasser 20 caractères')
      }
      
      return errors
    },

    async submitForm() {
      this.isSubmitting = true
      this.statusMessage = ''
      
      // Validate form client-side first
      const validationErrors = this.validateForm()
      if (validationErrors.length > 0) {
        this.statusMessage = validationErrors.join('\n')
        this.statusType = 'error'
        this.isSubmitting = false
        return
      }
      
      try {
        const response = await contactService.sendContact({
          name: this.form.name.trim(),
          email: this.form.email.trim(),
          message: this.form.message.trim(),
          company: this.form.company ? this.form.company.trim() : undefined,
          phone: this.form.phone ? this.form.phone.trim() : undefined
        })
        
        if (response.success) {
          // Reset form
          this.form = {
            name: '',
            email: '',
            message: '',
            company: '',
            phone: ''
          }
          
          this.statusMessage = response.message
          this.statusType = 'success'
          
          // Scroll to top of form to show success message
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }
      } catch (error) {
        this.statusMessage = error.message || 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
        this.statusType = 'error'
      } finally {
        this.isSubmitting = false
      }
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
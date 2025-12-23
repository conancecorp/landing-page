<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pb-16 md:pb-24" style="background-color: #0F2F2C;">
      <!-- Floating Navigation -->
      <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div :class="['max-w-6xl mx-auto transition-all duration-300', navbarDark ? 'navbar-floating-dark' : 'navbar-floating-light']">
          <div class="flex justify-between items-center h-14 px-4 sm:px-6">
            <div class="flex items-center">
              <a href="#" @click.prevent="scrollToTop" class="flex items-center">
                <img :src="navbarDark ? '/logo-conance-white.svg' : '/logo-conance.svg'" alt="Conance" class="h-7 w-auto" />
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#fonctionnalites" :class="['transition-colors text-sm', navbarDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary-500']">Fonctionnalités</a>
              <a href="#tarifs" :class="['transition-colors text-sm', navbarDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary-500']">Tarifs</a>
              <a href="#contact" :class="['transition-colors text-sm', navbarDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary-500']">Contact</a>
            </div>
            <div class="flex items-center space-x-3">
              <a href="https://app.conance.io/login" :class="navbarDark ? 'btn-nav-floating-dark' : 'btn-nav-floating-light'">Se connecter</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Text content with container constraint -->
      <div class="container pt-28">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simplifiez la gestion de vos commissions
          </h1>
          <p class="text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto font-light">
            Solution SaaS complète pour les cabinets de gestion de patrimoine.
            Gérez vos conseillers, clients, contrats et commissions en toute simplicité.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-3 mb-12 md:mb-16">
            <a href="https://app.conance.io/register?plan=gratuit" class="btn-primary px-6 py-3">
              Démarrer gratuitement
            </a>
            <a href="#tarifs" class="btn-secondary px-6 py-3">
              Voir les tarifs
            </a>
          </div>
        </div>
      </div>

      <!-- Browser Window Mockup - outside container for full width -->
      <div class="mx-auto px-4 sm:px-8 lg:px-16" style="max-width: 1300px;">
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
          <!-- Screenshot Content with Parallax -->
          <div ref="browserContent" class="browser-content cursor-pointer" @click="openLightbox('/screenshots/dashboard.png', 'Aperçu du tableau de bord Conance')">
            <img
              ref="screenshotImg"
              src="/screenshots/dashboard.png"
              alt="Aperçu du tableau de bord Conance"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section - Gain de temps -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style="background-color: rgba(35, 176, 134, 0.12); color: #1a8a6a;">
            <i class="pi pi-clock mr-2"></i>
            Gagnez du temps
          </div>
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Automatisez ce qui vous prend des heures
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Fini les tableaux croisés dynamiques Excel à refaire chaque mois.
            Conance automatise le traitement de vos commissions pour que vos équipes
            se concentrent sur ce qui compte vraiment.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Stat 1 -->
          <div class="text-center p-6">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style="background-color: rgba(35, 176, 134, 0.12);">
              <i class="pi pi-stopwatch text-2xl" style="color: #23b086;"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">-80%</h3>
            <p class="text-gray-600">de temps passé sur le traitement des commissions</p>
          </div>

          <!-- Stat 2 -->
          <div class="text-center p-6">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style="background-color: rgba(35, 176, 134, 0.12);">
              <i class="pi pi-file-excel text-2xl" style="color: #23b086;"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">0</h3>
            <p class="text-gray-600">tableau croisé dynamique à maintenir manuellement</p>
          </div>

          <!-- Stat 3 -->
          <div class="text-center p-6">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style="background-color: rgba(35, 176, 134, 0.12);">
              <i class="pi pi-users text-2xl" style="color: #23b086;"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">+</h3>
            <p class="text-gray-600">de temps pour vos équipes sur des tâches à valeur ajoutée</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fonctionnalités Section -->
    <section id="fonctionnalites" class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Une solution complète pour optimiser la gestion de votre cabinet
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Violet (Indigo) -->
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color: rgba(99, 102, 241, 0.15);">
              <i class="pi pi-users text-xl" style="color: #6366f1;"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Gestion des conseillers et clients</h3>
            <p class="text-gray-600">Centralisez toutes les informations de vos conseillers et clients dans une interface intuitive.</p>
          </div>

          <!-- Vert (Émeraude) -->
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color: rgba(16, 185, 129, 0.15);">
              <i class="pi pi-file-edit text-xl" style="color: #10b981;"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Suivi des contrats et commissions</h3>
            <p class="text-gray-600">Retrouvez facilement les commissions associées à chaque contrat avec une traçabilité fine.</p>
          </div>

          <!-- Orange -->
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color: rgba(245, 158, 11, 0.15);">
              <i class="pi pi-upload text-xl" style="color: #f59e0b;"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Import/export de données</h3>
            <p class="text-gray-600">Importez facilement vos données existantes et exportez vos rapports en quelques clics.</p>
          </div>

          <!-- Bleu -->
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color: rgba(59, 130, 246, 0.15);">
              <i class="pi pi-chart-line text-xl" style="color: #3b82f6;"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Tableaux de bord et rapports</h3>
            <p class="text-gray-600">Visualisez vos performances avec des tableaux de bord interactifs et des rapports détaillés.</p>
          </div>

          <!-- Rose/Rouge -->
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color: rgba(239, 68, 68, 0.15);">
              <i class="pi pi-building text-xl" style="color: #ef4444;"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Gestion multi-entités</h3>
            <p class="text-gray-600">Consolidez les données de plusieurs structures juridiques et analysez-les dans un espace unifié.</p>
          </div>

          <!-- Cyan -->
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background-color: rgba(6, 182, 212, 0.15);">
              <i class="pi pi-shield text-xl" style="color: #06b6d4;"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Rôles et permissions avancés</h3>
            <p class="text-gray-600">Contrôlez finement les accès avec un système de rôles et permissions personnalisables.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Showcase: Commissions -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Screenshot côté gauche -->
          <div class="order-2 lg:order-1">
            <div class="browser-window-small">
              <!-- Chrome Title Bar with macOS buttons + Tab -->
              <div class="browser-titlebar-small">
                <!-- macOS Traffic Lights -->
                <div class="window-controls-small">
                  <span class="window-control-small close"></span>
                  <span class="window-control-small minimize"></span>
                  <span class="window-control-small maximize"></span>
                </div>
                <!-- Tabs Container -->
                <div class="browser-tabs-container-small">
                  <div class="browser-tab-small">
                    <img src="/favicon/favicon.svg" alt="" class="browser-tab-icon-small" />
                    <span class="browser-tab-title-small">Conance - Commissions</span>
                  </div>
                </div>
              </div>
              <!-- URL Bar / Toolbar -->
              <div class="browser-toolbar-small">
                <div class="browser-nav-small">
                  <span class="browser-nav-btn-small disabled">←</span>
                  <span class="browser-nav-btn-small disabled">→</span>
                  <span class="browser-nav-btn-small">↻</span>
                </div>
                <div class="browser-url-small">
                  <span class="browser-url-icon-small">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </span>
                  <span class="browser-url-text-small"><span class="url-dimmed">https://</span>app.conance.io/commissions</span>
                </div>
              </div>
              <!-- Screenshot Content -->
              <div class="browser-content-small cursor-pointer" @click="openLightbox('/screenshots/commissions.png', 'Aperçu de la gestion des commissions')">
                <img
                  src="/screenshots/commissions.png"
                  alt="Aperçu de la gestion des commissions"
                  class="w-full"
                />
              </div>
            </div>
          </div>

          <!-- Texte côté droit -->
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style="background-color: rgba(16, 185, 129, 0.15); color: #10b981;">
              <i class="pi pi-money-bill mr-2"></i>
              Commissions
            </div>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Suivez vos commissions en temps réel
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Visualisez l'ensemble de vos commissions dans un tableau clair et détaillé.
              Filtrez par période, partenaire, conseiller ou type de produit pour une analyse précise.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Vue consolidée de toutes vos commissions</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Filtres avancés multi-critères</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Export des données pour vos analyses</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Historique complet et traçabilité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Showcase: Import -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Texte côté gauche -->
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style="background-color: rgba(245, 158, 11, 0.15); color: #f59e0b;">
              <i class="pi pi-upload mr-2"></i>
              Import
            </div>
            <h2 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Importez vos données facilement
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Gagnez du temps avec notre système d'import intelligent. Importez vos fichiers de commissions
              depuis vos partenaires en quelques clics, avec détection automatique des formats.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Support des formats Excel et CSV (autres formats à venir)</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Mapping intelligent des colonnes</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Validation et détection des erreurs</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check-circle text-primary-500 mr-3 mt-1"></i>
                <span class="text-gray-700">Configurations sauvegardées par partenaire</span>
              </li>
            </ul>
          </div>

          <!-- Screenshot côté droit -->
          <div>
            <div class="browser-window-small">
              <!-- Chrome Title Bar with macOS buttons + Tab -->
              <div class="browser-titlebar-small">
                <!-- macOS Traffic Lights -->
                <div class="window-controls-small">
                  <span class="window-control-small close"></span>
                  <span class="window-control-small minimize"></span>
                  <span class="window-control-small maximize"></span>
                </div>
                <!-- Tabs Container -->
                <div class="browser-tabs-container-small">
                  <div class="browser-tab-small">
                    <img src="/favicon/favicon.svg" alt="" class="browser-tab-icon-small" />
                    <span class="browser-tab-title-small">Conance - Import</span>
                  </div>
                </div>
              </div>
              <!-- URL Bar / Toolbar -->
              <div class="browser-toolbar-small">
                <div class="browser-nav-small">
                  <span class="browser-nav-btn-small disabled">←</span>
                  <span class="browser-nav-btn-small disabled">→</span>
                  <span class="browser-nav-btn-small">↻</span>
                </div>
                <div class="browser-url-small">
                  <span class="browser-url-icon-small">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </span>
                  <span class="browser-url-text-small"><span class="url-dimmed">https://</span>app.conance.io/import</span>
                </div>
              </div>
              <!-- Screenshot Content -->
              <div class="browser-content-small cursor-pointer" @click="openLightbox('/screenshots/import.png', 'Aperçu de l\'import de données')">
                <img
                  src="/screenshots/import.png"
                  alt="Aperçu de l'import de données"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifs Section -->
    <section id="tarifs" class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tarifs transparents
          </h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à la taille de votre cabinet
          </p>
        </div>

        <div class="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
          <!-- Plan Gratuit -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Gratuit</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour découvrir Conance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">0€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>5 000 commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>3 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>3 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>1 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support communautaire</span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=gratuit" class="w-full btn-secondary-light text-center block mt-auto text-sm">Commencer gratuitement</a>
          </div>

          <!-- Plan Starter -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les petites structures</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">100€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>500 000 commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>3 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support email</span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=starter" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Standard -->
          <div class="bg-white rounded-lg shadow-lg p-6 border-2 border-primary-500 relative flex flex-col">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Standard</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les cabinets en croissance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">200€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>2 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>25 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>50 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support email</span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=standard" class="w-full btn-primary-card text-center block mt-auto">Choisir ce plan</a>
          </div>

          <!-- Plan Premium -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les grands cabinets</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">400€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>100 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>25 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>100 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support email</span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=premium" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Entreprise -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Entreprise</h3>
              <p class="text-gray-600 mb-4 text-sm">Sur mesure</p>
              <div class="mb-4">
                <span class="text-2xl font-bold text-gray-900">Sur devis</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Commissions illimitées</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Partenaires illimités</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Utilisateurs illimités</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Stockage sur mesure</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support dédié</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-star text-primary-500 mr-2"></i>
                <span class="text-primary-500 font-medium">Configuration dédiée</span>
              </li>
            </ul>
            <a href="#contact" class="w-full btn-secondary-light text-center block mt-auto text-sm">Nous contacter</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
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
                <i class="pi pi-envelope text-primary-500 mr-4"></i>
                <span>contact@conance.io</span>
              </div>
              <div class="flex items-center">
                <i class="pi pi-phone text-primary-500 mr-4"></i>
                <span>06 99 96 46 97</span>
              </div>
              <div class="flex items-center">
                <i class="pi pi-map-marker text-primary-500 mr-4"></i>
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
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" v-model="form.email" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <input type="text" id="company" v-model="form.company"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="phone" v-model="form.phone"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" v-model="form.message" rows="5" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Décrivez votre projet ou vos besoins..."></textarea>
              </div>

              <!-- Message de statut -->
              <div v-if="statusMessage" 
                   :class="[
                     'p-4 rounded-lg border',
                     statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
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
    <footer class="text-white py-12" style="background-color: #0F2F2C;">
      <div class="container">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <img src="/logo-conance-white.svg" alt="Conance" class="h-8 w-auto" />
            </div>
            <p class="text-gray-400">
              Solution SaaS de gestion des commissions pour cabinets de gestion de patrimoine.
            </p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Produit</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#fonctionnalites" class="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#tarifs" class="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="https://app.conance.io/login" class="hover:text-white transition-colors">Se connecter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="https://docs.conance.io" target="_blank" class="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:contact@conance.io" class="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Légal</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/cgu" class="hover:text-white transition-colors">CGU</router-link></li>
              <li><router-link to="/mentions-legales" class="hover:text-white transition-colors">Mentions légales</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {{ currentYear }} Conance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>

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

export default {
  name: 'Home',
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
      scrollHandler: null,
      navbarScrollHandler: null,
      resizeHandler: null,
      navbarDark: true,
      lightboxOpen: false,
      lightboxImage: '',
      lightboxAlt: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initParallaxScroll()
      this.initNavbarScroll()
    })
  },
  beforeUnmount() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
    if (this.navbarScrollHandler) {
      window.removeEventListener('scroll', this.navbarScrollHandler)
    }
  },
  methods: {
    initParallaxScroll() {
      const browserContent = this.$refs.browserContent
      const screenshotImg = this.$refs.screenshotImg

      if (!browserContent || !screenshotImg) return

      // Calculate max scroll based on image aspect ratio
      const imgWidth = screenshotImg.offsetWidth
      const aspectRatio = 2960 / 3230 // Screenshot aspect ratio
      const imgHeight = imgWidth * aspectRatio
      const containerHeight = browserContent.offsetHeight
      const maxScroll = Math.max(0, imgHeight - containerHeight)

      this.scrollHandler = () => {
        const rect = browserContent.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Start scrolling when browser window is at 40% from top of viewport
        // End when browser window has completely left the viewport
        const scrollStart = windowHeight * 0.4
        const scrollEnd = -rect.height * 0.8

        // Calculate progress (0 = scroll starts, 1 = scroll ends)
        const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / (scrollStart - scrollEnd)))

        // Apply parallax transform (slower with 0.7 multiplier)
        const translateY = -progress * maxScroll * 0.7
        screenshotImg.style.transform = `translateY(${translateY}px)`
      }

      window.addEventListener('scroll', this.scrollHandler, { passive: true })
      this.scrollHandler()
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
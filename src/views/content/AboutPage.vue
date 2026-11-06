<template>
  <ContentPage title="À propos de Conance" highlight="Conance" badge="À propos" icon="pi-info-circle">
    <template #lead>
      Développeur à Nantes, j'ai créé Conance avec un cabinet de gestion de patrimoine qui traitait ses bordereaux de commissions à la main. Je le
      développe au quotidien, et c'est moi qui réponds quand vous écrivez.
    </template>
    <template #visual>
      <div class="pastille about-card">
        <span class="about-initials" aria-hidden="true">EB</span>
        <strong class="heading-font">Elouan Bessettes</strong>
        <span class="pastille-sous">Fondateur de Conance</span>
        <a href="https://cal.com/elouan" rel="noopener" class="btn-primary-card about-card-action">Prendre rendez-vous</a>
        <a href="https://www.linkedin.com/in/elouanb/" rel="noopener" class="lien-fleche about-card-link"><i class="pi pi-linkedin"></i>Sur LinkedIn</a>
      </div>
    </template>

    <section class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Ce qu'est Conance</h2>
        </div>
        <div class="content-cards">
          <div v-reveal class="content-card">
            <span class="etape-tuile"><i class="pi pi-file"></i></span>
            <h3>Du bordereau à la déclaration</h3>
            <p>Un logiciel français pour gérer les commissions des cabinets de gestion de patrimoine.</p>
          </div>
          <div v-reveal="90" class="content-card">
            <span class="etape-tuile"><i class="pi pi-bullseye"></i></span>
            <h3>Un sujet, et un seul</h3>
            <p>Les cabinets sont déjà équipés pour suivre leurs clients et tenir la conformité. Conance s'occupe des commissions qu'ils reçoivent.</p>
          </div>
          <div v-reveal="180" class="content-card">
            <span class="etape-tuile"><i class="pi pi-server"></i></span>
            <h3>Hébergé en France</h3>
            <p>Application, base de données, fichiers et sauvegardes. Le détail est dans la <router-link to="/politique-confidentialite">politique de confidentialité</router-link>.</p>
          </div>
        </div>
        <p class="text-center mt-10">
          <router-link to="/#fonctionnalites" class="lien-fleche">Voir ce que fait Conance <i class="pi pi-arrow-right"></i></router-link>
        </p>
      </div>
    </section>

    <section class="py-20 bg-deep">
      <div class="container">
        <div v-reveal class="text-center mb-10">
          <span class="section-badge section-badge--sombre"><i class="pi pi-comments"></i>Au quotidien</span>
          <h2 class="heading-font text-3xl md:text-4xl font-bold text-blanc">Travailler avec Conance</h2>
        </div>
        <ul class="points-sombres">
          <li v-reveal>
            <i class="pi pi-comments"></i>
            <h3>Un seul interlocuteur</h3>
            <p>Du premier échange au support, vous parlez à la même personne.</p>
          </li>
          <li v-reveal="120">
            <i class="pi pi-briefcase"></i>
            <h3>Votre dossier est connu</h3>
            <p>Pas besoin de réexpliquer votre cabinet à chaque échange.</p>
          </li>
          <li v-reveal="240">
            <i class="pi pi-book"></i>
            <h3>Tout est écrit</h3>
            <p>Chaque évolution est décrite dans les notes de version. La <a class="underline" href="https://docs.conance.io">documentation</a> est publique.</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Contact</h2>
        </div>
        <div v-reveal class="about-contact-card">
          <ul class="garanties about-contact">
            <li>
              <span class="garantie-tuile"><i class="pi pi-envelope"></i></span>
              <div><h3>E-mail</h3><p><a href="mailto:elouan@conance.io">elouan@conance.io</a></p></div>
            </li>
            <li>
              <span class="garantie-tuile"><i class="pi pi-phone"></i></span>
              <div><h3>Téléphone</h3><p><a href="tel:+33699964697">06 99 96 46 97</a></p></div>
            </li>
            <li>
              <span class="garantie-tuile"><i class="pi pi-calendar"></i></span>
              <div><h3>Rendez-vous</h3><p><a href="https://cal.com/elouan" rel="noopener">Choisir un créneau</a></p></div>
            </li>
            <li>
              <span class="garantie-tuile"><i class="pi pi-linkedin"></i></span>
              <div><h3>LinkedIn</h3><p><a href="https://www.linkedin.com/in/elouanb/" rel="noopener">Elouan</a> et <a href="https://www.linkedin.com/company/conance-io/" rel="noopener">Conance</a></p></div>
            </li>
          </ul>
          <router-link to="/contact" class="btn-primary px-6 py-3 about-contact-action">Écrire via le formulaire</router-link>
        </div>
        <p v-reveal class="content-note content-narrow mt-8">
          <i class="pi pi-info-circle"></i>
          <span>
            Conance (conance.io) n'a aucun lien avec les sociétés portant un nom proche, en France ou à l'étranger. Les informations légales sont dans les
            <router-link to="/mentions-legales">mentions légales</router-link>.
          </span>
        </p>
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>

<style>
.about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  padding: 1.75rem 1.5rem;
  text-align: center;
}

.about-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.875rem;
  border-radius: 9999px;
  background: var(--color-deep);
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #52d2a6;
}

.about-card strong {
  font-size: 1.25rem;
  font-weight: 700;
}

.about-card-action {
  width: 100%;
  margin-top: 1.25rem;
}

.about-card-link {
  margin-top: 0.75rem;
  font-size: 0.875rem;
}

.about-contact-card {
  max-width: 46rem;
  margin-inline: auto;
  padding: 2rem;
  border: 1px solid var(--bordure);
  border-radius: 0.875rem;
  background: var(--carte);
  text-align: center;
}

.about-contact {
  text-align: left;
}

.about-contact h3 {
  font-size: 0.875rem;
  font-weight: 600;
}

.about-contact a {
  color: var(--vert-texte);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.about-contact li {
  align-items: center;
}

.about-contact-action {
  margin-top: 1.75rem;
}
</style>

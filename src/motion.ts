import type { App, Directive } from 'vue'

// Mouvement de la vitrine : deux directives légères, sans bibliothèque.
//
// v-reveal            apparition à l'entrée dans l'écran (fondu + montée) ;
//                     valeur = délai en ms, modificateurs .left / .right / .scale pour la direction
// v-scroll:mode       pose la variable CSS --p (0 → 1) selon le défilement, le CSS en tire les
//                     transformations (parallaxe, inclinaison qui se redresse…) ; valeur facultative =
//                     fonction appelée avec p. Modes :
//                       page      p = défilement de la page / 60 % de l'écran (le héros)
//                       entree    p = 0 quand l'élément arrive en bas de l'écran, 1 aux trois quarts
//                       traverse  p = 0 à l'entrée par le bas, 1 à la sortie par le haut
//                     ⚠ poser v-scroll sur un conteneur et transformer ses enfants : transformer
//                     l'élément mesuré fausserait sa propre mesure.
//
// Mouvement réduit demandé par le système : rien n'est masqué ni animé, --p prend sa valeur d'arrivée.

const mouvementReduit = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observateur: IntersectionObserver | null = null

function observateurApparition(): IntersectionObserver {
  if (!observateur) {
    observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue
          // Les longs délais servent la mise en scène du chargement ; un élément atteint plus tard
          // en défilant apparaît sans attendre
          const el = entree.target as HTMLElement
          if (performance.now() > 2500 && Number(el.dataset.revealDelay) > 400) {
            el.style.setProperty('--reveal-delay', '200ms')
          }
          el.classList.add('is-visible')
          observateur?.unobserve(entree.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )
  }
  return observateur
}

const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (mouvementReduit() || !('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    for (const sens of Object.keys(binding.modifiers)) el.classList.add(`reveal--${sens}`)
    if (binding.value) {
      el.dataset.revealDelay = String(binding.value)
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    observateurApparition().observe(el)
  },
  unmounted(el) {
    observateur?.unobserve(el)
  }
}

type Mode = 'page' | 'entree' | 'traverse'

interface Suivi {
  el: HTMLElement
  mode: Mode
  rappel?: (p: number) => void
  dernier: number
}

const suivis = new Map<HTMLElement, Suivi>()
let imagePrevue = false

function progression(suivi: Suivi, hauteurEcran: number): number {
  if (suivi.mode === 'page') return window.scrollY / (hauteurEcran * 0.6)
  const rect = suivi.el.getBoundingClientRect()
  if (suivi.mode === 'entree') return (hauteurEcran - rect.top) / (hauteurEcran * 0.75)
  return (hauteurEcran - rect.top) / (hauteurEcran + rect.height)
}

function mesurer() {
  imagePrevue = false
  const hauteurEcran = window.innerHeight
  for (const suivi of suivis.values()) {
    const p = Math.min(1, Math.max(0, progression(suivi, hauteurEcran)))
    if (Math.abs(p - suivi.dernier) < 0.0005) continue
    suivi.dernier = p
    suivi.el.style.setProperty('--p', p.toFixed(4))
    suivi.rappel?.(p)
  }
}

function planifier() {
  if (imagePrevue) return
  imagePrevue = true
  requestAnimationFrame(mesurer)
}

function ecouter(actif: boolean) {
  if (actif) {
    window.addEventListener('scroll', planifier, { passive: true })
    window.addEventListener('resize', planifier)
  } else {
    window.removeEventListener('scroll', planifier)
    window.removeEventListener('resize', planifier)
  }
}

const scroll: Directive<HTMLElement, ((p: number) => void) | undefined> = {
  mounted(el, binding) {
    const mode = (binding.arg as Mode) || 'traverse'
    if (mouvementReduit()) {
      const arrivee = mode === 'traverse' ? 0.5 : 1
      el.style.setProperty('--p', String(arrivee))
      binding.value?.(arrivee)
      return
    }
    if (!suivis.size) ecouter(true)
    suivis.set(el, { el, mode, rappel: binding.value, dernier: -1 })
    planifier()
  },
  unmounted(el) {
    if (!suivis.delete(el)) return
    if (!suivis.size) ecouter(false)
  }
}

export default {
  install(app: App) {
    app.directive('reveal', reveal)
    app.directive('scroll', scroll)
  }
}

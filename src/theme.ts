import { ref } from 'vue'

// Thème de la vitrine : clair, sombre, ou celui du système (par défaut). La classe `dark` sur
// <html> bascule les couleurs (variables de style.css) ; index.html la pose aussi avant le premier
// affichage pour éviter un flash clair. Le choix reste dans ce navigateur.

export type ChoixTheme = 'light' | 'dark' | 'system'

const CLE = 'conance-vitrine-theme'
const systemeSombre = window.matchMedia('(prefers-color-scheme: dark)')

function lire(): ChoixTheme {
  try {
    const v = localStorage.getItem(CLE)
    if (v === 'light' || v === 'dark' || v === 'system') return v
  } catch {
    // Stockage indisponible : thème du système
  }
  return 'system'
}

export const choixTheme = ref<ChoixTheme>(lire())
export const sombre = ref(false)

type FenetreChatwoot = Window & { $chatwoot?: { setColorScheme?: (mode: 'light' | 'dark') => void } }

// Le widget Chatwoot (production seulement, voir index.html) suit le thème de la page
function themeChatwoot() {
  ;(window as FenetreChatwoot).$chatwoot?.setColorScheme?.(sombre.value ? 'dark' : 'light')
}

function appliquer() {
  sombre.value = choixTheme.value === 'dark' || (choixTheme.value === 'system' && systemeSombre.matches)
  document.documentElement.classList.toggle('dark', sombre.value)
  document.documentElement.style.colorScheme = sombre.value ? 'dark' : 'light'
  themeChatwoot()
}

appliquer()
systemeSombre.addEventListener('change', appliquer)
// Thème changé avant que le widget soit prêt : on le lui redonne à son arrivée
window.addEventListener('chatwoot:ready', themeChatwoot)

// Change de thème en fondu (View Transitions) quand le navigateur le permet
export function choisirTheme(choix: ChoixTheme) {
  if (choix === choixTheme.value) return
  const basculer = () => {
    choixTheme.value = choix
    try {
      localStorage.setItem(CLE, choix)
    } catch {
      // Choix non retenu d'une visite à l'autre, sans gravité
    }
    appliquer()
  }
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
  const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (typeof doc.startViewTransition === 'function' && !reduit) doc.startViewTransition(basculer)
  else basculer()
}

// Capture de l'app dans le thème courant : `nom.png` en clair, `nom-sombre.png` en sombre
export function capture(nom: string, estSombre: boolean): string {
  return `/screenshots/${nom}${estSombre ? '-sombre' : ''}.png`
}

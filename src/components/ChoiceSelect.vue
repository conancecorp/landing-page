<template>
  <!-- Touch screens: the phone's own picker always fits the screen; only the closed field is styled -->
  <div v-if="native" class="choice-select">
    <select
      :id="id"
      :value="modelValue"
      :required="required"
      :class="['choice-select-native w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-primary-700 focus:border-transparent', modelValue ? 'text-gray-900' : 'text-gray-400']"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <i class="pi pi-chevron-down choice-select-chevron choice-select-native-chevron" aria-hidden="true"></i>
  </div>

  <div v-else ref="root" class="choice-select" :class="{ 'is-open': open }">
    <button
      :id="id"
      ref="button"
      type="button"
      role="combobox"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-controls="listId"
      :aria-required="required || undefined"
      :aria-activedescendant="open && activeIndex >= 0 ? optionId(activeIndex) : undefined"
      class="choice-select-button w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-primary-700 focus:border-transparent"
      @click="toggle"
      @keydown="onKeydown"
    >
      <span :class="selected ? 'text-gray-900' : 'text-gray-400'">{{ selected ? selected.label : placeholder }}</span>
      <i class="pi pi-chevron-down choice-select-chevron" aria-hidden="true"></i>
    </button>

    <ul
      v-show="open"
      :id="listId"
      ref="list"
      role="listbox"
      :aria-labelledby="id"
      :class="['choice-select-list', { 'is-above': above }]"
      :style="maxHeight ? { maxHeight: `${maxHeight}px` } : undefined"
    >
      <li
        v-for="(option, index) in options"
        :id="optionId(index)"
        :key="option.value"
        role="option"
        :aria-selected="option.value === modelValue"
        :class="{ 'is-active': index === activeIndex, 'is-selected': option.value === modelValue }"
        @mousedown.prevent
        @mouseenter="activeIndex = index"
        @click="choose(index)"
      >
        <span>{{ option.label }}</span>
        <i v-if="option.value === modelValue" class="pi pi-check" aria-hidden="true"></i>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// The browser's own list cannot be styled on a computer: this one follows the site's colors, in both themes
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

type Option = { value: string; label: string }

const props = defineProps<{ id: string; modelValue: string; options: Option[]; placeholder: string; required?: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

// About 7 answers, the rest scroll: a longer list leaves the screen on a laptop
const LIST_MAX = 264
const GAP = 6
const MARGIN = 12

const native = ref(false)
const root = ref<HTMLElement | null>(null)
const button = ref<HTMLButtonElement | null>(null)
const list = ref<HTMLElement | null>(null)
const open = ref(false)
const above = ref(false)
const maxHeight = ref<number | null>(null)
const activeIndex = ref(-1)

const listId = computed(() => `${props.id}-list`)
const selected = computed(() => props.options.find((option) => option.value === props.modelValue))
const optionId = (index: number) => `${props.id}-option-${index}`

onMounted(() => {
  native.value = window.matchMedia('(pointer: coarse)').matches
})

// Opens where there is room, under the fixed menu bar too, and never taller than that room
function place() {
  if (!button.value || !list.value) return
  const field = button.value.getBoundingClientRect()
  const menuBottom = document.querySelector('nav.fixed')?.getBoundingClientRect().bottom ?? 0
  const roomBelow = window.innerHeight - field.bottom - GAP - MARGIN
  const roomAbove = field.top - Math.max(menuBottom, 0) - GAP - MARGIN
  const wanted = Math.min(list.value.scrollHeight, LIST_MAX)
  above.value = wanted > roomBelow && roomAbove > roomBelow
  maxHeight.value = Math.max(120, Math.min(wanted, above.value ? roomAbove : roomBelow))
}

function onPointerOutside(event: PointerEvent) {
  if (root.value && !root.value.contains(event.target as Node)) close()
}

function scrollToActive() {
  document.getElementById(optionId(activeIndex.value))?.scrollIntoView({ block: 'nearest' })
}

function stopListening() {
  document.removeEventListener('pointerdown', onPointerOutside)
  window.removeEventListener('scroll', place)
  window.removeEventListener('resize', place)
}

function openList() {
  if (open.value) return
  open.value = true
  activeIndex.value = Math.max(0, props.options.findIndex((option) => option.value === props.modelValue))
  document.addEventListener('pointerdown', onPointerOutside)
  window.addEventListener('scroll', place, { passive: true })
  window.addEventListener('resize', place)
  nextTick(() => {
    place()
    scrollToActive()
  })
}

function close(focusButton = false) {
  open.value = false
  stopListening()
  if (focusButton) button.value?.focus()
}

function toggle() {
  if (open.value) close()
  else openList()
}

function choose(index: number) {
  emit('update:modelValue', props.options[index].value)
  close(true)
}

function moveTo(index: number) {
  const count = props.options.length
  activeIndex.value = (index + count) % count
  nextTick(scrollToActive)
}

function onKeydown(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowUp':
      event.preventDefault()
      if (!open.value) openList()
      else moveTo(activeIndex.value + (event.key === 'ArrowDown' ? 1 : -1))
      break
    case 'Home':
    case 'End':
      if (open.value) {
        event.preventDefault()
        moveTo(event.key === 'Home' ? 0 : props.options.length - 1)
      }
      break
    case 'Enter':
    case ' ':
      event.preventDefault()
      if (open.value && activeIndex.value >= 0) choose(activeIndex.value)
      else openList()
      break
    case 'Escape':
      if (open.value) {
        event.preventDefault()
        close()
      }
      break
    case 'Tab':
      close()
      break
  }
}

onBeforeUnmount(stopListening)
</script>

<style>
.choice-select {
  position: relative;
}

.choice-select-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  cursor: pointer;
}

/* The green ring already marks the focus: the browser's own outline would double it */
.choice-select-button:focus-visible,
.choice-select-native:focus-visible {
  outline: none;
}

.choice-select-native {
  appearance: none;
  padding-right: 2.75rem;
  cursor: pointer;
}

.choice-select-native option {
  color: var(--texte);
}

.choice-select .choice-select-chevron {
  flex: none;
  font-size: 0.8125rem;
  color: var(--texte-4);
  transition: rotate 0.15s ease;
}

.choice-select .choice-select-native-chevron {
  position: absolute;
  top: 50%;
  right: 1rem;
  translate: 0 -50%;
  pointer-events: none;
}

.choice-select.is-open .choice-select-chevron {
  rotate: 180deg;
}

.choice-select-list {
  position: absolute;
  z-index: 30;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  max-height: 264px;
  overflow-y: auto;
  overscroll-behavior: contain;
  margin: 0;
  padding: 4px;
  list-style: none;
  border: 1px solid var(--bordure);
  border-radius: 0.75rem;
  background: var(--carte);
  box-shadow: 0 18px 40px -18px var(--ombre);
}

.choice-select-list.is-above {
  top: auto;
  bottom: calc(100% + 6px);
}

.choice-select-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  line-height: 1.3;
  color: var(--texte);
  cursor: pointer;
}

.choice-select-list li.is-active {
  background: var(--vert-doux);
}

.choice-select-list li.is-selected {
  font-weight: 600;
  color: var(--vert-texte);
}

.choice-select-list .pi {
  flex: none;
  font-size: 0.8125rem;
}
</style>

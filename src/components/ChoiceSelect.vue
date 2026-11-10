<template>
  <div ref="root" class="choice-select" :class="{ 'is-open': open }">
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

    <ul v-show="open" :id="listId" role="listbox" :aria-labelledby="id" class="choice-select-list">
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
// The browser's own select cannot be styled: this one follows the site's colors, in both themes
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'

type Option = { value: string; label: string }

const props = defineProps<{ id: string; modelValue: string; options: Option[]; placeholder: string; required?: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const root = ref<HTMLElement | null>(null)
const button = ref<HTMLButtonElement | null>(null)
const open = ref(false)
const activeIndex = ref(-1)

const listId = computed(() => `${props.id}-list`)
const selected = computed(() => props.options.find((option) => option.value === props.modelValue))
const optionId = (index: number) => `${props.id}-option-${index}`

function onPointerOutside(event: PointerEvent) {
  if (root.value && !root.value.contains(event.target as Node)) close()
}

function scrollToActive() {
  document.getElementById(optionId(activeIndex.value))?.scrollIntoView({ block: 'nearest' })
}

function openList() {
  if (open.value) return
  open.value = true
  activeIndex.value = Math.max(0, props.options.findIndex((option) => option.value === props.modelValue))
  document.addEventListener('pointerdown', onPointerOutside)
  nextTick(scrollToActive)
}

function close(focusButton = false) {
  open.value = false
  document.removeEventListener('pointerdown', onPointerOutside)
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

onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerOutside))
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
.choice-select-button:focus-visible {
  outline: none;
}

.choice-select .choice-select-chevron {
  flex: none;
  font-size: 0.8125rem;
  color: var(--texte-4);
  transition: rotate 0.15s ease;
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
  max-height: 24rem;
  overflow-y: auto;
  margin: 0;
  padding: 6px;
  list-style: none;
  border: 1px solid var(--bordure);
  border-radius: 0.75rem;
  background: var(--carte);
  box-shadow: 0 18px 40px -18px var(--ombre);
}

.choice-select-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  line-height: 1.35;
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

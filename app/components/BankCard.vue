<script setup lang="ts">
const {
  eyebrow,
  title,
  text = '',
} = defineProps<{
  eyebrow: string
  title: string
  text?: string
}>()

defineSlots<{
  default: () => unknown
}>()
</script>

<template>
  <article class="p-6 rounded-2xl bg-white/5 hover:bg-white/7 transition">
    <div class="mb-2 text-primary text-xs uppercase tracking-wider">{{ eyebrow }}</div>
    <div class="text-xl font-bold mb-2">{{ title }}</div>
    <slot name="default">
      <div class="text-base">{{ text }}</div>
    </slot>
  </article>
</template>

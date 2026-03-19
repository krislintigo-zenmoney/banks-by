<template>
  <article class="p-6 rounded-2xl bg-white/5 hover:bg-white/7 transition">
    <div class="mb-2 text-primary text-xs uppercase tracking-wider">{{ eyebrow }}</div>
    <div class="text-xl font-bold mb-2">{{ title }}</div>
    <slot name="default">
      <div class="text-base">{{ text }}</div>
    </slot>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  text?: string
}>()
</script>

<template>
  <section class="flex gap-4 mb-6 default-animation">
    <article class="flex-1 p-5 bg-white/5 rounded-3xl">
      <div class="text-base text-muted">Активные</div>
      <div class="text-4xl font-semibold">{{ active }}</div>
    </article>

    <article class="flex-1 p-5 bg-white/5 rounded-3xl">
      <div class="text-base text-muted">С особенностями</div>
      <div class="text-4xl font-semibold">{{ warning }}</div>
    </article>

    <article class="flex-1 p-5 bg-white/5 rounded-3xl">
      <div class="text-base text-muted">Не работают</div>
      <div class="text-4xl font-semibold">{{ down }}</div>
    </article>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  active: number
  warning: number
  down: number
}>()
</script>

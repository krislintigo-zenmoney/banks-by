<template>
  <section class="hidden sm:flex flex-col sm:flex-row gap-4 mb-6 default-animation">
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
  <article class="flex sm:hidden justify-between items-center p-5 bg-white/5 rounded-3xl mb-6">
    <div class="text-base text-muted">
      <p class="text-green">Активные</p>
      <p class="text-orange">С особенностями</p>
      <p class="text-red">Не работают</p>
    </div>
    <div class="text-4xl font-semibold">
      <span class="text-green">{{ active }}</span> |
      <span class="text-orange">{{ warning }}</span> |
      <span class="text-red">{{ down }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  active: number
  warning: number
  down: number
}>()
</script>

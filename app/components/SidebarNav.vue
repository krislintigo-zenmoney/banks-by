<script setup lang="ts">
import type { Bank } from '~/types/bank.types'

const { banks } = defineProps<{ banks: Array<Bank> }>()
</script>

<template>
  <aside class="aside">
    <button
      class="w-max lg:mb-6 px-3 py-2 rounded-full bg-white/5 text-primary text-xs tracking-widest uppercase"
      type="button"
      @click="navigateTo('/')"
    >
      Дзен-мани · Беларусь
    </button>

    <BankFilters :banks="banks" class="hidden lg:block" />
  </aside>
</template>

<style scoped>
.aside {
  @apply block lg:sticky top-0 w-full lg:w-[350px] lg:h-screen overflow-auto p-6 bg-gray-800;
}
</style>

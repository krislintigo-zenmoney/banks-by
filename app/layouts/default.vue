<template>
  <div class="flex flex-col sm:flex-row">
    <SidebarNav :banks="banks" />

    <main class="mx-auto p-6">
      <div class="max-w-[1000px]" v-if="currentBank">
        <StatsGrid :active="stats.active" :warning="stats.warning" :down="stats.down" />
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useBanks } from '~/composables/useBanks'

const route = useRoute()
const { banks, getBankById, getStats } = useBanks()

const currentBank = computed(() => getBankById(String(route.params.bankId)))
const stats = computed(() => getStats(banks.value))

if (import.meta.server && !currentBank.value) {
  throw createError({ statusCode: 404, statusMessage: 'Bank not found' })
}

watchEffect(() => {
  if (import.meta.client && !currentBank.value) {
    throw createError({ statusCode: 404, statusMessage: 'Bank not found' })
  }
})
</script>

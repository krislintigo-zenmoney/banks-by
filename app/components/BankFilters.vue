<script setup lang="ts">
import type { Bank } from '~/types/bank.types'

const { banks } = defineProps<{ banks: Array<Bank> }>()

const search = ref<string>('')

const filteredBanks = computed<Array<Bank>>(() => {
  const term = search.value.trim().toLowerCase()

  if (!term) {
    return banks
  }

  return banks.filter((bank) => {
    const haystack = [bank.name, bank.engName].join(' ').toLowerCase()

    return haystack.includes(term)
  })
})
</script>

<template>
  <div>
    <div class="search mb-6">
      <input
        v-model="search"
        class="w-full p-4 rounded-2xl bg-white/3 outline-none focus:ring-1 focus:ring-primary"
        type="search"
        placeholder="Поиск банка..."
        autocomplete="off"
      />
    </div>

    <div class="flex flex-col gap-4 mb-6">
      <div class="flex items-center gap-4 border border-gray-700 p-3 rounded-2xl text-sm">
        <span class="size-3 rounded-full bg-green" />
        <span class="text-muted">Активно и стабильно работает</span>
      </div>
      <div class="flex items-center gap-4 border border-gray-700 p-3 rounded-2xl text-sm">
        <span class="size-3 rounded-full bg-orange" />
        <span class="text-muted">Работает с особенностями</span>
      </div>
      <div class="flex items-center gap-4 border border-gray-700 p-3 rounded-2xl text-sm">
        <span class="size-3 rounded-full bg-red" />
        <span class="text-muted">Сейчас не работает</span>
      </div>
    </div>

    <nav class="flex flex-col gap-4">
      <BankListItem v-for="bank in filteredBanks" :key="bank.id" :bank="bank" />
    </nav>
  </div>
</template>

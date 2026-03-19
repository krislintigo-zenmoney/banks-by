<template>
  <div>
    <div class="search mb-6">
      <input
        class="w-full"
        v-model="search"
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

<script setup lang="ts">
import type { Bank } from '~/types/bank.types'

const props = defineProps<{ banks: Bank[] }>()

const search = ref<string>('')

const filteredBanks = computed<Bank[]>(() => {
  const term = search.value.trim().toLowerCase()
  if (!term) return props.banks

  return props.banks.filter((bank) => {
    const haystack = [bank.name, bank.engName].join(' ').toLowerCase()
    return haystack.includes(term)
  })
})
</script>

<style scoped>
.search input {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  padding: 14px 16px;
  border-radius: 16px;
  outline: none;
  transition:
    border-color var(--transition),
    background var(--transition),
    transform var(--transition);
}

.search input:focus {
  outline: 1px solid var(--text-soft);
}
</style>

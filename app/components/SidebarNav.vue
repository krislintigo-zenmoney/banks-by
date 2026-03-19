<template>
  <aside
    class="block sm:sticky top-0 w-full sm:w-[350px] sm:h-screen overflow-auto p-6 bg-gray-800"
  >
    <div class="flex flex-col gap-4 sm:mb-6">
      <div
        class="w-max px-3 py-2 rounded-full bg-white/5 text-primary text-xs tracking-widest uppercase"
      >
        Zenmoney - Belarus
      </div>
      <h1 class="text-3xl">Банки Беларуси</h1>
      <p class="text-base">Каталог со статусами синхронизации и особенностями подключения.</p>
    </div>

    <BankFilters :banks="banks" class="hidden sm:block" />
  </aside>
</template>

<script setup lang="ts">
import type { Bank } from '~/types/bank.types'

defineProps<{ banks: Bank[] }>()
</script>

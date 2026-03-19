<template>
  <aside
    class="block lg:sticky top-0 w-full lg:w-[350px] lg:h-screen overflow-auto p-6 bg-gray-800"
  >
    <div class="flex flex-col gap-4 lg:mb-6">
      <div
        class="w-max px-3 py-2 rounded-full bg-white/5 text-primary text-xs tracking-widest uppercase"
      >
        Дзен-мани · Беларусь
      </div>
    </div>

    <BankFilters :banks="banks" class="hidden lg:block" />
  </aside>
</template>

<script setup lang="ts">
import type { Bank } from '~/types/bank.types'

defineProps<{ banks: Bank[] }>()
</script>

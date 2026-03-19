<template>
  <NuxtLink
    :to="`/${bank.id}`"
    class="flex items-center bg-white/5 hover:bg-white/7 rounded-2xl p-4 transition"
  >
    <div class="flex items-center gap-3">
      <span class="size-3 rounded-full" :class="`bg-${status.color}`" />
      <div class="text-base">
        <div class="font-semibold">{{ bank.name }}</div>
        <div class="text-muted">{{ status.label }}</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Bank } from '~/types/bank.types'
import { BANK_STATUSES_MAP } from '~/constants/bank-statuses'

const props = defineProps<{
  bank: Bank
}>()

const status = computed(() => BANK_STATUSES_MAP[props.bank.syncStatus])
</script>

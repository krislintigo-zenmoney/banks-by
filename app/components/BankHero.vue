<template>
  <section class="mb-6 p-6 rounded-3xl bg-white/5">
    <div class="flex flex-col gap-4 mb-6">
      <div>
        <div class="inline-flex items-center gap-3 px-4 py-3 mb-3 rounded-2xl bg-white/5">
          <span class="size-3 rounded-full" :class="`bg-${status.color}`" />
          <span :class="`text-${status.color}`">{{ status.label }}</span>
        </div>
        <h2 class="mb-3 text-5xl hyphens-auto">{{ bank.name }}</h2>
        <div class="text-base text-muted">
          <span>Для обновления информации по этому банку напишите сюда:</span>
          <NuxtLink class="text-primary" to="https://t.me/krislintigo" external target="_blank">
            Telegram @krislintigo
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <div class="flex-1 p-4 rounded-2xl bg-white/5 hover:bg-white/7 transition">
        <div class="mb-1 text-primary text-xs uppercase tracking-wider">Тип синхронизации</div>
        <div class="text-lg font-semibold">{{ SYNC_TYPES_MAP[bank.syncType].label }}</div>
      </div>

      <div class="flex-1 p-4 rounded-2xl bg-white/5 hover:bg-white/7 transition">
        <div class="mb-1 text-primary text-xs uppercase tracking-wider">Категория</div>
        <div class="text-lg font-semibold">{{ bank.category }}</div>
      </div>

      <div class="flex-1 p-4 rounded-2xl bg-white/5 hover:bg-white/7 transition">
        <div class="mb-1 text-primary text-xs uppercase tracking-wider">Сайт банка</div>
        <div class="text-lg font-semibold">{{ bank.website }}</div>
      </div>

      <div class="flex-1 p-4 rounded-2xl bg-white/5 hover:bg-white/7 transition">
        <div class="mb-1 text-primary text-xs uppercase tracking-wider">Последнее обновление</div>
        <div class="text-lg font-semibold">{{ bank.lastCheck }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Bank } from '~/types/bank.types'
import { BANK_STATUSES_MAP } from '~/constants/bank-statuses'
import { SYNC_TYPES_MAP } from '~/constants/sync-types'

const props = defineProps<{ bank: Bank }>()

const status = computed(() => BANK_STATUSES_MAP[props.bank.syncStatus])
</script>

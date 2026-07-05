<script setup lang="ts">
import { SYNC_TYPES_MAP } from '~/constants/sync-types'
import type { Bank } from '~/types/bank.types'

const { bank } = defineProps<{ bank: Bank }>()
</script>

<template>
  <div class="flex justify-between items-end gap-4 mb-6">
    <h3 class="text-2xl">Основная информация</h3>
    <p class="text-muted">Гибкая сетка для деталей, предупреждений, FAQ и служебных заметок.</p>
  </div>

  <section class="grid grid-cols-12 gap-4">
    <div class="grid grid-cols-12 gap-4 col-span-12 sm:col-span-4">
      <BankCard
        eyebrow="Текущий статус"
        :title="bank.status.title"
        :text="bank.status.text"
        class="col-span-12"
      />
      <BankCard
        eyebrow="Подключение"
        :title="bank.connection.title"
        :text="bank.connection.text"
        class="col-span-12"
      />
    </div>

    <BankCard eyebrow="Обновления" title="История изменений" class="col-span-12 sm:col-span-8">
      <div v-if="bank.updates.length > 0" class="flex flex-col gap-4">
        <div v-for="update in bank.updates" :key="update.text">
          <div class="mb-1 text-sm text-muted">{{ update.date }}</div>
          <div class="text-sm">{{ update.text }}</div>
        </div>
      </div>
      <p v-else>Здесь пока пусто.</p>
    </BankCard>

    <div class="grid grid-cols-12 gap-4 col-span-12 sm:col-span-6">
      <BankCard eyebrow="Особенности" :title="bank.features.title" class="col-span-12">
        <div class="flex flex-col gap-3">
          <p v-for="feature in bank.features.text" :key="feature">{{ feature }}</p>
        </div>
      </BankCard>

      <BankCard
        eyebrow="Тип интеграции"
        :title="SYNC_TYPES_MAP[bank.syncType].label"
        class="col-span-12"
      >
        <div class="flex flex-col gap-3">
          <p v-for="p in bank.integration" :key="p">{{ p }}</p>
        </div>
      </BankCard>
    </div>

    <BankCard eyebrow="Поддержка" title="Работающие продукты" class="col-span-12 sm:col-span-6">
      <p>Секция в разработке</p>
      <!--      <div class="flex items-center gap-3"> -->
      <!--        <div class="size-3 rounded-full" :class="`bg-${bank.supported.accounts.status}`" /> -->
      <!--        <p> -->
      <!--          <span>{{ bank.supported.accounts.text }}</span> -->
      <!--          <span v-if="bank.supported.accounts.description"> -->
      <!--            ({{ bank.supported.accounts.description }}) -->
      <!--          </span> -->
      <!--        </p> -->
      <!--      </div> -->
      <!--      <div class="flex items-center gap-3"> -->
      <!--        <div class="size-3 rounded-full" :class="`bg-${bank.supported.cards.status}`" /> -->
      <!--        <p> -->
      <!--          <span>{{ bank.supported.cards.text }}</span> -->
      <!--          <span v-if="bank.supported.cards.description"> -->
      <!--            ({{ bank.supported.cards.description }}) -->
      <!--          </span> -->
      <!--        </p> -->
      <!--      </div> -->
      <!--      <div class="flex items-center gap-3"> -->
      <!--        <div class="size-3 rounded-full" :class="`bg-${bank.supported.deposits.status}`" /> -->
      <!--        <p> -->
      <!--          <span>{{ bank.supported.deposits.text }}</span> -->
      <!--          <span v-if="bank.supported.deposits.description"> -->
      <!--            ({{ bank.supported.deposits.description }}) -->
      <!--          </span> -->
      <!--        </p> -->
      <!--      </div> -->
      <!--      <div class="flex items-center gap-3"> -->
      <!--        <div class="size-3 rounded-full" :class="`bg-${bank.supported.credits.status}`" /> -->
      <!--        <p> -->
      <!--          <span>{{ bank.supported.credits.text }}</span> -->
      <!--          <span v-if="bank.supported.credits.description"> -->
      <!--            ({{ bank.supported.credits.description }}) -->
      <!--          </span> -->
      <!--        </p> -->
      <!--      </div> -->
    </BankCard>
  </section>
</template>

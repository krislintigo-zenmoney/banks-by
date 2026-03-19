<template>
  <div class="landing">
    <!-- HERO -->
    <section class="mt-16 mb-16 text-center">
      <h1 class="mb-6 text-5xl">
        Какие банки Беларуси<br />
        работают в Дзен-мани
      </h1>
      <p class="mb-6 text-lg text-muted">
        Простой каталог банков с описанием способов подключения,<br />
        ограничений и реального поведения синхронизации.
      </p>
      <div>
        <NuxtLink
          :to="`${banks[0].id}`"
          class="inline-flex justify-center items-center px-4 py-3 bg-primary rounded-xl"
          >Перейти к банкам</NuxtLink
        >
      </div>
    </section>

    <section class="mb-16">
      <h2 class="mb-6 text-xl">Что это за сайт</h2>

      <div class="flex flex-col lg:flex-row gap-4">
        <div class="bg-white/5 p-6 rounded-2xl">
          <h3 class="mb-3 text-lg font-semibold">Реальная информация</h3>
          <p class="text-muted">
            Здесь нет рекламы - только фактическое состояние синхронизаций банков и полезные советы.
          </p>
        </div>
        <div class="bg-white/5 p-6 rounded-2xl">
          <h3 class="mb-3 text-lg font-semibold">Способы подключения</h3>
          <p class="text-muted">
            Для каждого банка указано, как именно происходит синхронизация, а также указан текущий
            статус - стоит ли вообще пытаться подключить его.
          </p>
        </div>
        <div class="bg-white/5 p-6 rounded-2xl">
          <h3 class="mb-3 text-lg font-semibold">Особенности</h3>
          <p class="text-muted">
            Некоторые банки требуют дополнительные шаги — здесь они четко описываются.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { banks } = useBanks()
</script>

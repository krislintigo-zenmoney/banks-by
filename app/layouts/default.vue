<script setup lang="ts">
defineSlots<{
  default: () => unknown
}>()

const route = useRoute()
const { banks, getBankById, getStats } = useBanks()

const isMenuOpen = ref(false)

const bankId = computed(() => String(route.params['bankId'] ?? ''))
const currentBank = computed(() => getBankById(bankId.value))
const stats = computed(() => getStats())

watchEffect(() => {
  if (bankId.value && !currentBank.value) {
    throw createError({ statusCode: 404, statusMessage: 'Bank not found' })
  }
})

watch(bankId, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <SidebarNav :banks="banks" :class="{ 'blur-md': isMenuOpen }" />

    <button
      class="lg:hidden fixed bottom-5 right-5 z-50 size-14 pb-1 rounded-full bg-primary text-3xl"
      type="button"
      @click="isMenuOpen = !isMenuOpen"
    >
      {{ isMenuOpen ? '×' : '☰' }}
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-3 scale-95"
    >
      <div v-if="isMenuOpen" class="fixed right-5 bottom-24 z-10 w-[min(22rem,calc(100vw-2.5rem))]">
        <div class="bg-gray-800 h-[500px] p-6 overflow-auto rounded-3xl">
          <BankFilters :banks="banks" />
        </div>
      </div>
    </Transition>

    <main class="flex-1 p-6" :class="{ 'blur-md': isMenuOpen }">
      <div class="mx-auto max-w-[1000px]">
        <StatsGrid :active="stats.active" :warning="stats.warning" :down="stats.down" />
        <slot />
      </div>
    </main>
  </div>
</template>

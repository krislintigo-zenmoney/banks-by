<template>
  <div v-if="currentBank" class="default-animation">
    <BankHero :bank="currentBank" />
    <BankDetails :bank="currentBank" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getBankById } = useBanks()

const currentBank = computed(() => getBankById(String(route.params.bankId)))

if (import.meta.server && !currentBank.value) {
  throw createError({ statusCode: 404, statusMessage: 'Bank not found' })
}

watchEffect(() => {
  if (import.meta.client && !currentBank.value) {
    throw createError({ statusCode: 404, statusMessage: 'Bank not found' })
  }
})
</script>

<style scoped>
.default-animation {
  animation: fadeUp 700ms ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

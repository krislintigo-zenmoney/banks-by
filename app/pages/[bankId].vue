<script setup lang="ts">
const route = useRoute()
const { getBankById } = useBanks()

const currentBank = computed(() => getBankById(String(route.params['bankId'] ?? '')))

watchEffect(() => {
  if (!currentBank.value) {
    throw createError({ statusCode: 404, statusMessage: 'Bank not found' })
  }
})
</script>

<template>
  <div>
    <div v-if="currentBank" class="default-animation">
      <BankHero :bank="currentBank" />
      <BankDetails :bank="currentBank" />
    </div>
  </div>
</template>

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

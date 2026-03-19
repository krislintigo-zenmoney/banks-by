<script setup lang="ts">
import { useBanks } from '~/composables/useBanks'

const router = useRouter()
const { banks, getStats } = useBanks()

const stats = computed(() => getStats(banks.value))
</script>

<template>
  <p>Placeholder</p>
</template>

import banksData from '~~/.generated/banks.json'
import type { Bank } from '~/types/bank.types'

export const useBanks = () => {
  const banks = computed(() => banksData as Array<Bank>)

  const getBankById = (id: string): Bank | null =>
    banks.value.find((bank) => bank.id === id) ?? null

  const getStats = () => ({
    active: banks.value.filter((bank) => bank.syncStatus === 'active').length,
    warning: banks.value.filter((bank) => bank.syncStatus === 'warning').length,
    down: banks.value.filter((bank) => bank.syncStatus === 'down').length,
  })

  return { banks, getBankById, getStats }
}

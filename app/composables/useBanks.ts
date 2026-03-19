import banksData from '~/data/banks.json'
import type { Bank } from '~/types/bank.types'

export const useBanks = () => {
  const banks = computed(() => banksData as Bank[])

  const getBankById = (id: string): Bank | null => {
    return banks.value.find((bank) => bank.id === id) ?? null
  }

  const getStats = (list: Bank[]) => {
    return {
      active: list.filter((bank) => bank.syncStatus === 'active').length,
      warning: list.filter((bank) => bank.syncStatus === 'warning').length,
      down: list.filter((bank) => bank.syncStatus === 'down').length,
    }
  }

  return { banks, getBankById, getStats }
}

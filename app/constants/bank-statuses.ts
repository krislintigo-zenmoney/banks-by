import { transformToGetter } from '~/utils/getters'

export const BANK_STATUSES = [
  {
    label: 'Работает',
    value: 'active',
    color: 'green',
  },
  {
    label: 'С особенностями',
    value: 'warning',
    color: 'orange',
  },
  {
    label: 'Не работает',
    value: 'down',
    color: 'red',
  },
  {
    label: 'Нет синхронизации',
    value: 'not-connected',
    color: 'muted',
  },
] as const

export const BANK_STATUSES_MAP = transformToGetter(BANK_STATUSES)

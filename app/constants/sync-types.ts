export const SYNC_TYPES = [
  {
    label: 'OpenAPI',
    value: 'open-api',
  },
  {
    label: 'Интернет-банкинг',
    value: 'web',
  },
  {
    label: 'Мобильное приложение',
    value: 'mobile',
  },
  {
    label: 'Комбинированный',
    value: 'combo',
  },
] as const

export const SYNC_TYPES_MAP = transformToGetter(SYNC_TYPES)

type TInputGetterArray = ReadonlyArray<{ value: string }>

export const transformToGetter = <T extends TInputGetterArray>(
  items: T,
): Record<T[number]['value'], Omit<T[number], 'value'>> => {
  const result: Partial<Record<T[number]['value'], Omit<T[number], 'value'>>> = {}

  for (const { value, ...rest } of items) {
    result[value as T[number]['value']] = rest as Omit<T[number], 'value'>
  }

  return result as Record<T[number]['value'], Omit<T[number], 'value'>>
}

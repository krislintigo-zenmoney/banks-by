type TInputGetterArray = readonly {
  value: string
}[]

export const transformToGetter = <T extends TInputGetterArray>(items: T) =>
  items.reduce(
    (acc, { value, ...rest }) => ({ ...acc, [value]: { ...rest } }),
    {} as Record<T[number]['value'], Omit<T[number], 'value'>>,
  )

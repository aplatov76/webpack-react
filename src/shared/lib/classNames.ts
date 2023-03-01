export type ModsType = Record<string, boolean | undefined>

export const classNames = (cls: string = '', mods?: ModsType, additional?: Array<string | undefined>): string => {
  return [
    cls,
    ...Object.entries(mods ?? {})
      .filter(([key, val]) => val)
      .map(([el, index]) => el),
    ...(additional?.filter(Boolean) ?? [])
  ].join(' ')
}

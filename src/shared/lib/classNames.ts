export const classNames = (cls: string, mods: Record<string, boolean>, additional: string[]): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([key, val]) => val)
      .map(([el, index]) => el),
    ...additional,
  ].join(" ");
};

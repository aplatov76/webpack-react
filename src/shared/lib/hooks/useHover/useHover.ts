import { useCallback, useMemo, useState } from 'react'

type UseHoverResult = [boolean, { onMouseEnter: () => void, onMouseLeave: () => void }]

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => setIsHover(true), [])
  const onMouseLeave = useCallback(() => setIsHover(false), [])

  return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [onMouseEnter, onMouseLeave, isHover])
}

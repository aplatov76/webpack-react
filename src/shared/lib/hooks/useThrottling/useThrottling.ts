/* eslint-disable n/no-callback-literal */
import { useCallback, useRef } from 'react'

export function useThrottling(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false)
  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args)
        throttleRef.current = true

        setTimeout(() => {
          throttleRef.current = false
        }, delay)
      }
    },
    [callback, delay]
  )
}

import { useEffect } from 'react'

export function useInitialEffects(callback: () => void) {
  useEffect(() => {
    if (_PROJECT_ !== 'storybook') {
      callback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

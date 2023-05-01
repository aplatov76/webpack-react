import { useEffect } from 'react'

export function useInitialEffects(callback: () => void) {
  useEffect(() => {
    if (_PROJECT_ !== 'storybook' && _PROJECT_ !== 'jest') {
      callback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

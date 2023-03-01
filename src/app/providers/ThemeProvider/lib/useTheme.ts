import { useContext } from 'react'
import { ThemeContext, Theme } from './ThemeContext'

interface UseThemeResultProps {
  toogleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResultProps {
  const { theme, setTheme } = useContext(ThemeContext)

  const toogleTheme = () => {
    setTheme?.(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return { theme, toogleTheme }
}

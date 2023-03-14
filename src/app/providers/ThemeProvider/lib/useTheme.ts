import { useContext } from 'react'
import { ThemeContext, Theme } from './ThemeContext'

interface UseThemeResultProps {
  toogleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResultProps {
  const { theme, setTheme } = useContext(ThemeContext)

  const toogleTheme = () => {
    let newTheme: Theme
    console.log(theme)
    switch (theme) {
      case Theme.DARK: {
        newTheme = Theme.LIGHT
        break
      }
      case Theme.LIGHT: {
        newTheme = Theme.ORANGE
        break
      }
      case Theme.ORANGE: {
        newTheme = Theme.DARK
        break
      }
      default: {
        newTheme = Theme.LIGHT
      }
    }

    setTheme?.(newTheme)
  }

  return { theme, toogleTheme }
}

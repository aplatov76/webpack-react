import { useMemo, useState } from 'react'
import { Theme, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({
  children,
  initialTheme = Theme.LIGHT
}): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

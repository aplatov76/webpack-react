import { useMemo, useState } from 'react'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'
import { Theme } from '@/shared/const/theme'

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

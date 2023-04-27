/* eslint-disable multiline-ternary */
/* eslint-disable react/display-name */
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import ThemeLightIcon from '@/shared/assets/icons/theme-light.svg'
import ThemeDarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button } from '@/shared/ui/Button'
import { Theme } from '@/shared/const/theme'

interface ThemeSwitcherProps {
  className?: string
  children?: ReactNode
}

export const ThemeSwitcher = memo(({ className, children }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme()

  return (
    <Button>
      {theme === Theme.DARK ? (
        <ThemeLightIcon className={classNames(className)} onClick={toogleTheme} />
      ) : (
        <ThemeDarkIcon className={classNames(className)} onClick={toogleTheme} />
      )}
    </Button>
  )
})

/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { classNames } from '@/shared/lib/classNames'
import cls from './LangSwitcher.module.sass'

import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className = '' } = props

  const { t, i18n } = useTranslation()

  const toggle = async (): Promise<void> => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>
        {i18n.language === 'ru' ? 'en' : 'ru'}
      </Button>
    </div>
  )
})

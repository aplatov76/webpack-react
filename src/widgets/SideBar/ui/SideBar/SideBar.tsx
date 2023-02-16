import { useState } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames'
import { AppLink, Button, LangSwitcher, ThemeSwitcher } from 'shared/ui'
import { ButtonSize, ThemeButton } from 'shared/ui/Button/ui/Button'
import cls from './SideBar.module.sass'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SideBarProps {
  className?: string
}

export const SideBar = (props: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div>
          <AppLink className={cls.item} to={RoutePath.main}>
            <MainIcon className={cls.icon} />
            <span className={cls.link}>Главная</span>
          </AppLink>
        </div>
        <div>
          <AppLink className={cls.item} to={RoutePath.about}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>About</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

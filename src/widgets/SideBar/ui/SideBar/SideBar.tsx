import { useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { LangSwitcher, ThemeSwitcher } from 'shared/ui'
import cls from './SideBar.module.sass'

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
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        Toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

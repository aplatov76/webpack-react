/* eslint-disable react/display-name */
import { useMemo, useState, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui'
import { ButtonSize, ThemeButton } from 'shared/ui/Button/ui/Button'
import { SideBarItemsList } from './model/items'
import cls from './SideBar.module.sass'
import { SideBarItem } from './SideBarItem/SideBarItem'

interface SideBarProps {
  className?: string
}

export const SideBar = memo((props: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () => SideBarItemsList.map((item) => <SideBarItem collapsed={collapsed} key={item.path} item={item} />),
    [collapsed]
  )

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
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
})

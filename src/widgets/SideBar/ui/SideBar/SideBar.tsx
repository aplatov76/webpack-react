/* eslint-disable react/display-name */
import { useMemo, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames'
import { Button, LangSwitcher, ThemeSwitcher } from '@/shared/ui'
import { VStack } from '@/shared/ui/Stack'
import { getSidebarItems } from './model/selectors/getSidebarItems'
import cls from './SideBar.module.sass'
import { SideBarItem } from './SideBarItem/SideBarItem'
import { ButtonSize, ThemeButton } from '@/shared/ui/Button'

export const SideBar = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const SideBarItemsList = useSelector(getSidebarItems)
  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () => SideBarItemsList.map((item) => <SideBarItem collapsed={collapsed} key={item.path} item={item} />),
    [collapsed, SideBarItemsList]
  )

  return (
    <menu data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed })}>
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
      <VStack gap={'8'} classname={cls.items}>
        {itemsList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </menu>
  )
})

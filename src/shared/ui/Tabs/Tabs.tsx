import { useCallback, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Card, CardTheme } from '../Card/Card'
import cls from './Tabs.module.sass'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsPropsInterface {
  classname?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = (props: TabsPropsInterface) => {
  const { tabs, value, onTabClick } = props

  const clickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab)
      }
    },
    [onTabClick]
  )

  return (
    <div className={classNames(cls.Tabs)}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          classname={cls.tab}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}

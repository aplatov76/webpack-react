/* eslint-disable react/display-name */
import cls from './SideBarItem.module.sass'
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui'
import { type SideBarItemType } from '../model/items'
import { memo } from 'react'

interface SideBarItemProps {
  classname?: string
  item: SideBarItemType
  collapsed: boolean
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  console.log('sidebar rerender: ')
  return (
    <div className={classNames(cls.SideBarItem, { [cls.collapsed]: collapsed }, [])}>
      <AppLink className={cls.item} to={item.path}>
        <item.icon className={cls.icon} />
        <span className={cls.link}>{item.text}</span>
      </AppLink>
    </div>
  )
})

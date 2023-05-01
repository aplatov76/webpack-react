/* eslint-disable react/jsx-key */
import { Menu } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropDownDirection } from '@/shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import cls from './Dropdown.module.sass'
import pls from '../styles/popup.module.sass'
import { mapDirectionClass } from '../styles/consts'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  direction?: DropDownDirection
  trigger: ReactNode
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = 'bottom right' } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classNames(pls.popup, {}, [className])}>
      <Menu.Button className={pls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <div onClick={item.onClick} className={classNames(cls.item, { [pls.active]: active })}>
              {item.content}
            </div>
          )
          // disabled={item.disabled}x
          if (item.href) {
            return (
              <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

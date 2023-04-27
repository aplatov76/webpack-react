/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Menu } from '@headlessui/react'
import { type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { type DropDownDirection } from '@/shared/types/ui'
import { AppLink } from '@/shared/ui/AppLink'
import cls from './DropDownMenu.module.sass'
import pls from '../styles/popup.module.sass'
import { mapDirectionClass } from '../styles/consts'

interface DropDownItem {
  value: ReactNode
  disabled?: boolean
  content?: ReactNode
  onClick: () => void
  href?: string
}

interface DropDownMenuProps {
  classname?: string
  trigger: ReactNode
  items: DropDownItem[]
  direction?: DropDownDirection
}

export function DropDownMenu(props: DropDownMenuProps) {
  const { classname, trigger, items, direction = 'bottom left' } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classNames(pls.popup, {}, [classname, mapDirectionClass[direction]])}>
      <Menu.Button className={pls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button disabled={item.disabled} className={classNames(cls.item, { [pls.active]: active })}>
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return <Menu.Item disabled={item.disabled}>{content}</Menu.Item>
        })}
      </Menu.Items>
    </Menu>
  )
}

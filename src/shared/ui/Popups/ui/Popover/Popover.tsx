import { Popover as HPopover } from '@headlessui/react'
import { type ReactNode } from 'react'
import { type DropDownDirection } from '@/shared/types/ui'

import cls from './Popover.module.sass'
import pls from '../styles/popup.module.sass'
import { mapDirectionClass } from '../styles/consts'
import { classNames } from '@/shared/lib/classNames'

interface PopoverProps {
  classname?: string
  direction?: DropDownDirection
  trigger: ReactNode
  children: ReactNode
}

export const Popover = (props: PopoverProps) => {
  const { classname, direction = 'bottom right', trigger, children } = props

  const menuClasses = [mapDirectionClass[direction]]
  return (
    <HPopover className={classNames(pls.popup, {}, [classname])}>
      <HPopover.Button className={pls.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  )
}

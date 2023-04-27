import Notifications from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notifications'
import { Icon } from '@/shared/ui/Icon'
import cls from './NotificationButton.module.sass'
import { Drawer } from '@/shared/ui/Drawer'
import { useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Popover } from '@/shared/ui/Popups/'

export const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpenDrawer = useCallback(() => setIsOpen(true), [])
  const onCloseDrawer = useCallback(() => setIsOpen(false), [])

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
      <Icon Svg={Notifications}></Icon>
    </Button>
  )
  return (
    <div>
      <BrowserView>
        <Popover direction={'bottom left'} trigger={trigger}>
          <NotificationList classname={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  )
}

/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Dropdown } from '@/shared/ui/Popups'
import cls from './AvatarDropDown.module.sass'
import { Avatar } from '@/shared/ui/Avatar'
import { getRouteAdminPanel, getRouteProfile } from '@/app/providers/router/config/routeConfig'

interface AvatarDropDownProps {
  isAdminPanelAvailable: boolean
  onLogout: () => void
  authData: any
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
  const { isAdminPanelAvailable, onLogout, authData } = props
  return (
    <Dropdown
      direction="bottom left"
      className={cls.dropdown}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: 'Админка',
                href: getRouteAdminPanel()
              }
            ]
          : []),
        {
          content: 'Профиль',
          href: getRouteProfile(authData.id)
        },
        {
          content: 'Выйти',
          onClick: onLogout
        }
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  )
}

import { useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { AppLink } from '@/shared/ui/AppLink'
import cls from './NavBar.module.sass'
import { LoginModal } from '@/features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { isUserAdmin, isUserManager, logout } from '@/entities/User'
import { RoutePath } from '@/app/providers/router/config/routeConfig'
import { HStack } from '@/shared/ui/Stack'

import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropDown } from '@/entities/avatarDropdown/'

interface NavBarPropsInterface {
  className?: string
}

export const NavBar = ({ className = 'navbar' }: NavBarPropsInterface) => {
  const [isOpen, setIsOpen] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const onToggleModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvailable = isAdmin || isManager

  const onLogout = () => {
    dispatch(logout())
  }

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <AppLink to={RoutePath['article-create']} className={cls.createArticle}>
            Создать статью
          </AppLink>
          <HStack gap={'12'} classname={cls.actions}>
            <NotificationButton />
            <AvatarDropDown authData={authData} isAdminPanelAvailable={isAdminPanelAvailable} onLogout={onLogout} />
          </HStack>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ThemeButton.CLEAR}
          className={cls.mainLink}
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          LogIn
        </Button>
        <AppLink to={'/'} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
      <LoginModal isOpen={isOpen} onClose={onToggleModal}></LoginModal>
    </div>
  )
}

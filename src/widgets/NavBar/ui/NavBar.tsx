import { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/index'
import { AppLink } from 'shared/ui/'
import { Modal } from 'shared/ui/Modal'
import cls from './NavBar.module.sass'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { logout } from 'entities/User'

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

  const onLogOut = () => {
    dispatch(logout())
  }

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <Button theme={ThemeButton.CLEAR} className={cls.mainLink} onClick={onLogOut}>
            Выйти
          </Button>
          <AppLink to={'/'} className={cls.mainLink}>
            Главная
          </AppLink>
          <AppLink to={'/about'}>About</AppLink>
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

import { useEffect } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { classNames } from '@/shared/lib/classNames'
import '@/app/styles/index.sass'
import { AppRouter } from './providers/router'
import { NavBar } from '@/widgets/NavBar'
import { SideBar } from '@/widgets/SideBar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        {inited && <AppRouter />}
      </div>
    </div>
  )
}

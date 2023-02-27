import { Suspense, useEffect, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import 'app/styles/index.sass'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { useAppDispatch } from './providers/StoreProvider/config/store'
import { initAuthData } from 'entities/User'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  )
}

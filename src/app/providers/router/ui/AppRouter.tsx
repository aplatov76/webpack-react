/* eslint-disable multiline-ternary */
import { Routes, Route } from 'react-router-dom'
import { routeConfig, type AppRoutesProps } from '@/app/providers/router/config/routeConfig'
import { Suspense, useMemo, memo, useCallback } from 'react'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>
              <>{route.element}</>
            </RequireAuth>
          ) : (
            <>{route.element}</>
          )
        }
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map((el) => renderWithWrapper(el))}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)

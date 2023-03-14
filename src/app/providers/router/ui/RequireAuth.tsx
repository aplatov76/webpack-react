import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  console.log('auth: ', auth)
  if (!auth) return <Navigate to={RoutePath.main} state={{ from: location }} replace />

  return children
}

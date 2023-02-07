import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Suspense } from 'react'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route key={route.path} path={route.path} element={<div className="page-wrapper">{route.element}</div>} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter

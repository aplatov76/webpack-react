import { AboutPage } from '@/pages/AboutPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage/'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlePage } from '@/pages/ArticlePage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePageAsync } from '@/pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { UserRole } from '@/entities/User'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { AppRoutes } from '@/shared/types/router'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => '/profile/' + id
export const getRouteArticles = () => `/articles`
export const getRouteArticleDetails = (id: string) => `/article/${id}`
export const getRouteArticleCreate = () => `/article/new`
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`
export const getRouteAdminPanel = () => `/admin-panel`

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePageAsync />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlePage />
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRoutes.FORBIDDEN]: {
    path: '/forbidden',
    element: <ForbiddenPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
}

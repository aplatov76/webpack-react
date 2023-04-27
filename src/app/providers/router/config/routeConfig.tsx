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

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin-panel',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  // последний
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath[AppRoutes.PROFILE]}:id`,
    element: <ProfilePageAsync />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlePage />
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath['article-page']}:id`,
    element: <ArticleDetailsPage />
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath['article-edit']}`,
    element: <ArticleEditPage />
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutePath[AppRoutes.ARTICLE_CREATE],
    element: <ArticleEditPage />
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath[AppRoutes.ADMIN_PANEL],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath[AppRoutes.FORBIDDEN],
    element: <ForbiddenPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
}

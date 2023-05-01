import { componentRender } from '@/shared/config/test/componentRender/componentRender'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '../config/routeConfig'
import { screen } from '@testing-library/react'
import AppRouter from './AppRouter'
import { UserRole } from '@/entities/User'

describe('app/router/AppRouter', function () {
  test('Страница должна отрисовываться', async () => {
    componentRender(<AppRouter />, { route: getRouteAbout() })

    const page = await screen.findByTestId('AboutPage')

    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, { route: '/unknow-page' })

    const page = await screen.findByTestId('NotFoundPage')

    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя на главную', async () => {
    componentRender(<AppRouter />, { route: getRouteProfile('1') })

    const page = await screen.findByTestId('MainPage')

    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: { id: '1', username: 'test user' }
        }
      }
    })

    const page = await screen.findByTestId('ProfilePage')

    expect(page).toBeInTheDocument()
  })

  test('Доступ запрещен, отсутствует роль', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: { id: '1', username: 'test user', roles: [UserRole.USER] }
        }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')

    expect(page).toBeInTheDocument()
  })

  test('Доступ запрещен, отсутствует роль', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: { id: '1', username: 'test user', roles: [UserRole.ADMIN] }
        }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')

    expect(page).toBeInTheDocument()
  })
})

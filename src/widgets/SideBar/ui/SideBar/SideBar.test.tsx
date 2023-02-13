import { fireEvent, render, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { SideBar } from './SideBar'

describe('Sidebar ton tests', () => {
  test('with only first param', () => {
    renderWithTranslation(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('test toggle', () => {
    renderWithTranslation(<SideBar />)
    const toogleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toogleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})

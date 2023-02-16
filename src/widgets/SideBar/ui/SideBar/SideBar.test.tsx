import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/config/test/componentRender/componentRender'
import { SideBar } from './SideBar'

describe('Sidebar ton tests', () => {
  test('with only first param', () => {
    componentRender(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('test toggle', () => {
    componentRender(<SideBar />)
    const toogleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toogleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})

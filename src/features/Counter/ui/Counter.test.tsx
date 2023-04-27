import { componentRender } from '@/shared/config/test/componentRender/componentRender'
import { Counter } from './Counter'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Counter component test', () => {
  test('Counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('increment'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('decrement'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})

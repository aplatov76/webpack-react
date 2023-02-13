import { render, screen } from '@testing-library/react'
import { Button } from '../'
import { ThemeButton } from './Button'

describe('Button tests', () => {
  test('with only first param', () => {
    render(<Button>Hello</Button>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
  test('with class', () => {
    render(<Button theme={ThemeButton.CLEAR}>Hello</Button>)
    expect(screen.getByText('Hello')).toHaveClass('clear')
  })
})

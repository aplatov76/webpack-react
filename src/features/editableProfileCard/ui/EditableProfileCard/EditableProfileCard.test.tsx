import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '@/shared/config/test/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'

describe('features/EditableProfileCard tests', () => {
  test('with only first param', () => {
    componentRender(<EditableProfileCard />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})

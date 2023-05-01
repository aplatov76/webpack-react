import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { componentRender } from '@/shared/config/test/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { Country, Currency } from '@/entities/Currency'
import { type ProfileType } from '@/entities/Profile'
import { reducer as profileReducer } from '@/entities/Profile/model/slice/profileSlice'

const profile: ProfileType = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin213'
}

const options = {
  initialState: {
    profile: {
      readonly: false,
      data: profile,
      form: profile,
      isLoading: false
    },
    user: {
      authData: { id: '1', username: 'admin' }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}
/*
describe('features/EditableProfileCard tests', () => {
  // test('Режим рид онли должен переключиться', async () => {
  // componentRender(<EditableProfileCard />, options)
  //  await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
  //  expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  //})
})
*/

import { Country, Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/profile'

import { updateProfileData } from './updateProfileData'

// jest.mock('axios')

// const mockedAxios = jest.mocked(axios)
const formData = {
  id: '1',
  age: 22,
  country: Country.Ukraina,
  lastname: 'lastname',
  first: 'asd',
  city: 'moscow',
  currency: Currency.EUR
}

describe('updateProfileData.test', () => {
  test('should call action success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: formData,
        isLoading: false,
        readonly: false
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data: formData }))
    const thunkResult = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('fulfilled')
    expect(thunkResult.payload).toEqual(formData)
  })

  test('should call action error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: formData,
        isLoading: false,
        readonly: false
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunkResult = await thunk.callThunk()

    expect(thunkResult.meta.requestStatus).toBe('rejected')
    expect(thunkResult.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })
})

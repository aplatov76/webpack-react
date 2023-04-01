import { Country, Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'

// jest.mock('axios')

// const mockedAxios = jest.mocked(axios)
const formData = {
  age: 22,
  country: Country.Ukraina,
  lastname: 'lastname',
  first: 'asd',
  city: 'moscow',
  currency: Currency.EUR
}

describe('fetchProfileData.test', () => {
  test('should call action success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({ data: formData }))
    const thunkResult = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('fulfilled')
    expect(thunkResult.payload).toEqual(formData)
  })

  test('should call action error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunkResult = await thunk.callThunk('1')

    // expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    // expect(thunk.api.get).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('rejected')
  })
})

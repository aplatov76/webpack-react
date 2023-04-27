import { setAuthData } from '@/entities/User'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { loginByUsername } from './loginByUserName'

// jest.mock('axios')

// const mockedAxios = jest.mocked(axios)

describe('loginByUserName.test', () => {
  test('should call action success', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    const userValue = { username: '123', id: '1' }
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const thunkResult = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(userValue))
    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('fulfilled')
  })

  test('should call action error', async () => {
    const userValue = { username: '123', id: '1' }

    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunkResult = await thunk.callThunk({ username: '123', password: '123' })

    // expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('rejected')
  })
})

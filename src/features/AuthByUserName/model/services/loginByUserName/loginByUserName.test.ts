import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import axios from 'axios'
import { setAuthData } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { loginByUsername } from './loginByUserName'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUserName.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })
  /*
  test('should call action success', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const action = loginByUsername({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenCalledWith(setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('should call action error', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = loginByUsername({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })

  test('error login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = loginByUsername({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  }) */
  test('should call action success', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const thunkResult = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('fulfilled')
  })

  test('should call action error', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const thunkResult = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunkResult.meta.requestStatus).toBe('rejected')
  })
})

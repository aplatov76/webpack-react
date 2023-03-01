import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getLoginState } from './getLoginState'

describe('getLoginState.test', () => {
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: undefined,
        username: '',
        password: '',
        isLoading: false
      }
    }
    // username: '', password: '', error: null, isLoading: false
    expect(getLoginState(state as StateSchema)).toEqual(state.loginForm)
  })
})

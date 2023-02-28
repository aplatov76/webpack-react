import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { reducer as loginReducer, setUserName } from './loginSlice'

describe('loginSlice tests', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }

    expect(loginReducer(state as LoginSchema, setUserName('123123'))).toEqual({ username: '123123' })
  })
})

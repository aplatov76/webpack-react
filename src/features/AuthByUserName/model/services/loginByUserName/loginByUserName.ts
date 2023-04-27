/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setAuthData, type User } from '@/entities/User'
import { type ThunkExtraArg, type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

interface LoginByUserNameProps {
  username: string
  password: string
}
export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(setAuthData(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)

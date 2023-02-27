/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { setAuthData, type User } from 'entities/User'
import { type Extra } from 'shared/config/api/types'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, { extra: Extra }>(
  'login/loginByUsername',
  async (authData, { extra: { client, api }, dispatch }) => {
    const { data } = await client.post(api.login, authData)
    if (data) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(setAuthData(data))
    }
    return data
  }
)

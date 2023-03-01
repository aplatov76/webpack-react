/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type ProfileType } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<ProfileType>('/profile')

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)

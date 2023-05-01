/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { type ProfileType } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<ProfileType>('/profile/' + profileId)
      if (!response.data) {
        throw new Error()
      }
      console.log('response.data: ', response.data)
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)

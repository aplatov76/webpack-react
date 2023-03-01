import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProfileType, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: undefined
}

export const profileSlice = createSlice({
  name: '[profile]',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<ProfileType>) => {
      state.data = action.payload
    },
    clearProfile: (state) => {
      state.data = null
    }
  }
})

export const { setProfileData, clearProfile } = profileSlice.actions

export const { reducer } = profileSlice

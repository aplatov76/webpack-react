import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { type ProfileType, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<ProfileType>) => {
      state.data = action.payload
    },
    clearProfile: (state) => {
      state.data = undefined
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.error = undefined
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const { setProfileData, clearProfile } = profileSlice.actions

export const { reducer } = profileSlice

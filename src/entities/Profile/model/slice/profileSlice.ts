import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ProfileType, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
    setProfileData: (state, action: PayloadAction<ProfileType>) => {
      state.data = action.payload
    },
    updateProfile: (state, action: PayloadAction<ProfileType>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
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
        state.form = action.payload
        state.error = undefined
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
      .addCase(updateProfileData.pending, (state, action) => {
        state.isLoading = true
        state.validateError = undefined
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.error = undefined
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.validateError = action.payload
      })
  }
})

export const { setProfileData, clearProfile, setReadonly, updateProfile, cancelEdit } = profileSlice.actions
export const { reducer } = profileSlice

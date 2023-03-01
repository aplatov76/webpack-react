import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUserName/loginByUserName'
import { type LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
  error: undefined
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false
        state.username = action.payload.username
        state.error = undefined
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        console.log('rejected: ', action)
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { setUserName, setPassword } = loginSlice.actions

export const { reducer } = loginSlice

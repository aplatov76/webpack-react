import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UISchema } from '../types/UISchema'

const initialState: UISchema = {
  scroll: {}
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      console.log('act: ', action)
      state.scroll[action.payload.path] = action.payload.position
    }
  },
  extraReducers: (builder) => {}
})

// Action creators are generated for each case reducer function
export const { actions } = uiSlice

export const { reducer } = uiSlice

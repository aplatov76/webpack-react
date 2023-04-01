import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
  text: ''
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentSlice',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { setText } = addCommentFormSlice.actions
export const { reducer } = addCommentFormSlice

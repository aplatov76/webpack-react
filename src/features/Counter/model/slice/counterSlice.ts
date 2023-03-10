import { createSlice } from '@reduxjs/toolkit'
import { type CounterSchema } from '../types/counterSchema'

const initialState: CounterSchema = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export const { reducer } = counterSlice

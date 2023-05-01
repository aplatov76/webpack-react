import { buildSlice } from '@/shared/lib/store/buildSlice'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type CounterSchema } from '../types/counterSchema'

const initialState: CounterSchema = {
  value: 0
}

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    }
  }
})

export const { actions: counterActions, reducer: counterReducer, useActions: useCounterActions } = counterSlice

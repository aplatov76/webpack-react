import { type CounterSchema } from '../types/counterSchema'

import { counterReducer as reducer, counterActions } from './counterSlice'
describe('counterSlice increment', () => {
  test('should return counter value', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(reducer(state, counterActions.increment())).toEqual({ value: 11 })
  })
})

describe('counterSlice decrement', () => {
  test('should return counter value', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(reducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })
})

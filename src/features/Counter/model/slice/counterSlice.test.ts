import { type CounterSchema } from '../types/counterSchema'
import { reducer as counterReducer, increment, decrement } from './counterSlice'

describe('counterSlice increment', () => {
  test('should return counter value', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(counterReducer(state, increment())).toEqual({ value: 11 })
  })
})

describe('counterSlice decrement', () => {
  test('should return counter value', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(counterReducer(state, decrement())).toEqual({ value: 9 })
  })
})

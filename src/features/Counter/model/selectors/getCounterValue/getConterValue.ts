import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { type CounterSchema } from '../../types/counterSchema'
import { buildSelector } from '@/shared/lib/store/buildSelector'

// export const [useCounterValue, getCounterValue] = createSelector(getCounter, (counter: CounterSchema) => counter.value)
export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value)

import { Provider, useDispatch } from 'react-redux'
import { type ReactNode } from 'react'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '..'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props
  const store = createReduxStore()
  return <Provider store={store}>{children}</Provider>
}

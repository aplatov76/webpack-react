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
  const { children, initialState } = props
  const store = createReduxStore(initialState as StateSchema)
  return <Provider store={store}>{children}</Provider>
}

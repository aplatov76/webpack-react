import { Provider, useDispatch } from 'react-redux'
import { type ReactNode } from 'react'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '..'
import { type DeepPartial } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props
  const navigate = useNavigate()
  const store = createReduxStore(initialState as StateSchema, navigate)
  return <Provider store={store}>{children}</Provider>
}

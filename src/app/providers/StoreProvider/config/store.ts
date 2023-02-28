import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'features/Counter/index'
import { userReducer } from 'entities/User'
import { reducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Extra } from 'shared/config/api/types'
import * as api from 'shared/config/api/api.config'
import { createReducerManager } from './reducerManager'

const rootReducers = {
  counter: counterReducer,
  //loginForm: reducer,
  user: userReducer
}

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    //loginForm: loginReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: _IS_DEV_,
    preloadedState: initialState
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export const store = configureStore({
  reducer: rootReducers,
  devTools: _IS_DEV_,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api
        } as Extra
      },
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

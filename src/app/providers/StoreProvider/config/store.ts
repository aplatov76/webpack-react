import { CombinedState, configureStore, DeepPartial, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'features/Counter/index'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions, To, useNavigate } from 'react-router-dom'
import { Reducer } from 'react'

const rootReducers = {
  counter: counterReducer,
  //loginForm: reducer,
  user: userReducer
}

export function createReduxStore(initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    //loginForm: loginReducer,
    user: userReducer
  }

  //const navigate = useNavigate()

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: _IS_DEV_,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate
          }
        }
      })
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

// use it type for payload
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

/*
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
*/

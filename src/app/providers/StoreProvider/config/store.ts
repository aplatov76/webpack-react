import { CombinedState, configureStore, DeepPartial, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from '@/features/Counter/index'
import { userReducer } from '@/entities/User'
import { reducer as uiReducer } from '@/features/UI/'
import { createReducerManager } from './reducerManager'
import { $api } from '@/shared/api/api'
import { NavigateOptions, To, useNavigate } from 'react-router-dom'
import { Reducer } from 'react'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore(initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    //loginForm: loginReducer,
    user: userReducer,
    ui: uiReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
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
            api: $api
            //navigate
          }
        }
      }).concat(rtkApi.middleware)
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

// use it type for payload
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

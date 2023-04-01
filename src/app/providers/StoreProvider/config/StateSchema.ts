import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUserName'
import { type CounterSchema } from 'features/Counter/index'
import { Dispatch } from 'redux'
import { NavigateOptions, To } from 'react-router-dom'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticlePageSchema } from 'pages/ArticlePage'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxeManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReduxeManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  dispatch?: Dispatch
  state: StateSchema
}

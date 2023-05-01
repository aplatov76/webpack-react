import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ProfileSchema } from '@/entities/Profile'
import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUserName'
import { type CounterSchema } from '@/features/Counter/index'
import { Dispatch } from 'redux'
import { NavigateOptions, To } from 'react-router-dom'
import { ArticleDetailsSchema } from '@/entities/Article'
import { AddCommentFormSchema } from '@/features/AddCommentForm'
import { ArticlePageSchema } from '@/pages/ArticlePage'
import { UISchema } from '@/features/UI'
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage/model/types'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  //articleDetailsComments?: ArticleDetailsCommentSchema
  //articleRecommends?: ArticleDetailsPageRecommendationsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlePageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}
export type StateSchemaKey = keyof StateSchema
export type MountedReducers = Partial<Record<StateSchemaKey, boolean>>

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => Partial<Record<StateSchemaKey, boolean>>
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReduceManager
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

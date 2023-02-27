import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUserName'
import { type CounterSchema } from 'features/Counter/index'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

import { Axios } from 'axios'
import * as API from './api.config'

export type Extra = {
  client: Axios
  api: typeof API
}

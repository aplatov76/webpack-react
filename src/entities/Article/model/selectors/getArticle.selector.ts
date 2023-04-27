import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getArticleDetailData = (state: StateSchema) => state.articleDetails?.data
export const getArticleDetailIsLoading = (state: StateSchema) => state.articleDetails?.isLoading
export const getArticleDetailError = (state: StateSchema) => state.articleDetails?.error

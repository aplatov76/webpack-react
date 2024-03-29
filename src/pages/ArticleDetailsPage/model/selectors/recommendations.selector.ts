import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations.isLoading
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations.error

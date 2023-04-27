/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { type Article } from '@/entities/Article'
import { fetchRecommendationArticlesList } from '../services/fetchRecommendationsForArticle/fetchRecommendationsForArticle'
import { type ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
    ids: [],
    entities: {},
    isLoading: false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendationArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchRecommendationArticlesList.rejected, (state) => {
        state.error = 'error'
        state.isLoading = false
      })
      .addCase(fetchRecommendationArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        recommendationsAdapter.addMany(state, action.payload)
      })
  }
})

// export const {} = articleDetailsCommentSlice.actions
export const reducer = articleDetailsRecommendationsSlice.reducer

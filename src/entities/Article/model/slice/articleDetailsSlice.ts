import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleView, type Article } from '../types/article'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false
}

export const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, { payload }: PayloadAction<Article>) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const {} = articleSlice.actions
export const { reducer } = articleSlice

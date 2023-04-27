/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { type Article } from '@/entities/Article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchRecommendationArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchRecommendationArticlesList',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)

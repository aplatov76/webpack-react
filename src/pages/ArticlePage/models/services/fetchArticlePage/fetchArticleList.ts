/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type Article } from 'entities/Article'
import { getArticlePageLimit } from '../../selectors/articlePage.selector'

interface FetchArticlesListProps {
  page?: number
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props: FetchArticlesListProps, { dispatch, extra, rejectWithValue, getState }) => {
    console.log('props: ', props)
    const { page = 1 } = props
    const limit = getArticlePageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit
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

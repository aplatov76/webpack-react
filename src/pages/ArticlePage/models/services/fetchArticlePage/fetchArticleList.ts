/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { type Article } from '@/entities/Article'
import { getQueryParams } from '@/shared/lib/addQueryParams/addQueryParams'
import {
  getArticlePageLimit,
  getArticlePageOrder,
  getArticlePagePage,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType
} from '../../selectors/articlePage.selector'

interface FetchArticlesListProps {
  replace?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, { dispatch, extra, rejectWithValue, getState }) => {
    const sort = getArticlePageSort(getState())
    const order = getArticlePageOrder(getState())
    const search = getArticlePageSearch(getState())
    const page = getArticlePagePage(getState())
    const limit = getArticlePageLimit(getState())
    const type = getArticlePageType(getState())

    try {
      getQueryParams({ sort, order, search })
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit,
          q: search,
          _sort: sort,
          _order: order,
          type: type === 'ALL' ? undefined : type
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

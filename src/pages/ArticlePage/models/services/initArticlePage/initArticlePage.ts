/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { type ArticleSortField } from '@/entities/Article'
import { useSelector } from 'react-redux'
import { type SortOrder } from '@/shared/types'
import { getArticlePageInited } from '../../selectors/articlePage.selector'
import { actions } from '../../slices/articlePage.slice'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (searchParams, { dispatch, getState }) => {
    const _inited = useSelector(getArticlePageInited)
    if (!_inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const searchFromUrl = searchParams.get('search')

      if (searchFromUrl) {
        dispatch(actions.setSearch(searchFromUrl))
      }
      if (sortFromUrl) {
        dispatch(actions.setSort(sortFromUrl))
      }
      if (orderFromUrl) {
        dispatch(actions.setOrder(orderFromUrl))
      }

      dispatch(actions.initState())
    }
  }
)

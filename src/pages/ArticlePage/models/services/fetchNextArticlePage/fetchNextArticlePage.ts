/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePagePage
} from '../../selectors/articlePage.selector'
import { actions } from '../../slices/articlePage.slice'
import { fetchArticlesList } from '../fetchArticlePage/fetchArticleList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_, { dispatch, getState }) => {
    const hasMore = getArticlePageHasMore(getState())
    const page = getArticlePagePage(getState())
    const isLoading = getArticlePageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(actions.setPage(page + 1))
      dispatch(fetchArticlesList({}))
    }
  }
)

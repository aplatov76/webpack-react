import { ArticleView } from 'entities/Article'
import { Country, Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlePage/fetchArticleList'

import { fetchNextArticlePage } from './fetchNextArticlePage'

jest.mock('../fetchArticlePage/fetchArticleList')

describe('fetchNextArticlePage.test', () => {
  test('should call action success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.SMALL
      }
    })

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  test('fetchNextArticlePage not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        view: ArticleView.SMALL
      }
    })

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalledWith()
  })
  test('fetchNextArticlePage not called isLoading = true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
        view: ArticleView.SMALL
      }
    })

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalledWith()
  })
})

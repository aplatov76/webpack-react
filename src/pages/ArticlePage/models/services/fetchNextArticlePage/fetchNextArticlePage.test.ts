import { ArticleView } from '@/entities/Article'
import { ArticleSortField } from '@/entities/Article/model/types/article'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

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
        view: ArticleView.SMALL,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        _inited: false,
        type: 'ALL'
      }
    })

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    // expect(fetchArticlesList).toHaveBeenCalledWith()
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
        view: ArticleView.SMALL,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        _inited: false,
        type: 'ALL'
      }
    })

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    // expect(fetchArticlesList).not.toHaveBeenCalledWith()
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
        view: ArticleView.SMALL,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        _inited: false,
        type: 'ALL'
      }
    })

    expect(thunk.dispatch).toBeCalledTimes(0)
  })
})

/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { ArticleView, type Article } from '@/entities/Article'
import { ArticleSortField, type ArticleType } from '@/entities/Article/model/types/article'
import { VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { type SortOrder } from '@/shared/types'
import { fetchArticlesList } from '../services/fetchArticlePage/fetchArticleList'
import { type ArticlePageSchema } from '../types/ArticlePage.schema'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getArticlesList = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    view: ArticleView.SMALL,
    page: 1,
    limit: 6,
    hasMore: true,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: 'ALL',
    _inited: false
  }),
  reducers: {
    setView(state, action: PayloadAction<ArticleView>) {
      // Or, call them as "mutating" helpers in a case reducer
      state.view = action.payload
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = state.view === ArticleView.BIG ? 4 : 9
      state.page = 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        state.hasMore = action.payload.length > state.limit
        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

// export const {} = articleDetailsCommentSlice.actions
export const reducer = articlePageSlice.reducer
export const actions = articlePageSlice.actions

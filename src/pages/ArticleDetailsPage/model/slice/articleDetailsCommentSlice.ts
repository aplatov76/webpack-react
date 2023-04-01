/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type Comment } from 'entities/Comment'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    ids: [],
    entities: {},
    isLoading: false
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    bookAdded: commentsAdapter.addOne,
    booksReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      commentsAdapter.setAll(state, action.payload.books)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }: PayloadAction<Comment[]>) => {
        commentsAdapter.setAll(state, payload)
        state.isLoading = false
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

// export const {} = articleDetailsCommentSlice.actions
export const reducer = articleDetailsCommentSlice.reducer

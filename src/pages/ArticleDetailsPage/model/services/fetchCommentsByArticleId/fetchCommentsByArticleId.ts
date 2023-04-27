/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { type Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'login/loginByUsername',
  async (articleId, { dispatch, extra, rejectWithValue }) => {
    if (articleId) {
      rejectWithValue('id not found')
    }
    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
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

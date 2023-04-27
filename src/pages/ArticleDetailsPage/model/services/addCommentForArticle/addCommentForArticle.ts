/* eslint-disable @typescript-eslint/space-before-blocks */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/promise-function-async */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { getArticleDetailData } from '@/entities/Article/model/selectors/getArticle.selector'
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
// import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'
// import { addCommentFormSelector } from '../../../../../features/AddCommentForm/model/selectors/addCommentForm.selector'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, { dispatch, extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState())
    // const text = addCommentFormSelector(getState())
    const article = getArticleDetailData(getState())

    if (!userData || !text || !article?.id) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text
      })
      if (!response.data) {
        throw new Error()
      }
      dispatch(fetchCommentsByArticleId(article.id))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)

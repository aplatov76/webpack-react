/* eslint-disable @typescript-eslint/member-delimiter-style */
import { type RatingType } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingArg {
  userId: string
  articleId: string
}

interface SetArticleRatingArg {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<RatingType[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    setArticleRating: build.mutation<void, SetArticleRatingArg>({
      query: ({ userId, articleId, rate, feedback }) => ({
        url: '/article-ratings',
        method: 'POST',
        body: {
          userId,
          articleId,
          rate,
          feedback
        }
      })
    })
  })
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useSetArticleRating = articleRatingApi.useSetArticleRatingMutation

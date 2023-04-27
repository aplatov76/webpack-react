import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { rtkApi } from '@/shared/api/rtkApi'
import { type Notification } from '../modal/types/notification'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  })
})

export const useGetNotifications = recommendationsApi.useGetNotificationsQuery

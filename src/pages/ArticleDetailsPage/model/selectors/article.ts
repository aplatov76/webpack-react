import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailData } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'

export const getCanEditArticle = createSelector(getArticleDetailData, getUserAuthData, (article, user) => {
  if (!article || !user) return false

  return article.user.id === user.id
})

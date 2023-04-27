import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { RoutePath } from '@/app/providers/router/config/routeConfig'
import { AppRoutes } from '@/shared/types/router'
import cls from './ArticleDetailsPageHeader.module.sass'
import { classNames } from '@/shared/lib/classNames'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailData } from '@/entities/Article'

export const ArticleDetailsPageHeader = () => {
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath[AppRoutes.ARTICLES])
  }, [])

  const onEditArticle = useCallback(() => {
    if (article) navigate(RoutePath[AppRoutes.ARTICLES] + '/' + article.id + '/edit')
  }, [article, navigate])

  return (
    <div className={classNames(cls.header)}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        Назад к списку
      </Button>
      {canEdit && (
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onEditArticle}>
          Редактировать
        </Button>
      )}
    </div>
  )
}

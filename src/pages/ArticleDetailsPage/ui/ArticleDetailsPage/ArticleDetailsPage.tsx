import { ArticleDetails } from '@/entities/Article'
import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './ArticleDetailsPage.module.sass'
import { useInitialEffects } from '@/shared/lib/hooks/useInitialEffects/useInitialEffects'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'

import { Page } from '@/widgets/Page/Page'
// eslint-disable-next-line max-len
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleRating } from '@/features/articleRating'

interface ArticleDetailsPageProps {
  classname?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { classname } = props

  const dispatch = useAppDispatch()

  const { id } = useParams<{ id: string }>()

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  useInitialEffects(() => {
    dispatch(fetchCommentsByArticleId(id))
    // dispatch(fetchRecommendationArticlesList())
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
        <span>Статья не найдена</span>
      </div>
    )
  }
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments />
        </div>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)

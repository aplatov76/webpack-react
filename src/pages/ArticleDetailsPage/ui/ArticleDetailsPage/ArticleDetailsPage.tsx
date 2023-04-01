import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { memo, useCallback } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  reducer as ArticleDetailsCommentReducer,
  getArticleComments
} from '../../model/slice/articleDetailsCommentSlice'
import { Text } from 'shared/ui/Text'
import cls from './ArticleDetailsPage.module.sass'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/commets.selector'
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffects/useInitialEffects'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page/Page'

interface ArticleDetailsPageProps {
  classname?: string
}

const reducers: ReducersList = {
  articleDetailsComments: ArticleDetailsCommentReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { classname } = props
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()

  const { id } = useParams<{ id: string }>()

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )
  const navigate = useNavigate()
  const onBackToList = useCallback(() => {
    navigate(RoutePath[AppRoutes.ARTICLES])
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  useInitialEffects(() => dispatch(fetchCommentsByArticleId(id)))

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
          <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
            Назад к списку
          </Button>
          <ArticleDetails id={id} />
          <Text title="Комментарии" classname={cls.commentTitle} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={isLoading} comments={comments} />
        </div>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)

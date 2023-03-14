/* eslint-disable react/display-name */
import {
  getArticleDetailData,
  getArticleDetailError,
  getArticleDetailIsLoading
} from 'entities/Article/model/selectors/getArticle.selector'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Skeleton } from 'shared/ui/'
import { reducer as articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.sass'

interface ArticleDetailsProps {
  classname?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()

  const article = useSelector(getArticleDetailData)
  const isLoading = useSelector(getArticleDetailIsLoading)
  const error = useSelector(getArticleDetailError)

  useEffect(() => {
    dispatch(fetchArticleById(props.id ?? '1'))
  }, [])

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleDetails)}>
        <div className={cls.SkeletonWrapper}>
          <Skeleton width={100} height={100} border={'50%'} />
          <Skeleton width={300} height={24} />
          <Skeleton width={600} height={16} />
          <Skeleton width={'100%'} height={200} />
        </div>
      </div>
    )
  }
  if (error) {
    return <div className={classNames(cls.ArticleDetails)}>{error}</div>
  }
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetails)}>
        <>
          Article details:
          {article && <span>{article.title}</span>}
        </>
      </div>
    </DynamicModuleLoader>
  )
})

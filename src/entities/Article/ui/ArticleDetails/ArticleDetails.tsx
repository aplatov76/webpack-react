/* eslint-disable react/display-name */
import { type Article } from '@/entities/Article'
import {
  getArticleDetailData,
  getArticleDetailError,
  getArticleDetailIsLoading
} from '@/entities/Article/model/selectors/getArticle.selector'
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useEffect, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon, Skeleton } from '@/shared/ui'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { reducer as articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import cls from './ArticleDetails.module.sass'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
// eslint-disable-next-line max-len
import { reducer as ArticleDetailsRecommendations } from '@/pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ArticleDetailsProps {
  classname?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
  // articleDetailsPage: ArticleDetailsRecommendations
  // articleDetailsPage: ArticleDetailsPag
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()

  const article = useSelector(getArticleDetailData)
  const isLoading = useSelector(getArticleDetailIsLoading)
  const error = useSelector(getArticleDetailError)

  useEffect(() => {
    dispatch(fetchArticleById(props.id ?? '1'))
  }, [])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE': {
        return <ArticleCodeBlockComponent key={block.id} block={block} />
      }
      case 'TEXT': {
        return <ArticleTextBlockComponent key={block.id} block={block} />
      }
      case 'IMAGE': {
        return <ArticleImageBlockComponent key={block.id} block={block} />
      }
      default:
        return null
    }
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
      <VStack>
        <HStack justify="center">
          <Avatar size={200} src={article?.img} />
        </HStack>
        <Text title={article?.title} text={article?.subtitle} />
        <HStack>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack gap={'4'}>
          <Icon Svg={CalendarIcon} />
          <Text text={String(article?.createdAt)} />
        </HStack>
        {article?.blocks.map(renderBlock)}
      </VStack>
    </DynamicModuleLoader>
  )
})

/* eslint-disable react-hooks/rules-of-hooks */
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Rating } from '@/entities/Rating'
import { useGetArticleRating, useSetArticleRating } from '../api/articleRatingApi'
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
  classname?: string
  articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { classname, articleId } = props
  const authData = useSelector(getUserAuthData)

  const [rateArticleMutation, {}] = useSetArticleRating()

  const { data, isLoading } = useGetArticleRating({ userId: authData?.id ?? '', articleId })
  console.log('data: ', data)

  const rating = data?.[0]

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({ userId: authData?.id ?? '', articleId, rate: starsCount, feedback })
      } catch (err) {
        console.log('rateArticleMutation: ', err)
      }
    },
    [authData, articleId, rateArticleMutation]
  )

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback)
    },
    [handleRateArticle]
  )
  const onCancel = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount)
    },
    [handleRateArticle]
  )

  if (isLoading) {
    return <Skeleton width={'100%'} height={120} />
  }

  return (
    <div className={classNames(classname)}>
      <Rating
        onAccept={onAccept}
        onCancel={onCancel}
        classname={classname}
        title={rating ? 'Ваша оценка' : 'Оцените статью'}
        feedbackTitle="Оставьте свой отзыв, это может улучшить что то там"
        hasFeedback
        rate={rating?.rate ?? 0}
        max
      />
    </div>
  )
})

export default ArticleRating

import { Skeleton } from '@/shared/ui/Skeleton'
import { lazy, Suspense } from 'react'
import { type ArticleRatingProps } from './ArticleRating'

export const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width={'100%'} height={'40'} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}

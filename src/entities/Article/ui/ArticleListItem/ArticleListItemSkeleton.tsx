import { ArticleView } from '../../model/types/article'
import cls from './ArticleListItem.module.sass'
import { classNames } from 'shared/lib/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { memo } from 'react'

interface ArticleListSkeletonProps {
  classname?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListSkeletonProps) => {
  const { classname, view } = props

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [classname, cls[view]])}>
        {' '}
        <Card classname={view}>
          <div className={cls.header}>
            <Skeleton height={30} width={30} />
            <Skeleton width={150} height={16} />
            <Skeleton width={150} height={16} />
          </div>
          <Skeleton width={250} height={24} />
          <Skeleton height={200} classname={cls.img} />
          <div className={cls.footer}>
            <div>
              <Skeleton height={30} width={200} />
              <Skeleton height={30} width={30} />
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <Card classname={view}>
      <div className={classNames(cls.ArticleListItem, {}, [classname, cls[view]])}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </div>
    </Card>
  )
})

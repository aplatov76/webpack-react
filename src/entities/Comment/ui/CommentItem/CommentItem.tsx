import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import cls from './CommentItem.module.sass'
import { classNames } from '@/shared/lib/classNames'
import { Avatar } from '@/shared/ui/Avatar'
import { AppLink, Skeleton } from '@/shared/ui'
import { RoutePath } from '@/app/providers/router/config/routeConfig'

interface CommentItemProps {
  classname?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentItem = memo(({ classname, comment, isLoading }: CommentItemProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentItem, {}, [classname])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={160} height={20} />
        </div>
        <Skeleton classname={cls.text} width={'100%'} height={50} />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(cls.CommentItem, {}, [classname])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <div className={cls.header}>
          {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
          {comment.user.username}
        </div>
      </AppLink>
      <div className={cls.text}>{comment.text}</div>
    </div>
  )
})

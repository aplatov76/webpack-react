/* eslint-disable no-constant-condition */
/* eslint-disable multiline-ternary */
import { classNames } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text'
import { type Comment } from '../../model/types/comment'
import { CommentItem } from '../CommentItem/CommentItem'
import cls from './CommentList.module.sass'

interface CommentListProps {
  classname?: string
  comments: Comment[]
  isLoading?: boolean
}

export const CommentList = ({ classname, comments, isLoading }: CommentListProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [classname])}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [classname])}>
      {comments?.length ? (
        comments.map((comment) => <CommentItem key={comment.id} isLoading={isLoading} comment={comment} />)
      ) : (
        <Text text="Комментарии отсутствуют" />
      )}
    </div>
  )
}

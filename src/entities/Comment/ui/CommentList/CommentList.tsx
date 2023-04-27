/* eslint-disable no-constant-condition */
/* eslint-disable multiline-ternary */
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { type Comment } from '../../model/types/comment'
import { CommentItem } from '../CommentItem/CommentItem'

interface CommentListProps {
  classname?: string
  comments: Comment[]
  isLoading?: boolean
}

export const CommentList = ({ classname, comments, isLoading }: CommentListProps) => {
  if (isLoading) {
    return (
      <div>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </div>
    )
  }

  return (
    <VStack gap={'8'}>
      {comments?.length ? (
        comments.map((comment) => <CommentItem key={comment.id} isLoading={isLoading} comment={comment} />)
      ) : (
        <Text text="Комментарии отсутствуют" />
      )}
    </VStack>
  )
}

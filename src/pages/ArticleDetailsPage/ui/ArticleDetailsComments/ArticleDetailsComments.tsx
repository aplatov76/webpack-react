import { Text } from '@/shared/ui/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/commets.selector'

import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ArticleDetailsComments = () => {
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

  return (
    <>
      <Text title="Комментарии" />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoading} comments={comments} />
    </>
  )
}

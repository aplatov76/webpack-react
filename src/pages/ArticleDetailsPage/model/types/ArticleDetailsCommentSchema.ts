import { type EntityState } from '@reduxjs/toolkit'
import { type Comment } from '@/entities/Comment'

export type ArticleDetailsCommentSchema = {
  isLoading?: boolean
  error?: string
} & EntityState<Comment>

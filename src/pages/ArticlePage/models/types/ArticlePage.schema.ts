import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleView, type Article } from 'entities/Article'

export type ArticlePageSchema = {
  isLoading?: boolean
  error?: string
  view: ArticleView
  page: number
  limit?: number
  hasMore: boolean
} & EntityState<Article>

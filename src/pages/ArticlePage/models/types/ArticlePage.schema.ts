import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleView, type Article } from '@/entities/Article'
import { type ArticleType, type ArticleSortField } from '@/entities/Article/model/types/article'
import { type SortOrder } from '@/shared/types'

export type ArticlePageSchema = {
  isLoading?: boolean
  error?: string
  page: number
  limit: number
  hasMore: boolean
  _inited: boolean
  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType
} & EntityState<Article>

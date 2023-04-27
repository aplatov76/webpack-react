import { type User } from '@/entities/User'

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created'
}

export type ArticleBlockType = 'CODE' | 'IMAGE' | 'TEXT'
export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE'
  code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE'
  src: string
  title: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT'
  paragraphs: string[]
  title?: string
}
export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock
export type ArticleType = 'ALL' | 'IT' | 'SCIENCE' | 'ECONOMICS'

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}

export interface Article {
  id: string
  title: string
  subtitle: string
  user: User
  img: string
  views: number
  createdAt: Date
  type: ArticleType[]
  blocks: ArticleBlock[]
}

import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { ArticleView } from '@/entities/Article'
import { ArticleSortField } from '@/entities/Article/'

export const getArticlePageIsLoading = (state: StateSchema) => state?.articlesPage?.isLoading
export const getArticlePageError = (state: StateSchema) => state?.articlesPage?.error
export const getArticlePageView = (state: StateSchema) => state?.articlesPage?.view || ArticleView.SMALL
export const getArticlePagePage = (state: StateSchema) => state?.articlesPage?.page || 1
export const getArticlePageLimit = (state: StateSchema) => state?.articlesPage?.limit
export const getArticlePageHasMore = (state: StateSchema) => state?.articlesPage?.hasMore
export const getArticlePageInited = (state: StateSchema) => state?.articlesPage?._inited

export const getArticlePageSort = (state: StateSchema) => state?.articlesPage?.sort ?? ArticleSortField.CREATED
export const getArticlePageOrder = (state: StateSchema) => state?.articlesPage?.order ?? 'asc'
export const getArticlePageSearch = (state: StateSchema) => state?.articlesPage?.search ?? ''
export const getArticlePageType = (state: StateSchema) => state?.articlesPage?.type ?? 'ALL'

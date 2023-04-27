import { lazy } from 'react'

export const ArticleEditAsyncPage = lazy(async () => await import('./ArticleEditPage'))

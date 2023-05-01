/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { type ArticleView, type ArticleSortField } from '@/entities/Article'
import { actions } from '../../models/slices/articlePage.slice'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView
} from '../../models/selectors/articlePage.selector'
import { useSelector } from 'react-redux'
import cls from './ArticlePageFilter.module.sass'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { type SortOrder } from '@/shared/types'
import { useCallback } from 'react'
import { fetchArticlesList } from '../../models/services/fetchArticlePage/fetchArticleList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'

type ArticlePageFilterProps = {
  classname?: string
}

export const ArticlePageFilter = () => {
  const dispatch = useAppDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])
  const debouncedFetchData = useDebounce(fetchData, 500)

  const view = useSelector(getArticlePageView)
  const sort = useSelector(getArticlePageSort)
  const order = useSelector(getArticlePageOrder)
  const search = useSelector(getArticlePageSearch)
  const tab = useSelector(getArticlePageType)

  const changeView = (view: ArticleView) => {
    dispatch(actions.setView(view))
  }

  const onChangeSearch = (val: string) => {
    dispatch(actions.setSearch(val))
    debouncedFetchData()
  }

  const onChangeSort = (newSort: ArticleSortField) => {
    dispatch(actions.setSort(newSort))
    dispatch(actions.setPage(1))
    fetchData()
  }

  const onChangeOrder = (newOrder: SortOrder) => {
    dispatch(actions.setOrder(newOrder))
    dispatch(actions.setPage(1))
    fetchData()
  }

  return (
    <div>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector order={order} sort={sort} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
        <ArticleViewSelector view={view} onViewClicked={changeView} />
      </div>
      <Card>
        <Input value={search} onChange={onChangeSearch} placeholder={'Поиск'} />
      </Card>
      <ArticleTypeTabs value={tab} />
    </div>
  )
}

import { type ArticleType } from '@/entities/Article/model/types/article'
import { fetchArticlesList } from '@/pages/ArticlePage/models/services/fetchArticlePage/fetchArticleList'
import { useCallback, useMemo } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { type TabItem, Tabs } from '@/shared/ui/Tabs'
import { actions } from '@/pages/ArticlePage/models/slices/articlePage.slice'

interface ArticleTypeTabsProps {
  classname?: string
  value: ArticleType
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { classname, value } = props

  const dispatch = useAppDispatch()

  const tabs = useMemo<TabItem[]>(
    () => [
      {
        value: 'ALL',
        content: 'Все статьи'
      },
      {
        value: 'IT',
        content: 'ИТ'
      },
      {
        value: 'SCIENCE',
        content: 'Наука'
      },
      {
        value: 'ECONOMICS',
        content: 'Экономика'
      }
    ],
    []
  )

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const onChangeType = useCallback((tab: TabItem) => {
    dispatch(actions.setType(tab.value as ArticleType))
    dispatch(actions.setPage(1))
    fetchData()
  }, [])

  return (
    <div>
      <Tabs tabs={tabs} value={value} onTabClick={onChangeType} />
    </div>
  )
}

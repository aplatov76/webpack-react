import { ArticleView, type Article } from 'entities/Article'
import cls from './ArticleList.module.sass'
import { classNames } from 'shared/lib/classNames'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  classname?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
  const { classname, articles, view = ArticleView.SMALL, isLoading } = props

  const renderArticle = (article: Article) => {
    return <ArticleListItem isLoading={isLoading} key={article.id} article={article} view={view} classname={cls.card} />
  }

  const getSkeleton = () => {
    return (
      <>
        {new Array(view === ArticleView.SMALL ? 12 : 3).fill(0).map((_, key) => (
          <ArticleListItemSkeleton key={key} view={view} />
        ))}
      </>
    )
  }

  return (
    <div className={classNames('', {}, [classname, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && getSkeleton()}
    </div>
  )
}

import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './ArticlePage.module.sass'

interface ArticlePageProps {
  classname?: string
}

const ArticlePage = (props: ArticlePageProps) => {
  const { classname } = props

  return <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>ArticleDetailsPage</div>
}

export default memo(ArticlePage)

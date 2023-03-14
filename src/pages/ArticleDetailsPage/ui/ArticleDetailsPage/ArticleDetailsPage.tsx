import { ArticleDetails } from 'entities/Article'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './ArticleDetailsPage.module.sass'

interface ArticleDetailsPageProps {
  classname?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { classname } = props

  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
        <span>Статья не найдена</span>
      </div>
    )
  }
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)

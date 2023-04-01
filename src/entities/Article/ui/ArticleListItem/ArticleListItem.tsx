import { type ArticleTextBlock, ArticleView, type Article } from '../../model/types/article'
import cls from './ArticleListItem.module.sass'
import { classNames } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text'
import { Button, Icon } from 'shared/ui'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import { useNavigate } from 'react-router-dom'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useCallback } from 'react'
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton'

interface ArticleListProps {
  classname?: string
  article: Article
  view: ArticleView
  isLoading?: boolean
}

export const ArticleListItem = (props: ArticleListProps) => {
  const { classname, article, view, isLoading } = props
  const [isHover, bindHover] = useHover()
  const types = article.type.join(', ')
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    console.log('onOpenArticle')
    navigate(RoutePath[AppRoutes.ARTICLE_DETAILS] + article.id)
  }, [article])

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((el) => el.type === 'TEXT') as ArticleTextBlock
    return (
      <div className={classNames(cls.ArticleListItem, {}, [classname, cls[view]])}>
        <Card classname={view}>
          <div className={cls.header}>
            <Avatar size={30} src={article?.user?.avatar} />
            <Text text={article?.user?.username} classname={cls.username} />
            <Text text={article.createdAt.toString()} classname={cls.date} />
          </div>
          <Text title={article.title} classname={cls.title}></Text>
          <p className={cls.type}>{types}</p>
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <div className={cls.textBlock}>
              <ArticleTextBlockComponent block={textBlock} classname={cls.textBlock}></ArticleTextBlockComponent>
            </div>
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              Читать далее
            </Button>
            <div>
              <Text text={article.views.toString()} classname={cls.views} />
              <Icon Svg={EyeIcon} />
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <Card classname={view}>
      <div
        {...bindHover}
        onClick={onOpenArticle}
        className={classNames(cls.ArticleListItem, {}, [classname, cls[view]])}
      >
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt.toString()} classname={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <p className={cls.type}>{types}</p>
          <Text text={article.views.toString()} classname={cls.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} classname={cls.title} />
      </div>
    </Card>
  )
}
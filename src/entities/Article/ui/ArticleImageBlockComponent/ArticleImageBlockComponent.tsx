import { type ArticleImageBlock } from '@/entities/Article/model/types/article'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Text, TextAlign } from '@/shared/ui/Text'
import cls from './ArticleImageBlockComponent.module.sass'

interface ArticleImageBlockComponentProps {
  classname?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { classname, block } = props
  return (
    <div>
      <img src={block.src} alt={block.title} className={classNames(cls.ImageBlock)} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
})

import { type ArticleTextBlock } from '../../model/types/article'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './ArticleTextBlockComponent.module.sass'
import { Text } from 'shared/ui/Text'

interface ArticleTextBlockComponentProps {
  classname?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { classname, block } = props
  return (
    <div className={classNames(cls.classname)}>
      {block?.title && <Text title={block.title} classname={cls.title} />}
      {block.paragraphs.map((bl, index) => (
        <Text key={index} text={bl} classname={cls.paragraph} />
      ))}
    </div>
  )
})

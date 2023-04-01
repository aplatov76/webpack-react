import { type ArticleCodeBlock } from '../../model/types/article'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './ArticleCodeBlockComponent.module.sass'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  classname?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { classname, block } = props
  return <Code>{block.code}</Code>
})

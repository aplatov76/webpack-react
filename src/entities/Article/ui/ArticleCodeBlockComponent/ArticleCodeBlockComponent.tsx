import { type ArticleCodeBlock } from '../../model/types/article'
import { memo } from 'react'
import { Code } from '@/shared/ui/Code'

interface ArticleCodeBlockComponentProps {
  classname?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { block } = props
  return <Code>{block.code}</Code>
})

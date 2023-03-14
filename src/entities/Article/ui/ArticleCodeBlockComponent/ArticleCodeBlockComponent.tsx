import { classNames } from 'shared/lib/classNames'
import cls from './ArticleCodeBlockComponentProps.module.sass'

interface ArticleCodeBlockComponentProps {
  classname?: string
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { classname } = props
  return <div className={classNames(cls.classname)}>ArticleCodeBlockComponent</div>
}

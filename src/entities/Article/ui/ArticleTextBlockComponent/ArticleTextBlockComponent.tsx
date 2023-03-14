import { classNames } from 'shared/lib/classNames'
import cls from './ArticleCodeBlockComponentProps.module.sass'

interface ArticleTextBlockComponentProps {
  classname?: string
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { classname } = props
  return <div className={classNames(cls.classname)}>ArticleTextBlockComponent</div>
}

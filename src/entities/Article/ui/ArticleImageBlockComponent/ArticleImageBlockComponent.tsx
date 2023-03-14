import { classNames } from 'shared/lib/classNames'
import cls from './ArticleImageBlockComponentProps.module.sass'

interface ArticleImageBlockComponentProps {
  classname?: string
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { classname } = props
  return <div className={classNames(cls.classname)}>ArticleImageBlockComponent</div>
}

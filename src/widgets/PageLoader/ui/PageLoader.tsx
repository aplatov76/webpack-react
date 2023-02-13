import { classNames } from 'shared/lib/classNames'
import { Spinner } from 'shared/ui/Spinner'
import cls from './PageLoader.module.sass'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [props.className])}>
      <Spinner />
    </div>
  )
}

import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.sass'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { t } = useTranslation()
  return <div className={cls.NotFoundPage}>{t('NotFoundPage')}</div>
}

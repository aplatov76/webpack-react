import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames'
import { Button } from '@/shared/ui/Button'
import cls from './ErrorPage.module.sass'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      {t('Произошла непредвиднная ошибка')}
      <Button
        className={classNames(cls.ErrorButton)}
        onClick={() => {
          location.reload()
        }}
      >
        Обновить страницу
      </Button>
    </div>
  )
}

import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')
  return <>{t('title')}</>
}

export default MainPage

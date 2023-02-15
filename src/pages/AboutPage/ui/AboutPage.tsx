import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return <div>{t('О сайте')} 123</div>
}
export default AboutPage

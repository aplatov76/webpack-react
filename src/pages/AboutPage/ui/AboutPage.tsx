import { Counter } from 'features/Counter'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return (
    <div>
      {t('О сайте')}
      <Counter />
    </div>
  )
}
export default AboutPage

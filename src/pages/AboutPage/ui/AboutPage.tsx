import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StartRating } from '@/shared/ui/StartRating'
import { Rating } from '@/entities/Rating'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return (
    <Page data-testid={'AboutPage'}>
      {t('О сайте')}
      <StartRating />
      <Rating title={'Ваш фитбэк'} feedbackTitle={'Оставьте отзыв о статье'} hasFeedback />
    </Page>
  )
}
export default AboutPage

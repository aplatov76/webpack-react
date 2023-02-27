import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <>
      <Input value="124"></Input>
    </>
  )
}

export default MainPage

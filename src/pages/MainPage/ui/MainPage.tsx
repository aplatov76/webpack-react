import { Counter } from '@/features/Counter'
import { Input } from '@/shared/ui/Input'
import { Page } from '@/widgets/Page/Page'

const MainPage = () => {
  return (
    <Page data-testid={'MainPage'}>
      <Input value="124"></Input>
      <Counter />
    </Page>
  )
}

export default MainPage

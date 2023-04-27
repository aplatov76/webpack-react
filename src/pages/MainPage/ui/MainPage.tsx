import { Input } from '@/shared/ui/Input'
import { MyListbox } from '@/shared/ui/Popups'
import { Page } from '@/widgets/Page/Page'

const MainPage = () => {
  return (
    <Page>
      <MyListbox
        defaultValue={'Выберите значение'}
        onChange={(value) => {}}
        value={''}
        items={[
          { value: '1', content: '123' },
          { value: '2', content: '124' },
          { value: '3', content: '1242', unavailable: true }
        ]}
      />
      <Input value="124"></Input>
    </Page>
  )
}

export default MainPage

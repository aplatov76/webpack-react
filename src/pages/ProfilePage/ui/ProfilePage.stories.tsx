import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country, Currency } from '@/entities/Currency/model/types/currency'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args: any = {}) => <ProfilePage {...args} />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.EUR
      }
    }
  })
]

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD
      }
    }
  })
]

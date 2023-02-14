import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import AboutPage from './AboutPage'

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args: any = {}) => <AboutPage {...args} />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

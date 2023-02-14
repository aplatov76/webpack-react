import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})

Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Hello'
}
Primary.decorators = [RouterDecorator]

export const Second = Template.bind({})

Second.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Hello'
}
Second.decorators = [RouterDecorator]

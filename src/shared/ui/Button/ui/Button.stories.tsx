import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ThemeButton } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Clear = Template.bind({})

Clear.args = {
  children: 'clear',
  theme: ThemeButton.CLEAR
}

export const OutlineTheme = Template.bind({})
OutlineTheme.args = {
  children: 'Hello',
  theme: ThemeButton.OUTLINE
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Hello'
}

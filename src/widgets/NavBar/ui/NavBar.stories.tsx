import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { NavBar } from './NavBar'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'widget/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [RouterDecorator]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [RouterDecorator]

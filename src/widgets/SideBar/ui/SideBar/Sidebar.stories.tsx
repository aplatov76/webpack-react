import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { SideBar } from './SideBar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'widget/Sidebar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [RouterDecorator]

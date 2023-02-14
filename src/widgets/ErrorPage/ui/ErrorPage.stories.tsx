import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ErrorPage } from './ErrorPage'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />

export const General = Template.bind({})
General.args = {}
General.decorators = [RouterDecorator]

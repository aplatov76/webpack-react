import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const General = Template.bind({})

General.args = {
  title: 'title',
  text: 'text'
}

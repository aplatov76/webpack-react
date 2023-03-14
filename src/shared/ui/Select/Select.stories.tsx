import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} label="Hello select" />

export const General = Template.bind({})

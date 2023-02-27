import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'

export default {
  title: 'widget/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const General = Template.bind({})
General.args = {
  children: 'lorem ipsum descripotion oversize black edition lorem ipsum descripotion oversize ize black edition'
}

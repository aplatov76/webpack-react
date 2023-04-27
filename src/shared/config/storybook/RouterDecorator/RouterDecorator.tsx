import { Story } from '@storybook/react'
import '@/app/styles/index.sass'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  )
}

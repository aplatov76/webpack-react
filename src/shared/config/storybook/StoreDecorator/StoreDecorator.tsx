import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import 'app/styles/index.sass'
// import { Provider } from 'react-redux'
// import { store } from '../../../../app/providers/StoreProvider/config/store'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <StoreProvider>
      <StoryComponent />
    </StoreProvider>
  )
}

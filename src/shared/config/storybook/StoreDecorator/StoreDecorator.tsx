import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import 'app/styles/index.sass'
import { Provider } from 'react-redux'
import { store } from '../../../../app/providers/StoreProvider/config/store'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <Provider store={store}>
      <StoryComponent />
    </Provider>
  )
}

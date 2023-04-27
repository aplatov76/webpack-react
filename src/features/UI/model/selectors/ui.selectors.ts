import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getUiScroll = (state: StateSchema) => state.ui.scroll
export const getUiScrollByPath = createSelector(
  getUiScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)

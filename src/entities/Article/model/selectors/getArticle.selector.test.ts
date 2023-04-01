import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type Article } from '../types/article'
import { getArticleDetailData } from './getArticle.selector'

describe('getArticleSelector.test', () => {
  test('should return empty state', () => {
    const data = {
      id: '1',
      title: 'title',
      subtitle: 'sub title',
      img: 'https://localhost:3000/img.png',
      user: {
        id: '1',
        username: 'apaltov'
      },
      views: 100,
      createdAt: new Date(),
      type: [],
      blocks: []
    } as Article
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
        isLoading: false
      }
    }
    expect(getArticleDetailData(state as StateSchema)).toEqual(data)
  })
})

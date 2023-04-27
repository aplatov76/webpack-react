import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { Country, Currency } from '@/entities/Currency'
import { getProfileData } from './getProfileSelector'

describe('getProfileSeloector.test', () => {
  test('should return empty state', () => {
    const data = {
      id: '1',
      age: 22,
      country: Country.Ukraina,
      lastname: 'lastname',
      first: 'asd',
      city: 'moscow',
      currency: Currency.EUR
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
        readonly: false,
        isLoading: false
      }
    }
    // username: '', password: '', error: null, isLoading: false
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
})

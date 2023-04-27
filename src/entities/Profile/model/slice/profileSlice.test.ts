import { type DeepPartial } from '@reduxjs/toolkit'
import { Country, Currency } from '@/entities/Currency'
import { type ProfileSchema } from '../types/profile'
import { reducer as profileReducer, setProfileData, setReadonly } from './profileSlice'

const formData = {
  id: '1',
  age: 22,
  country: Country.Ukraina,
  lastname: 'lastname',
  first: 'asd',
  city: 'moscow',
  currency: Currency.EUR
}

describe('profileSlice tests', () => {
  test('test action setProfileData', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { id: '1' },
      isLoading: false,
      readonly: false
    }

    expect(profileReducer(state as ProfileSchema, setProfileData(formData))).toEqual({
      data: formData,
      isLoading: false,
      readonly: false
    })
  })
})

describe('profileSlice set readonly', () => {
  test('test action set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false
    }
    expect(profileReducer(state as ProfileSchema, setReadonly(true))).toEqual({ readonly: true })
  })
})

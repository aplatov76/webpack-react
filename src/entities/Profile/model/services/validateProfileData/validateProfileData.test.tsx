import { Country, Currency } from '@/entities/Currency'
import { ValidateProfileError } from '../../types/profile'
import { validateProfileData } from './validateProfileData'

const formData = {
  id: '1',
  age: 22,
  country: Country.Ukraina,
  lastname: 'lastname',
  first: 'asd',
  city: 'moscow',
  currency: Currency.EUR
}

describe('validateProfileData.test', () => {
  test('Успешная валидация формы профиля', async () => {
    const result = validateProfileData(formData)

    expect(result).toEqual([])
  })

  test('Ошибка валидации формы профиля', async () => {
    const result = validateProfileData({ ...formData, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
})

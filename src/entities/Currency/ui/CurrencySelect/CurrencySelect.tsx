/* eslint-disable react/display-name */
import { Currency } from '@/entities/Currency'
import { MyListbox } from '@/shared/ui/Popups'
import { memo } from 'react'

interface CurrecncySelectProps {
  classname?: string
  value?: Currency
  onChange?: (item: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrecncySelectProps) => {
  const { value, onChange, classname, readonly = false } = props

  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency)
  }

  return (
    <MyListbox
      defaultValue={'Укажите валюту'}
      onChange={onChangeHandler}
      value={value}
      items={options}
      direction={'top left'}
    />
  )
})
